const mongoose = require('mongoose');

const cmsSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  title: {
    type: String,
    required: false,
    unique: true,
    // trim: true
  },
  businessName: {
    type: String,
    required: true,
    unique: true,
    // trim: true
  },
  subtitle: {
    type: String,
    required: false,
    unique: true,
    // trim: true
  },
  carouselImages: [
    {
      id: { type: Number, required: true },
      image: { type: String, required: true },
      alt: { type: String, required: true },
    }
  ],
}, {
  timestamps: true
});

module.exports = mongoose.model('Cms', cmsSchema);
