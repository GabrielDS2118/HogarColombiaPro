import express from 'express';
import mongoose from 'mongoose';

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectar a la bd');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
