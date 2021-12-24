const router = require('express').Router();

const { User, Blog, Comment } = require('../../models');

const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll()
        .ehtn((commentData) => res.json(commentData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        })    
});

router.post('/', withAuth, (req, res) => {
    if(req.session) {
        Comment.create(
            {
                description: req.body.description,
                blog_id: req.body.blog_id,
                user_id: req.body.user_id
            }
        )
        .then(commentData => res.json(commentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err)
        })
    }
});

module.exports = router;