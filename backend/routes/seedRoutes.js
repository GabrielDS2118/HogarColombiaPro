import express from 'express';
import data from '../data.js';
import User from '../models/user.model.js';
import Inmueble from '../models/inmueble.model.js';

const seedRouter = express.Router();

seedRouter.get('/', (req, res) => {
  res.send('Hi seed');
});
seedRouter.post('/create-agentes', async (req, res) => {
  await User.remove({});
  const users_created = await User.insertMany(data.agentes);
  res.send({ users_created });
});

seedRouter.post('/create-inmuebles', async (re, res) => {
  await Inmueble.remove({});
  const listUsers = await User.find();
  const idUsers = listUsers.map((user) => {
    return user._id;
  });
  const listInmbueles = data.inmuebles;

  listInmbueles.forEach((inmueble) => {
    if (inmueble.business === 'Rent/Sale') {
      console.log('Es Rent/Sale');
      Inmueble.create({
        type: inmueble.type,
        business: inmueble.business,
        name: inmueble.name,
        description: inmueble.description,
        image: inmueble.image,
        country: inmueble.country,
        address: inmueble.address,
        bedrooms: inmueble.bedrooms,
        bathrooms: inmueble.bathrooms,
        surface: inmueble.surface,
        year: inmueble.year,
        price: inmueble.price[0],
        priceSecond: inmueble.price[1],
        agent: idUsers[Math.floor(Math.random() * idUsers.length)],
      });
    } else {
      Inmueble.create({
        type: inmueble.type,
        business: inmueble.business,
        name: inmueble.name,
        description: inmueble.description,
        image: inmueble.image,
        country: inmueble.country,
        address: inmueble.address,
        bedrooms: inmueble.bedrooms,
        bathrooms: inmueble.bathrooms,
        surface: inmueble.surface,
        year: inmueble.year,
        price: inmueble.price[0],
        priceSecond: 'nan',
        agent: idUsers[Math.floor(Math.random() * idUsers.length)],
      });
    }
  });

  const inmueblesCreated = await Inmueble.find();
  res.send(inmueblesCreated);
});

export default seedRouter;
