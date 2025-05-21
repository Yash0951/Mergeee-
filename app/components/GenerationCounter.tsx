'use client';

import { useEffect, useState } from 'react';

interface GenerationInfo {
  count: number;
  remainingGenerations: number;
  nextResetTime?: Date | null;
}

export default function GenerationCounter() {
  const [generationInfo, setGenerationInfo] = useState<GenerationInfo>({
    count: 0,
    remainingGenerations: 10,
    nextResetTime: null
  });
  const [loading, setLoading] = useState(true);

  const fetchGenerationInfo = async () => {
    try {
      const response = await fetch('/api/generation-count');
      if (!response.ok) {
        throw new Error('Failed to fetch generation count');
      }
      const info = await response.json();
      setGenerationInfo({
        count: info.count,
        remainingGenerations: info.remainingGenerations,
        nextResetTime: info.nextResetTime ? new Date(info.nextResetTime) : null
      });
    } catch (error) {
      console.error('Error fetching generation info:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch immediately when component mounts or key changes
    fetchGenerationInfo();
    
    // Refresh every minute
    const interval = setInterval(fetchGenerationInfo, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return null; // Don't show anything while loading
  }

  // Calculate the color based on remaining generations
  const getColorClass = () => {
    if (generationInfo.remainingGenerations <= 2) return 'text-red-500';
    if (generationInfo.remainingGenerations <= 5) return 'text-amber-500';
    return 'text-green-500';
  };

  return (
    <div className="flex items-center justify-center mb-4 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <span className="text-sm text-gray-700 dark:text-gray-200">
        PDF Generations: <span className={getColorClass()}>{generationInfo.remainingGenerations}</span> remaining
      </span>
    </div>
  );
} 