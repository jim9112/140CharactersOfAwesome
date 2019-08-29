/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import PropTypes from 'prop-types';

const Post = ({ post }) => {
  return (
    <div className="orange bottom-border">
      <h3>{post.userName}</h3>
      <p className="text-center">{post.content}</p>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
