import { connectToMongoDB } from './mongodb';
import { auth } from '@clerk/nextjs';

// Constants
const MAX_GENERATIONS = 10;
const COOLDOWN_PERIOD_MS = 60 * 60 * 1000; // 1 hour

// Interface for generation record
interface GenerationRecord {
  userId: string;
  count: number;
  lastResetTime: Date;
}

export async function checkUserGenerationLimit(): Promise<{
  canGenerate: boolean;
  remainingGenerations: number;
  nextResetTime?: Date;
}> {
  // Get current user
  let userId: string | null;
  try {
    const authResult = await auth();
    userId = authResult.userId;
  } catch (error) {
    console.error('Error getting user authentication:', error);
    // Fallback to allow generation in case of auth error
    return { canGenerate: true, remainingGenerations: MAX_GENERATIONS };
  }
  
  // If no user is authenticated, treat as a new user with full generation quota
  if (!userId) {
    return { canGenerate: true, remainingGenerations: MAX_GENERATIONS };
  }

  try {
    // Connect to MongoDB
    const { client } = connectToMongoDB();
    const database = client.db('Mergeee!');
    const generations = database.collection<GenerationRecord>('generations');

    // Find the user's generation record
    const userRecord = await generations.findOne({ userId });

    const currentTime = new Date();
    
    // If no record exists or the cooldown period has passed, create/reset the record
    if (!userRecord || (currentTime.getTime() - userRecord.lastResetTime.getTime() >= COOLDOWN_PERIOD_MS)) {
      try {
        await generations.updateOne(
          { userId },
          { 
            $set: {
              count: 1,
              lastResetTime: currentTime
            }
          },
          { upsert: true }
        );
      } catch (updateError) {
        console.error('Error updating generation record:', updateError);
        // Allow generation even if update fails
        return { canGenerate: true, remainingGenerations: MAX_GENERATIONS - 1 };
      }
      
      return { 
        canGenerate: true, 
        remainingGenerations: MAX_GENERATIONS - 1 
      };
    }
    
    // Check if user has reached the generation limit
    if (userRecord.count >= MAX_GENERATIONS) {
      const nextResetTime = new Date(userRecord.lastResetTime.getTime() + COOLDOWN_PERIOD_MS);
      return { 
        canGenerate: false, 
        remainingGenerations: 0,
        nextResetTime
      };
    }
    
    // Increment generation count
    try {
      await generations.updateOne(
        { userId },
        { $inc: { count: 1 } }
      );
    } catch (incrementError) {
      console.error('Error incrementing generation count:', incrementError);
      // Allow generation even if update fails, but don't count it
      return { 
        canGenerate: true, 
        remainingGenerations: MAX_GENERATIONS - userRecord.count
      };
    }
    
    return { 
      canGenerate: true, 
      remainingGenerations: MAX_GENERATIONS - (userRecord.count + 1)
    };
  } catch (error) {
    console.error('Error checking generation limit:', error);
    // In case of error, allow the generation to avoid blocking users
    return { canGenerate: true, remainingGenerations: 0 };
  }
}

export async function getCurrentUserGenerationCount(): Promise<{
  count: number;
  remainingGenerations: number;
  nextResetTime?: Date;
}> {
  let userId: string | null;
  try {
    const authResult = await auth();
    userId = authResult.userId;
  } catch (error) {
    console.error('Error getting user authentication:', error);
    return { count: 0, remainingGenerations: MAX_GENERATIONS };
  }
  
  if (!userId) {
    return { count: 0, remainingGenerations: MAX_GENERATIONS };
  }
  
  try {
    const { client } = connectToMongoDB();
    const database = client.db('Mergeee!');
    const generations = database.collection<GenerationRecord>('generations');
    
    const userRecord = await generations.findOne({ userId });
    
    if (!userRecord) {
      return { count: 0, remainingGenerations: MAX_GENERATIONS };
    }
    
    const currentTime = new Date();
    
    // Check if cooldown period has passed
    if (currentTime.getTime() - userRecord.lastResetTime.getTime() >= COOLDOWN_PERIOD_MS) {
      return { count: 0, remainingGenerations: MAX_GENERATIONS };
    }
    
    const nextResetTime = new Date(userRecord.lastResetTime.getTime() + COOLDOWN_PERIOD_MS);
    const remainingGenerations = Math.max(0, MAX_GENERATIONS - userRecord.count);
    
    return {
      count: userRecord.count,
      remainingGenerations,
      nextResetTime
    };
  } catch (error) {
    console.error('Error getting generation count:', error);
    // In case of database error, return max generations to avoid blocking users
    return { count: 0, remainingGenerations: MAX_GENERATIONS };
  }
} 