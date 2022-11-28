import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name + ' ' + user.lastName,
      email: user.email,
      role: user.role,
    },

    process.env.JWT_SECRET
  );
};
