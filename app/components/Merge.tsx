'use client';

import { useState, useEffect } from 'react';
import FileUploader from './FileUploader';
import FileList from './FileList';
import GenerationCounter from './GenerationCounter';
import RateLimitPopup from './RateLimitPopup';
import { FileWithPreview } from '../types/file';

export default function Merge() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // State for rate limiting
  const [showRateLimitPopup, setShowRateLimitPopup] = useState(false);
  const [nextResetTime, setNextResetTime] = useState<Date | null>(null);
  // Add a refresh key to force GenerationCounter to update
  const [generationCounterKey, setGenerationCounterKey] = useState(0);

  // Check initial rate limit status
  useEffect(() => {
    const checkInitialRateLimit = async () => {
      try {
        const response = await fetch('/api/generation-count');
        if (!response.ok) {
          throw new Error('Failed to fetch generation count');
        }
        const info = await response.json();
        if (info.remainingGenerations <= 0 && info.nextResetTime) {
          setNextResetTime(new Date(info.nextResetTime));
          setShowRateLimitPopup(true);
        }
      } catch (error) {
        console.error('Error checking initial rate limit:', error);
      }
    };
    
    checkInitialRateLimit();
  }, []);

  const handleFilesSelected = (selectedFiles: FileWithPreview[]) => {
    // Add new files to the existing ones, limit to 10 total
    const updatedFiles = [...files, ...selectedFiles].slice(0, 10);
    setFiles(updatedFiles);
    setError(null);
  };

  const handleFileRemoved = (fileId: string) => {
    setFiles(files.filter(file => file.id !== fileId));
  };

  const handleFilesReordered = (reorderedFiles: FileWithPreview[]) => {
    setFiles(reorderedFiles);
  };

  const handleMergePDFs = async () => {
    if (files.length === 0) {
      setError('Please select at least one PDF file.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Create form data
      const formData = new FormData();
      
      // Add each file to the form data
      files.forEach((fileItem) => {
        formData.append('files', fileItem.file);
      });

      // Send the request to the API
      const response = await fetch('/api/merge-pdf', {
        method: 'POST',
        body: formData,
      });

      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        // For non-JSON responses or parsing errors, use text() first
        const contentType = response.headers.get('content-type');
        
        if (contentType && contentType.includes('application/json')) {
          try {
            const errorData = await response.json();
            
            // Handle rate limit error specifically
            if (response.status === 429 && errorData.nextResetTime) {
              setNextResetTime(new Date(errorData.nextResetTime));
              setShowRateLimitPopup(true);
              throw new Error('Generation limit exceeded. Please try again later.');
            }
            
            throw new Error(errorData.error || 'Failed to merge PDFs');
          } catch (jsonError) {
            // If JSON parsing fails, use the original error or a generic message
            if (jsonError instanceof Error) {
              throw jsonError;
            } else {
              throw new Error(`Server error (${response.status})`);
            }
          }
        } else {
          // For non-JSON responses
          const textError = await response.text();
          throw new Error(textError || `Server error (${response.status})`);
        }
      }

      // Response is OK, check if it's a PDF (blob)
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/pdf')) {
        // Get the file blob from the response
        const blob = await response.blob();
        
        // Create a download link
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'merged-document.pdf';
        document.body.appendChild(a);
        a.click();
        
        // Clean up
        URL.revokeObjectURL(url);
        document.body.removeChild(a);
        
        // Force generation counter to update
        setGenerationCounterKey(prev => prev + 1);
      } else {
        throw new Error('Server returned an invalid response format');
      }
    } catch (err) {
      console.error('Error merging PDFs:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Merge Your <span className="text-blue-600 dark:text-blue-400">PDF Files</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-8">
            Upload, arrange, and combine multiple PDF files into a single document.
          </p>
          
          {/* Generation Counter */}
          <div className="flex justify-center mb-6">
            <GenerationCounter key={generationCounterKey} />
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <FileUploader 
              onFilesSelected={handleFilesSelected}
              maxFiles={10}
              maxSize={100}
            />
            
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Selected Files
              </h3>
              
              <FileList 
                files={files}
                onFileRemoved={handleFileRemoved}
                onFilesReordered={handleFilesReordered}
              />
              
              {error && (
                <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-sm">
                  {error}
                </div>
              )}
              
              <button 
                className={`mt-6 px-8 py-4 w-full bg-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-200 ${
                  files.length === 0 || isLoading
                    ? 'opacity-50 cursor-not-allowed hover:bg-blue-600'
                    : 'hover:bg-blue-700'
                }`}
                onClick={handleMergePDFs}
                disabled={files.length === 0 || isLoading}
              >
                {isLoading ? 'Merging PDFs...' : 'Merge PDFs'}
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">How it Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 text-lg font-bold">1</div>
                <p className="text-gray-600 dark:text-gray-300">Upload your PDF files</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 text-lg font-bold">2</div>
                <p className="text-gray-600 dark:text-gray-300">Arrange them in your preferred order</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 text-lg font-bold">3</div>
                <p className="text-gray-600 dark:text-gray-300">Click &apos;Merge PDFs&apos; and download</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Rate Limit Popup */}
      {showRateLimitPopup && nextResetTime && (
        <RateLimitPopup 
          nextResetTime={nextResetTime} 
          onClose={() => setShowRateLimitPopup(false)} 
        />
      )}
    </div>
  );
} 