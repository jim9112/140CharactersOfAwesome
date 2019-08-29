const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');


const User = require('../models/User');
const Post = require('../models/Post');


// get posts
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// @route    POST api/posts
// @desc     Add new posts
// @access   Private
router.post('/', [auth, [
  check('content', 'Content is required').not().isEmpty(),
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    userName, content,
  } = req.body;

  try {
    const newPost = new Post({
      userName,
      content,
      user: req.user.id,
    });

    const post = await newPost.save();

    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
