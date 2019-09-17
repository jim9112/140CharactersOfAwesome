import React, { useReducer } from 'react';
import axios from 'axios';

import PostContext from './postContext';
import postReducer from './postReducer';

import { ADD_POST, GET_POSTS, CLEAR_POSTS, TOGGLE_DRAWER } from '../../types';

const PostState = (props) => {

    // hard coded state for testing purposes
    const initialState = {
        posts: [],
        drawer: false,
    };

    const [state, dispatch] = useReducer(postReducer, initialState );
    // Get all posts
    const getPosts = async () => {
        try {
            const res = await axios.get('/api/posts');
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        } catch (err) {
            
        }
    }
    // add post to feed
    const addPost = async (post) => {
        const config = {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          try {
            const res = await axios.post('/api/posts', post, config)
      
            dispatch({ 
              type: ADD_POST,
              payload: res.data 
            });
          } catch (err) {
            
          } 
    };


    // Toggle menu drawer
    const openDrawer = () => {
        dispatch({
            type: TOGGLE_DRAWER,
            payload: true
        });   
    };
    const closeDrawer = () => {
        dispatch({
            type: TOGGLE_DRAWER,
            payload: false
        });   
    };

    // Display current users posts

    // Delete posts

    
    // Clear posts

    const clearPosts = () => {
        dispatch({
            type: CLEAR_POSTS
        });
    };

    return(
        <PostContext.Provider value={{
            posts: state.posts,
            drawer: state.drawer,
            addPost,
            getPosts,
            clearPosts,
            openDrawer,
            closeDrawer,
        }}>
        { props.children}
        </PostContext.Provider>
    );
};

export default PostState;
