import { clerkMiddleware } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// This function defines which routes to exclude from authentication
function isPublicRoute(path) {
  // Define the routes that should be public
  const publicRoutes = [
    '/api/merge-pdf'
  ];
  
  return publicRoutes.some(pattern => 
    path === pattern || 
    path.startsWith(`${pattern}/`)
  );
}

// Define the middleware
export default function middleware(request) {
  const { pathname } = request.nextUrl;
  
  // Skip authentication for specific routes
  if (isPublicRoute(pathname)) {
    return NextResponse.next();
  }
  
  // Use Clerk middleware for protected routes
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