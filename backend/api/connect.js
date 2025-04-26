import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const URI = process.env.MONGODB_URI;
const DATABASE_NAME = process.env.MONGODB_DATABASE_NAME || "spotify";

const client = new MongoClient(URI);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db(DATABASE_NAME);
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
}

export const db = await connectToDatabase();