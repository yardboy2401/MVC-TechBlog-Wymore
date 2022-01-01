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

  //seed users and hash passwords upon creation
const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;