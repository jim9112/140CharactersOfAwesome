const express = require('express');

const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');


const Comment = require('../models/Comment');
// New comment
router.post('/', [auth, [
  check('content', 'Content is required').not().isEmpty(),
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    userName, content, postID,
  } = req.body;

  try {
    const newComment = new Comment({
      userName,
      content,
      postID,
    });

    const comment = await newComment.save();

    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// Get comments
router.get('/', auth, async (req, res) => {
  try {
    const comments = await Comment.find().sort({ date: -1 });
    res.json(comments);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// Delete comments
router.delete('/:id', auth, async (req, res) => {
  try {
    let comment = await Comment.findById(req.params.id);

    if (!comment) return res.status(404).json({ msg: 'Comment not found' });

    await Comment.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Comment Removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



module.exports = router;
