const router = require('express').Router();
const { getUsers, getUsersId } = require('../controllers/users');

router.get('/users', getUsers);

router.get('/users/:id', getUsersId);

module.exports = router;
