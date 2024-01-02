//Exposes a global connection to the MongoDB Atlas database.
import { MongoClient, ServerApiVersion} from "mongodb";
import dotenv from 'dotenv'
//Don't forgert to Edit this in your .env file..
dotenv.config()
const secret_uri = process.env.ATLAS_URI;
const connectionstring = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PWD}@robotdreams.w27vxcv.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(connectionstring, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
let dbConnection;
export async function connectToServer(callback) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("You successfully connected to MongoDB!");
        dbConnection = client; // Save the client connection
        callback() //Return safely to expressJS
    } catch (e) {
        console.error(e);
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
//connectToServer().catch(console.dir)
export function getDb() {
    return dbConnection;
}