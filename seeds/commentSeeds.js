const { Comment } = require('../models');

const commentData = [
    {
      "description": "Second Approve Handlebars Rocks",
      "blog_id": "3",
      "user_id": "3"
    },
    {
        "description": "Second Approve Test Rocks",
        "blog_id": "2",
        "user_id": "2"
      },
      {
        "description": "Second Approve TestTest Rocks",
        "blog_id": "1",
        "user_id": "1"
      }
  ]

  const seedComments = () => Comment.bulkCreate(commentData);

  module.exports = seedComments;