const mongoose = require('mongoose');
const { cardSchema, kittySchema } = require('./schemas/schemas');

function initializeDB() {
  mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    // we're connected!
    console.log('Database connected');

    // console.log(kittySchema);
    // const Kitten = mongoose.model('Kitten', kittySchema);

    // const silence = new Kitten({ name: 'Silence' });
    // console.log(silence.name); // 'Silence'

    const Card = mongoose.model('Card', cardSchema);
    const card = new Card({ description: 'test' });
    // description: 'a way to go to the movies virtually.',

    // card.description = 'a way to go to the movies virtually.';
    // card.hearts = 10;

    card.save((err, card) => {
      if (err) return console.error(err);
      console.log(card);
    });
  });

  return db;
}

module.exports = { initializeDB };
