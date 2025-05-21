import { MongoClient, ServerApiVersion } from 'mongodb';

// Cached MongoDB client connection
let cachedClient: MongoClient | null = null;
let cachedClientPromise: Promise<MongoClient> | null = null;

if (!process.env.MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

const uri = process.env.MONGODB_URI;

export function connectToMongoDB() {
  if (cachedClient && cachedClientPromise) {
    return { client: cachedClient, clientPromise: cachedClientPromise };
  }

  try {
    cachedClient = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
      // Add connection options for better stability
      connectTimeoutMS: 10000, // 10 seconds
      socketTimeoutMS: 45000, // 45 seconds
      maxPoolSize: 50, // Maximum pool size
      minPoolSize: 5, // Minimum pool size
    });

    cachedClientPromise = cachedClient.connect()
      .catch(err => {
        console.error('MongoDB connection error:', err);
        // Reset cached values so next call tries again
        cachedClient = null;
        cachedClientPromise = null;
        throw err;
      });

    return { client: cachedClient, clientPromise: cachedClientPromise };
  } catch (err) {
    console.error('Error creating MongoDB client:', err);
    throw err;
  }
}

// Export a module-cached connection promise
export default connectToMongoDB; 