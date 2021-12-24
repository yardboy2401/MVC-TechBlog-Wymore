const { User } = require('../models');

const userData = [
    {
      "name": "Ted",
      "email": "ted@hotmail.com",
      "password": "password1234"
    },
    {
      "name": "Frank",
      "email": "frank@gmail.com",
      "password": "password1234"
    },
    {
      "name": "Johnny",
      "email": "johnny@yahoo.com",
      "password": "password1234"
    }
  ]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;