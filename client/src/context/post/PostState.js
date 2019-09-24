/* eslint-disable react/jsx-filename-extension */
import React, { useReducer, useContext } from 'react';
import axios from 'axios';

import PostContext from './postContext';
import AuthContext from '../auth/authContext';
import postReducer from './postReducer';

import { ADD_POST, GET_POSTS, CLEAR_POSTS, TOGGLE_DRAWER, DELETE_POST } from '../../types';

const PostState = (props) => {
  const authContext = useContext(AuthContext);

  const { user } = authContext;

  const initialState = {
    posts: [],
    drawer: false,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);
  // Get all posts
  const getPosts = async () => {
    try {
      const res = await axios.get('/api/posts');
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    } catch (err) {

    }
  };
    // add post to feed
  const addPost = async (post) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/posts', post, config);
      dispatch({
        type: ADD_POST,
        payload: res.data,
      });
    } catch (err) {

    }
  };


  // Toggle menu drawer
  const openDrawer = () => {
    dispatch({
      type: TOGGLE_DRAWER,
      payload: true,
    });
  };
  const closeDrawer = () => {
    dispatch({
      type: TOGGLE_DRAWER,
      payload: false,
    });
  };

  // Display current users posts

  // Delete posts
  const deletePost = async (id) => {
    try {
      await axios.delete(`/api/posts/${id}`, user);
      dispatch({ type: DELETE_POST, payload: id });
    } catch (err) {
      
    }
    
  };
  // Clear posts

  const clearPosts = () => {
    dispatch({
      type: CLEAR_POSTS,
    });
  };

  return (
    <PostContext.Provider value={{
      posts: state.posts,
      drawer: state.drawer,
      addPost,
      getPosts,
      clearPosts,
      openDrawer,
      closeDrawer,
      deletePost,
    }}
    >
      { props.children}
    </PostContext.Provider>
  );
};

export default PostState;
