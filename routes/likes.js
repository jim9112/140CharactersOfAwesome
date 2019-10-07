const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const Likes = require('../models/Likes');

// add new like array for post
router.post('/', [auth, [
  check('postID', 'PostID is required').not().isEmpty(),
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    postID, likes,
  } = req.body;

  try {
    const newLike = new Likes({
      postID,
      likes,
    });

    const like = await newLike.save();

    res.json(like);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// get all likes

// add new like to array
// use Put for this

module.exports = router;
