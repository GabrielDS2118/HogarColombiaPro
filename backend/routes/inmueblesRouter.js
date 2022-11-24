import mongoose from 'mongoose';
import express from 'express';
import Inmueble from '../models/inmueble.model.js';

const inmuebleRouter = express.Router();

inmuebleRouter.get('/', async (req, res) => {
  const listInmbueles = await Inmueble.find();
  res.send(listInmbueles);
});

export default inmuebleRouter;
