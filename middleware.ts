import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

// Simple middleware function that checks the route first
export default function middleware(request: NextRequest) {
  // Skip authentication for specific API routes
  if (request.nextUrl.pathname === '/api/merge-pdf' || 
      request.nextUrl.pathname.startsWith('/api/merge-pdf/') ||
      request.nextUrl.pathname === '/api/generation-count' ||
      request.nextUrl.pathname.startsWith('/api/generation-count/')) {
    return NextResponse.next();
  }
  
  // For other routes, use Clerk's middleware
  // @ts-ignore - Clerk's middleware typing is inconsistent across versions
  return clerkMiddleware()(request);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};