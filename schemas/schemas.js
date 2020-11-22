const { Schema } = require('mongoose');

const kittySchema = new Schema({
  name: String,
});

const cardSchema = new Schema({
  description: String,
  date: { type: Date, default: Date.now() },
  hearts: { type: Number, default: 0 },
});

module.exports = { cardSchema, kittySchema };
