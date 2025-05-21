import { NextResponse } from 'next/server';
import { getCurrentUserGenerationCount } from '@/app/lib/rateLimit';

export async function GET() {
  try {
    // Get the current user's generation count info
    const generationInfo = await getCurrentUserGenerationCount();
    
    // Return the generation count info
    return NextResponse.json({
      count: generationInfo.count,
      remainingGenerations: generationInfo.remainingGenerations,
      nextResetTime: generationInfo.nextResetTime || null
    });
  } catch (error) {
    console.error('Error getting generation count:', error);
    // Return a more specific error message if possible
    const errorMessage = error instanceof Error ? error.message : 'Failed to get generation count';
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 