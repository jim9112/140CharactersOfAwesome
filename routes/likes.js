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
router.get('/', auth, async (req, res) => {
  try {
    const likes = await Likes.find().sort({ date: -1 });
    res.json(likes);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// add new like to array
// use Put for this
router.put('/', auth, async (req, res) => {
  const { likes, _id, postID } = req.body;

  // build contact object
  const likeFields = {};
  likeFields.postID = postID;
  likeFields.likes = likes;

  try {
    let like = await Likes.findById(_id);

    if (!like) return res.status(404).json({ msg: 'Like not found' });

    like = await Likes.findByIdAndUpdate(_id,
      { $set: likeFields },
      { new: true });

    res.json(like);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
