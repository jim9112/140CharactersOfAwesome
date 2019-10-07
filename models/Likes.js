const mongoose = require('mongoose');

const LikeSchema = mongoose.Schema({
  postID: {
    type: String,
    required: true,
  },
  likes: {
    type: Array,
  },
});


module.exports = mongoose.model('like', LikeSchema);
