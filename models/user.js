const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /https?:\/\/w{0,3}[a-z0-9-._~:/?#[\]@!$&'()*+,;=]{0,}/gi.test(v);
      },
      message: 'Неверный url',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
