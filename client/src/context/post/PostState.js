import React, { useReducer } from 'react';

import PostContext from './postContext';
import postReducer from './postReducer';

import { ADD_POST } from '../../types';

const PostState = (props) => {

    // hard coded state for testing purposes
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
            {
                id: 3,
                username: 'johndoe',
                post: 'I had quiet the day let me tell you about it'
            },
        ]
    }

    const [state, dispatch] = useReducer(postReducer, initialState );

    // add post to feed
    const addPost = (post) => {
        dispatch({ type: ADD_POST, payload: post});
    }

    return(
        <PostContext.Provider value={{
            posts: state.posts,
            addPost
        }}>
        { props.children}
        </PostContext.Provider>
    );
};

export default PostState;
