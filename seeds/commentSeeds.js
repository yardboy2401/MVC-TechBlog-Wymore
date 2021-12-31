const { Comment } = require('../models');

const commentData = [
    {
      "comment_text": "Second Approve Handlebars Rocks",
      "post_id": "3",
      "user_id": "3"
    },
    {
        "comment_text": "Second Approve Test Rocks",
        "post_id": "2",
        "user_id": "2"
      },
      {
        "comment_text": "Second Approve TestTest Rocks",
        "post_id": "1",
        "user_id": "1"
      }
  ]

  const seedComments = () => Comment.bulkCreate(commentData);

  module.exports = seedComments;