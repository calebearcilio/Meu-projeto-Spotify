import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();
const URI = process.env.MONGODB_URI;

const client = new MongoClient(URI);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("spotify");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
}

export const db = await connectToDatabase();