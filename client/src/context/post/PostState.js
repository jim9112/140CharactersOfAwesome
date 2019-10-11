/* eslint-disable react/jsx-filename-extension */
import React, { useReducer, useContext } from 'react';
import axios from 'axios';

import PostContext from './postContext';
import AuthContext from '../auth/authContext';
import postReducer from './postReducer';

import {
  ADD_POST,
  GET_POSTS,
  CLEAR_POSTS,
  TOGGLE_DRAWER,
  DELETE_POST,
  TOGGLE_COMMENTS,
  SET_CURRENT_POST,
} from '../../types';

const PostState = (props) => {
  const authContext = useContext(AuthContext);

  const { user } = authContext;

  const initialState = {
    posts: [],
    drawer: false,
    commentView: false,
    commentViewPost: {
      userName: '',
      content: '',
    },
    currentPost: null,
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  // Get all posts
  const getPosts = async () => {
    try {
      const res = await axios.get('/api/posts');
      dispatch({
        type: GET_POSTS,
        payload: res.data,
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

  // Toggle comment view
  const openComments = () => {
    dispatch({
      type: TOGGLE_COMMENTS,
      payload: true,
    });
  };
  const closeComments = () => {
    dispatch({
      type: TOGGLE_COMMENTS,
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

  // Set current post view
  const setCurrentPost = (post) => {
    dispatch({
      type: SET_CURRENT_POST,
      payload: post,
    });
  };

  return (
    <PostContext.Provider value={{
      posts: state.posts,
      drawer: state.drawer,
      commentView: state.commentView,
      currentPost: state.currentPost,
      addPost,
      getPosts,
      clearPosts,
      openDrawer,
      closeDrawer,
      deletePost,
      openComments,
      closeComments,
      setCurrentPost,
    }}
    >
      { props.children }
    </PostContext.Provider>
  );
};

export default PostState;
