import mongoose from 'mongoose';
import express from 'express';
import Inmueble from '../models/inmueble.model.js';
import User from '../models/user.model.js';

const inmuebleRouter = express.Router();

inmuebleRouter.get('/', async (req, res) => {
  const listInmbueles = await Inmueble.find();
  res.send(listInmbueles);
});

inmuebleRouter.get('/distinct', async (req, res) => {
  const countries = await Inmueble.distinct('country');
  const types = await Inmueble.distinct('type');
  const bussines = await Inmueble.distinct('business');
  res.send({ countries, types, bussines });
});

inmuebleRouter.get('/filter', async (req, res) => {
  const { business, type, location, order } = req.query;

  const isDefault = (str) => {
    return str.includes('any');
  };

  const filterBusiness = isDefault(business) ? {} : { $regex: business };
  const filterType = isDefault(type) ? {} : type;
  const filterLocation = isDefault(location) ? {} : location;
  const filterOrder = order === 'ASC' ? { price: 1 } : { price: -1 };

  const inmueblesFiltered = await Inmueble.find({
    business: filterBusiness,
    type: filterType,
    location: filterLocation,
  }).sort(filterOrder);

  res.send(inmueblesFiltered);
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
