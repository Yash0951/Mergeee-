import { NextResponse } from 'next/server';
import { getCurrentUserGenerationCount } from '@/app/lib/rateLimit';

// Add OPTIONS method to handle preflight requests for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}

export async function GET() {
  try {
    // Add CORS headers to allow the request from authenticated users
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    // Get the current user's generation count info
    const generationInfo = await getCurrentUserGenerationCount();
    
    // Return the generation count info
    return NextResponse.json({
      count: generationInfo.count,
      remainingGenerations: generationInfo.remainingGenerations,
      nextResetTime: generationInfo.nextResetTime || null
    }, {
      headers: corsHeaders
    });
  } catch (error) {
    console.error('Error getting generation count:', error);
    // Return a more specific error message if possible
    const errorMessage = error instanceof Error ? error.message : 'Failed to get generation count';
    
    return NextResponse.json(
      { error: errorMessage },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
      }
    );
  }
} 