const mongoose = require('mongoose');

const url = 'mongodb+srv://user:pass1234@cluster0.prae2.mongodb.net/test';

const connect = () => {
  return mongoose.connect(url, { useNewUrlParser: true });
};

module.exports = { connect };
