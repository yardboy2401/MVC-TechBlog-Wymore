const { User } = require('../models');

const userData = [
    {
      "username": "Ted",
      "email": "ted@hotmail.com",
      "password": "password1234"
    },
    {
      "username": "Frank",
      "email": "frank@gmail.com",
      "password": "password1234"
    },
    {
      "username": "Johnny",
      "email": "johnny@yahoo.com",
      "password": "password1234"
    }
  ]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;