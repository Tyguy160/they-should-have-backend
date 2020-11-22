const { Router } = require('express');
const {
  getCardById,
  getCards,
  createCard,
  incrementPopularity,
} = require('./card.controllers');

const router = Router();

router.get('/:id', getCardById);
router.get('/', getCards);
router.post('/', createCard);
router.post('/heart/', incrementPopularity);

module.exports = { router };
