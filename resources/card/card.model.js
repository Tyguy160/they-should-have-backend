const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 140,
    index: true,
  },
  date: { type: Date, default: Date.now(), required: true },
  hearts: { type: Number, default: 0, required: true },
});

const Card = mongoose.model('card', cardSchema);

module.exports = { Card };
