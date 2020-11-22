const { Card } = require('./card.model');

const getCardById = async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      res.status(404).json({
        message: "Uh oh, looks like there isn't a card with that ID.",
      });
    }
    res.status(200).json(card);
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

const getCards = async (req, res) => {
  try {
    console.log('fetching and sorting');
    let sortBy = '';
    let search = req.query.search;
    if (req.query.sortBy === 'oldest') {
      sortBy = 'date';
    }
    if (req.query.sortBy === 'newest') {
      sortBy = '-date';
    }
    if (req.query.sortBy === 'popularity') {
      sortBy = 'hearts';
    }
    console.log(sortBy);
    const cards = await Card.find({}).sort(sortBy);
    if (!cards) {
      res
        .status(404)
        .json({ message: 'Uh oh, looks like there are no cards.' });
    }
    return res.status(200).json(cards);
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

const createCard = async (req, res) => {
  try {
    const newCard = new Card({
      description: req.body.description,
      date: Date.now(),
    });
    await newCard.save();
    res.status(200).json({ message: 'card created' });
  } catch (err) {
    console.error(err);
    res.status(400).end();
  }
};

const incrementPopularity = async (req, res) => {
  try {
    console.log(req.body);
    const existingCard = await Card.findById({ _id: req.body.id });
    existingCard.hearts += req.body.toggle ? 1 : -1;
    await existingCard.save();
    res
      .status(200)
      .json({ message: `incremented popularity on ${req.body.id}` });
  } catch (err) {
    res.status(400).end();
    console.error(err);
  }
};

module.exports = { getCardById, getCards, createCard, incrementPopularity };
