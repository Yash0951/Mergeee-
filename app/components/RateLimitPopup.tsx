'use client';

import React from 'react';

interface RateLimitPopupProps {
  nextResetTime: Date;
  onClose: () => void;
}

export default function RateLimitPopup({ nextResetTime, onClose }: RateLimitPopupProps) {
  // Format the time until reset
  const formatTimeRemaining = () => {
    const now = new Date();
    const diffMs = nextResetTime.getTime() - now.getTime();
    
    if (diffMs <= 0) return 'now';
    
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMins / 60);
    const remainingMins = diffMins % 60;
    
    if (diffHours > 0) {
      return `${diffHours} hour${diffHours > 1 ? 's' : ''} ${remainingMins > 0 ? `and ${remainingMins} minute${remainingMins > 1 ? 's' : ''}` : ''}`;
    }
    
    return `${diffMins} minute${diffMins > 1 ? 's' : ''}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 max-w-md w-full mx-4 animate-fade-in">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">PDF Generation Limit Reached</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center mb-4 text-amber-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-medium">Generation Limit Reached</span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300">
            You&apos;ve reached your limit of 10 PDF generations per hour. 
            Please try again in {formatTimeRemaining()}.
          </p>
        </div>
        
        <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-6">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            Your PDF generation quota will reset automatically after the cooldown period.
          </p>
        </div>
        
        <button
          onClick={onClose}
          className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
        >
          I Understand
        </button>
      </div>
    </div>
  );
} 