//The main entry point for the Express server.
//Dependecies
import express from 'express'
import "./loadenvironment.js";
import cors from 'cors'

//Express setup
const app = express();
app.use(cors());
app.use(express.json())

//dotenv config
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || "5050"

//Default endpoint
app.get('/',(req,res) => {
    res.send(' Nothing to see here... GET/')
})

// Default error
app.use((err, _req, res, next) => {
    res.status(500).send("Uh oh! An unexpected error occured.")
  })
  

// Start the Express.js server
app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
})

