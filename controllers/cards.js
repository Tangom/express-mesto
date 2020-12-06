const path = require('path');

const readFile = require('../helpers/readFiles');

const pathToCards = path.join(__dirname, '..', 'data', 'cards.json');

function getCards(req, res) {
  return readFile(pathToCards)
    .then((cards) =>{return res.status(200).send(cards)})
    .catch((err) =>{return res.status(500).send({ status: 500, message: err.message })
  });
}

module.exports = getCards;
