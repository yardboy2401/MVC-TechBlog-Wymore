const { Post } = require('../models');

const postData = [
    {
      "title": "Handlebars Rocks",
      "body": "A nice convenient way to render server-side data to the front-end views.",
      "user_id": "1"
    },
    {
      "title": "Why MVC is so important",
      "body": "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
      "user_id": "2"
    },
    {
      "title": "Authentication vs. Authorization",
      "body": "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
      "user_id": "3"
    }
  ]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

