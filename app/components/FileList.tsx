'use client';

import { useState } from 'react';
import { FileWithPreview } from '../types/file';

interface FileListProps {
  files: FileWithPreview[];
  onFilesReordered: (files: FileWithPreview[]) => void;
  onFileRemoved: (fileId: string) => void;
}

export default function FileList({
  files,
  onFilesReordered,
  onFileRemoved,
}: FileListProps) {
  const [draggedItem, setDraggedItem] = useState<number | null>(null);
  const [draggedOverItem, setDraggedOverItem] = useState<number | null>(null);
  
  if (files.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-10">
        No files selected yet
      </div>
    );
  }

  // Format file size to human-readable format
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleDragStart = (index: number) => {
    setDraggedItem(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>, index: number) => {
    e.preventDefault();
    setDraggedOverItem(index);
  };

  const handleDrop = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
    
    if (draggedItem === null || draggedOverItem === null || draggedItem === draggedOverItem) {
      setDraggedItem(null);
      setDraggedOverItem(null);
      return;
    }
    
    const items = Array.from(files);
    const itemToMove = items[draggedItem];
    
    // Remove the dragged item
    items.splice(draggedItem, 1);
    
    // Insert at the new position
    items.splice(draggedOverItem, 0, itemToMove);
    
    // Update state
    onFilesReordered(items);
    setDraggedItem(null);
    setDraggedOverItem(null);
  };

  return (
    <ul className="space-y-3">
      {files.map((file, index) => (
        <li
          key={file.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDragEnd={(e) => handleDrop(e)}
          onDrop={(e) => handleDrop(e)}
          className={`flex items-center justify-between bg-white dark:bg-gray-800 p-4 rounded-lg shadow border ${
            draggedOverItem === index
              ? 'border-blue-500 dark:border-blue-500'
              : 'border-gray-100 dark:border-gray-700'
          } cursor-move`}
        >
          <div className="flex items-center">
            <div className="w-8 h-8 flex items-center justify-center bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M5 12h14M5 16h14M5 8h3"></path>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {file.name}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {formatFileSize(file.size)}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-6 h-6 bg-gray-100 dark:bg-gray-700 rounded-full text-sm text-gray-500 dark:text-gray-400">
              {index + 1}
            </div>
            <button
              onClick={() => onFileRemoved(file.id)}
              className="text-gray-400 hover:text-red-500 transition-colors p-1"
              title="Remove file"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
} 