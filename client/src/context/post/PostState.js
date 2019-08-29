import React, { useReducer } from 'react';
import Axios from 'axios';

import PostContext from './postContext';
import postReducer from './postReducer';

import { ADD_POST, GET_POSTS, CLEAR_POSTS } from '../../types';

const PostState = (props) => {

    // hard coded state for testing purposes
    const initialState = {
        posts: []
    };

    const [state, dispatch] = useReducer(postReducer, initialState );
    // Get all posts
    const getPosts = async () => {
        try {
            const res = await Axios.get('/api/posts');
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        } catch (err) {
            
        }
    }
    // add post to feed
    const addPost = (post) => {
        dispatch({ type: ADD_POST, payload: post});
    };

    return(
        <PostContext.Provider value={{
            posts: state.posts,
            addPost,
            getPosts
        }}>
        { props.children}
        </PostContext.Provider>
    );
};

export default PostState;
