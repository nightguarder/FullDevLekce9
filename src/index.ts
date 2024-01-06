import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

//Modules
import { db } from './config/atlasdb';
import { router } from './routes/routes';

require('dotenv').config();
//Express config
const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
//Middleware

//Variables
const port = process.env.PORT || 3000;
const host = process.env.HOST || "127.0.0.1"


//Default endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Nothing to see here...',
  });
});
//*Connect to db*
db.then(()=>{
  app.listen(port,()=>{
    console.log(`Server is running: http://${host}:${port}`);
  });
});

app.use('/api/v1/posts', router);


export default app;
