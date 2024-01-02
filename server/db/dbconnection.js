//Exposes a global connection to the MongoDB Atlas database.
import { MongoClient } from "mongodb";

//Edit thsi in your .env
const connectionString = process.env.ATLAS_URI;

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

export function connectToServer(callback) {
    // Implement Database connection

}
export function getDb() {
    return dbConnection;
}