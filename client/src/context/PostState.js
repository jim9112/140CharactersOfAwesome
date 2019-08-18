import React, { useReducer } from 'react';

import PostContext from './postContext';
import postReducer from './postReducer';

const PostState = (props) => {
    const initialState = {
        posts: [
            {
                id: 1,
                username: 'jim9112',
                post: 'Here are some words about my day'
            },
            {
                id: 2,
                username: 'bill123',
                post: 'I have some very different words about my day'
            },
        ]
    }

    const [state, dispatch] = useReducer(postReducer, initialState );

    return(
        <PostContext.Provider value={{
            posts: state.posts,
        }}>
        { props.children}
        </PostContext.Provider>
    );
};

export default PostState;