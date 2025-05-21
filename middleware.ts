import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';

// Create a matcher for the merge-pdf endpoint
const isPdfMergeRoute = createRouteMatcher(['/api/merge-pdf']);

// Custom middleware
const middleware = (req: NextRequest) => {
  // Allow merge-pdf route to bypass regular auth handling due to form data
  if (isPdfMergeRoute(req)) {
    // Let the merge-pdf route handle authentication internally
    return NextResponse.next();
  }
  
  // For all other routes, use Clerk's default middleware
  return clerkMiddleware()(req);
};

export default middleware;

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};