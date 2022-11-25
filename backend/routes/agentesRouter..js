import mongoose from 'mongoose';
import express from 'express';
import User from '../models/user.model.js';

const agenteRouter = express.Router();

agenteRouter.get('/', async (req, res) => {
  const agentes = await User.find({ role: 'agent' });
  res.send(agentes);
});

agenteRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const agente = await User.find({ role: 'agent', _id: id });
  res.send(agente);
});

export default agenteRouter;
