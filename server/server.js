//The main entry point for the Express server.
//Dependecies
import express from 'express'
import "./loadenvironment.mjs";
import cors from 'cors'
import mongodb from 'mongodb'
import dbcon from './db/dbconnection'
//Express setup
app.use(cors());
const app = express();
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
  
//Routing
app.use(require("./routes/record"));

//Database connection
dbcon.connectToServer(function (err) {
    if (err) {
      console.error(err);
      process.exit();
    }
});
//Server is running
app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
  });