const { Blog } = require('../models');

const blogData = [
    {
      "name": "Handlebars Rocks",
      "description": "A nice convenient way to render server-side data to the front-end views.",
      "user_id": "1"
    },
    {
      "name": "Why MVC is so important",
      "description": "MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.",
      "user_id": "2"
    },
    {
      "name": "Authentication vs. Authorization",
      "description": "There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.",
      "user_id": "3"
    }
  ]

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;