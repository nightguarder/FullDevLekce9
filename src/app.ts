import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import * as middlewares from './middlewares';
import api from './api';
import MessageResponse from './interfaces/MessageResponse';

require('dotenv').config();
//Express config
const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

//Default endpoint
app.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'Nothing to see here...',
  });
});

app.use('/api', api);

//Middleware
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
