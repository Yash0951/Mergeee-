'use client';

import { useState, useRef, useCallback } from 'react';
import { FileWithPreview } from '../types/file';

interface FileUploaderProps {
  onFilesSelected: (files: FileWithPreview[]) => void;
  maxFiles?: number;
  maxSize?: number; // in MB
}

export default function FileUploader({
  onFilesSelected,
  maxFiles = 10,
  maxSize = 100, // 100MB default
}: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = useCallback(
    (selectedFiles: FileList | null) => {
      if (!selectedFiles) return;

      const files = Array.from(selectedFiles);
      
      // Filter for PDF files only
      const pdfFiles = files.filter(file => file.type === 'application/pdf');
      
      if (pdfFiles.length === 0) {
        alert('Please select PDF files only.');
        return;
      }

      // Check file size
      const oversizedFiles = pdfFiles.filter(file => file.size > maxSize * 1024 * 1024);
      if (oversizedFiles.length > 0) {
        alert(`Some files exceed the maximum size of ${maxSize}MB.`);
        return;
      }

      // Convert to FileWithPreview
      const filesWithPreview = pdfFiles.map(file => ({
        file,
        id: URL.createObjectURL(file) + '-' + file.name,
        name: file.name,
        size: file.size,
      }));

      onFilesSelected(filesWithPreview);
    },
    [maxSize, onFilesSelected]
  );

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);
      
      const { files } = e.dataTransfer;
      handleFileChange(files);
    },
    [handleFileChange]
  );

  return (
    <div
      className={`border-2 border-dashed rounded-xl p-10 text-center transition-colors ${
        isDragging
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
          : 'border-blue-300 dark:border-blue-800'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        Drag and drop your PDF files here
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">or</p>
      <button
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200"
        onClick={() => fileInputRef.current?.click()}
      >
        Browse Files
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={(e) => handleFileChange(e.target.files)}
        multiple
        accept="application/pdf"
        className="hidden"
      />
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Maximum {maxFiles} files. Up to {maxSize}MB per file.
      </p>
    </div>
  );
} 