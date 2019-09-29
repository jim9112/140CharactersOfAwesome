/* eslint-disable react/jsx-filename-extension */
import React, { useReducer, useContext } from 'react';
import axios from 'axios';

import commentReducer from './commentReducer';
import CommentContext from './commentContext';

import { ADD_COMMENTS, GET_COMMENTS } from '../../types';

const CommentState = (props) => {
  const initialState = {
    comments: [],
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

  return (
    <CommentContext.Provider value={{
      comments: state.comments,
      addComment,
      getComments,
    }}
    >
      { props.children}
    </CommentContext.Provider>
  );
};

export default CommentState;
