const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  postID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('comment', CommentSchema);
