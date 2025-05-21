const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  category: String,
  discount: Number,
  rating: Number,
  stock: Number,
  image: String,
  
   stripeProductId: {
    type: String,
    required: true
  },
  stripePriceId: {
    type: String,
    required: true
  },
},
{ timestamps: true });

module.exports = mongoose.model('Product', productSchema);
