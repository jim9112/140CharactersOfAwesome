import React, { useContext } from 'react';

import Post from './Post';
import PostContext from '../../context/post/postContext';

const Posts = () => {
    const postContext = useContext(PostContext);

    const { posts } = postContext;
    
    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Posts;
