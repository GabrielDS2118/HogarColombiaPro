import mongoose from 'mongoose';

const inmuebleSchema = new mongoose.Schema({
  type: { type: String, require: true },
  business: { type: String, require: true },
  name: { type: String, require: true },
  description: { type: String, require: true },
  image: { type: String, require: true },
  country: { type: String, require: true },
  address: { type: String, require: true },
  bedrooms: { type: String, require: true },
  bathrooms: { type: String, require: true },
  surface: { type: String, require: true },
  year: { type: String, require: true },
  price: { type: String, require: true },
  priceSecond: { type: String, require: true },
  agent: { type: mongoose.Schema.Types.ObjectId, ref: 'User', require: true },
});

const Inmueble = mongoose.model('Inmueble', inmuebleSchema);
export default Inmueble;
