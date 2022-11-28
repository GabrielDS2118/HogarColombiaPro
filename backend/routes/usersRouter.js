import express from 'express';
import bycrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/user.model.js';

import { generateToken } from '../utils.js';
const userRouter = express.Router();

userRouter.post(
  '/sigin',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bycrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          lastname: user.lastName,
          email: user.email,
          role: user.role,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: 'Invalid email or password' });
  })
);

export default userRouter;
