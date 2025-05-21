import { authMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

// Bypass auth for the merge-pdf endpoint
export default authMiddleware({
  publicRoutes: ['/api/merge-pdf'],
  
  // Optional: Customize the behavior of the middleware
  afterAuth(auth, req) {
    // For the merge-pdf route, let it handle auth internally
    if (req.nextUrl.pathname === '/api/merge-pdf') {
      return NextResponse.next();
    }
    
    // Default auth handling for other routes
    return;
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};