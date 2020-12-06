const path = require('path');
const readFile = require('../helpers/readFiles');

const pathToUser = path.join(__dirname, '..', 'data', 'users.json');

function getUsers(req, res) {
  return readFile(pathToUser)
    .then((users) =>{return res.status(200).send(users)})
    .catch((err) =>{ return res.status(500).send({ status: 500, message: err.message })});
}

function getUsersId(req, res) {
  return readFile(pathToUser)
    .then((users) =>{return users.find((user) => user._id === req.params.id)})
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }

      return res.status(200).send(user);
    })
    .catch((err) =>{return res.status(500).send(err)});
}

module.exports = { getUsers, getUsersId };
