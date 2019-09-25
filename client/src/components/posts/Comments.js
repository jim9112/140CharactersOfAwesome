/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import PostContext from '../../context/post/postContext';

const useStyles = makeStyles(theme => ({
  paper: {
    width: 400,
    margin: 'auto',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Comments = () => {
  const postContext = useContext(PostContext);
  const { commentView, closeComments } = postContext;
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={commentView}
      onClose={closeComments}
    >
      <div className={classes.paper}>
        <h2 id="simple-modal-title">Text in a modal</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </p>
      </div>
    </Modal>
  );
};

export default Comments;
