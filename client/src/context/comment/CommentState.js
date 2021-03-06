/* eslint-disable react/jsx-filename-extension */
import React, { useReducer } from 'react';
import axios from 'axios';

import commentReducer from './commentReducer';
import CommentContext from './commentContext';

import {
  ADD_COMMENTS,
  GET_COMMENTS,
  GET_LIKES,
  ADD_LIKE_LIST,
  ADD_LIKE,
  DELETE_COMMENT,
  DELETE_LIKE,
} from '../../types';

const CommentState = (props) => {
  const initialState = {
    comments: [],
    likes: [],
  };

  const [state, dispatch] = useReducer(commentReducer, initialState);
  // Get all comments
  const getComments = async () => {
    try {
      const res = await axios.get('/api/comments');
      dispatch({
        type: GET_COMMENTS,
        payload: res.data,
      });
    } catch (err) {

    }
  };

  // Create new comment
  const addComment = async (comment) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/comments', comment, config);
      dispatch({
        type: ADD_COMMENTS,
        payload: res.data,
      });
    } catch (err) {

    }
  };

  // Delete comment
  const deleteComment = async (id) => {
    try {
      await axios.delete(`/api/comments/${id}`);
      dispatch({ type: DELETE_COMMENT, payload: id });
    } catch (err) {

    }
  };
  // get all post likes
  const getLikes = async () => {
    try {
      const res = await axios.get('/api/likes');
      dispatch({
        type: GET_LIKES,
        payload: res.data,
      });
    } catch (err) {

    }
  };

  // add like array
  const addLikeList = async (like) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/likes', like, config);
      dispatch({
        type: ADD_LIKE_LIST,
        payload: res.data,
      });
    } catch (err) {

    }
  };

  // add new like to exsisting array
  const addNewLike = async (like) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put('/api/likes/', like, config);

      dispatch({
        type: ADD_LIKE,
        payload: res.data
      });
    } catch (err) {

    } 
    
  };

  // Delete like
  const deleteLike = async (id) => {
    try {
      await axios.delete(`/api/likes/${id}`);
      dispatch({ type: DELETE_LIKE, payload: id });
    } catch (err) {

    }
  };
  return (
    <CommentContext.Provider value={{
      comments: state.comments,
      likes: state.likes,
      addComment,
      getComments,
      getLikes,
      addLikeList,
      addNewLike,
      deleteComment,
      deleteLike,
    }}
    >
      { props.children}
    </CommentContext.Provider>
  );
};

export default CommentState;
