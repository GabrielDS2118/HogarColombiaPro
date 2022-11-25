import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import seedRouter from './routes/seedRoutes.js';
import inmuebleRouter from './routes/inmueblesRouter.js';
import agenteRouter from './routes/agentesRouter..js';

import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const whiteList = ['http://localhost:3000/'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Coneccion exitosa a la base de datos HC');
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/generate', seedRouter);
app.use('/api/inmuebles', inmuebleRouter);
app.use('/api/agentes', agenteRouter);

app.get('/', (req, res) => {
  res.send('Hola HC');
});

app.listen(port, () => {
  console.log(`Server Hogar Colombia at http://localhost:${port}`);
});
