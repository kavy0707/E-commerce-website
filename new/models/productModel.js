const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  attributes: {
    orientation: String,
    plazas: String,
    material: String,
    tapiz: String,
    tamano: String,
    color: String
  }
});
module.exports = mongoose.model('Product', productSchema);
