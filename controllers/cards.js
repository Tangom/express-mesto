const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((data) => res.status(200).send(data))
    .catch(() => res.status(500).send({ message: 'Ошибка сервера' }));
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Переданы неверные данные' });
      }
      res.status(500).send({ message: 'Ошибка сервера' });
    });
};

const deleteCard = (req, res) => {
  const id = req.params.cardId;
  Card.findByIdAndRemove(id)
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Нет карточки с таким id' });
      }
      res.status(200).send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'Переданы неверные данные' });
      }
      res.status(500).send({ message: 'Ошибка сервера' });
    });
};

const likeCard = (req, res) => {
  const userId = req.user._id;
  const id = req.params.cardId;
  Card.findByIdAndUpdate(id, { $addToSet: { likes: userId } },
    { new: true })
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Нет данных' });
      }
      res.status(200).send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'Переданы неверные данные' });
      }
      res.status(500).send({ message: 'Ошибка сервера' });
    });
};

const dislikeCard = (req, res) => {
  const userId = req.user._id;
  const id = req.params.cardId;
  Card.findByIdAndUpdate(id, { $addToSet: { likes: userId } },
    { new: true })
    .then((card) => {
      if (!card) {
        res.status(404).send({ message: 'Нет данных' });
      }
      res.status(200).send(card);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'Переданы неверные данные' });
      }
      res.status(500).send({ message: 'Ошибка сервера' });
    });
};

module.exports = {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
};
