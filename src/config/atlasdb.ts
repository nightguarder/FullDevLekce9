//importing modules
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

//specified in details in env!!
const username = process.env.MONGO_USER 
const password = process.env.MONGO_PWD
const dbName = 'robotdreams' //Find this in Atlas

//connection string to mongo atlas
const connectionString = `mongodb+srv://${username}:${password}@${dbName}.nnmkd7g.mongodb.net/?retryWrites=true&w=majority`

const options = {
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  };

//db connection
export const db = mongoose.connect(connectionString, options)
.then(res => {
    if(res){
        console.log(`Successfully connected to ${dbName} at MongoDB Atlas`)
    }
    
}).catch(err => {
    console.log(err)
})
