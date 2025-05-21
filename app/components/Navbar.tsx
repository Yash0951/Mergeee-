"use client"
import Link from 'next/link';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import * as React from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto flex justify-between items-center p-4 h-16">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-xl text-blue-600 dark:text-blue-400 mr-10">
            Mergeee!
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors">
              Contact
            </Link>
            {/* <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors">
              How It Works
            </Link> */}
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Mobile navigation trigger */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          
          <SignedOut>
            <div className="hidden sm:flex gap-3">
              <SignInButton mode="modal">
                <button className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  Sign Up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden p-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900`}>
        <nav className="flex flex-col space-y-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors">
            Contact
          </Link>
          <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors">
            How It Works
          </Link>
          <Link href="/merge" className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium transition-colors">
            Merge PDFs
          </Link>
          <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
            <SignedOut>
              <div className="flex flex-col space-y-3">
                <SignInButton mode="modal">
                  <button className="w-full px-4 py-2 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 font-medium border border-gray-300 dark:border-gray-700 rounded-lg">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            </SignedOut>
          </div>
        </nav>
      </div>
    </header>
  );
} 