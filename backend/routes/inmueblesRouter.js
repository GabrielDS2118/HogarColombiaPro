import mongoose from 'mongoose';
import express from 'express';
import Inmueble from '../models/inmueble.model.js';
import User from '../models/user.model.js';

const inmuebleRouter = express.Router();

inmuebleRouter.get('/', async (req, res) => {
  const listInmbueles = await Inmueble.find();
  res.send(listInmbueles);
});

inmuebleRouter.get('/:id', async (req, res) => {
  const { id } = req.params;

  Inmueble.find({ _id: id }, (err, agents) => {
    User.populate(agents, { path: 'agent' }, (err, agents) => {
      res.send({
        info: agents,
      });
    });
  });
});

export default inmuebleRouter;
