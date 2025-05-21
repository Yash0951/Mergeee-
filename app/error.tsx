'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
      <div className="max-w-md w-full p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-xl text-center">
        <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full">
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
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Something went wrong!</h1>
        
        {error.message.includes('too large') || error.message.includes('payload') ? (
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The files you&apos;re trying to merge are too large for our server to process.
              Please use smaller files (under 4MB total) or try again later.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6">
              <p className="text-yellow-700 dark:text-yellow-400 text-sm">
                <strong>Tip:</strong> Try reducing the file size by using a PDF compressor
                before uploading, or split your merge into multiple smaller batches.
              </p>
            </div>
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            An unexpected error occurred. We&apos;ve been notified and are working on a fix.
          </p>
        )}
        
        <button
          onClick={reset}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-all duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
} 