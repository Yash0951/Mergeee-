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

  cachedClient = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  cachedClientPromise = cachedClient.connect();

  return { client: cachedClient, clientPromise: cachedClientPromise };
}

// Export a module-cached connection promise
export default connectToMongoDB; 