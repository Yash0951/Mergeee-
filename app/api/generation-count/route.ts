import { NextRequest, NextResponse } from 'next/server';
import { getCurrentUserGenerationCount } from '@/app/lib/rateLimit';

export async function GET(req: NextRequest) {
  try {
    // Get the current user's generation count info
    const generationInfo = await getCurrentUserGenerationCount();
    
    // Return the generation count info
    return NextResponse.json({
      count: generationInfo.count,
      remainingGenerations: generationInfo.remainingGenerations,
      nextResetTime: generationInfo.nextResetTime
    });
  } catch (error) {
    console.error('Error getting generation count:', error);
    return NextResponse.json(
      { error: 'Failed to get generation count' },
      { status: 500 }
    );
  }
} 