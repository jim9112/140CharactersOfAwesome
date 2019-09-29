/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Comment from './Comment';


import PostContext from '../../context/post/postContext';
import AuthContext from '../../context/auth/authContext';
import CommentContext from '../../context/comment/commentContext';


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
  const authContext = useContext(AuthContext);
  const commentContext = useContext(CommentContext);

  const { commentView, closeComments, currentPost } = postContext;
  const { user, loadUser } = authContext;
  const { comments, addComment } = commentContext;

  const classes = useStyles();

  const comment = {
    userName: `${user && user.userName}`,
    content: '',
    postID: currentPost._id,
  };


  const onChange = (e) => {
    comment.content = e.target.value;
  };

  const newForm = () => {
    document.getElementById('outlined-dense-multiline').value = '';
    document.getElementById('comment-form').reset();
    console.log(document.getElementById('outlined-dense-multiline').value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(comment);
    newForm();
  };

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={commentView}
      onClose={closeComments}
    >
      <div className={classes.paper}>
        <h2 id="simple-modal-title">{currentPost.userName}</h2>
        <p id="simple-modal-description">
          {currentPost.content}
        </p>
        <form action="" className="bottom-border" id="comment-form" onSubmit={onSubmit}>
          <TextField
            maxLength="140"
            id="outlined-dense-multiline"
            label="Say Something"
            className={classes.textField}
            margin="dense"
            variant="outlined"
            multiline
            rowsMax="4"
            onChange={onChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              Comment
          </Button>
        </form>
        <List>
          {comments.map((comment) => (
            currentPost._id === comment.postID && <Comment key={comment._id} comment={comment} />
          ))}
        </List>

      </div>
    </Modal>
  );
};

export default Comments;
