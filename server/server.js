//Dependecies
import express from 'express'

//Express setup
const app = express();
app.use(express.json())

//dotenv config
dotenv.config();
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || "5050"

//Default endpoint
app.get('/',(req,res) => {
    res.send(' Nothing to see here... GET/')
})
//Server is running
app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
  });