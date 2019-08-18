import React from 'react';
import PropTypes from 'prop-types';

const Post = ({ post }) => {
    return (
        <div>
            <h3>{post.username}</h3>
            <p>{post.post}</p>
        </div>
    )
};

Post.propTypes = {
    post: PropTypes.object.isRequired
};

export default Post;
