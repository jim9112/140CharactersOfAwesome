/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useEffect } from 'react';

import Nav from '../components/layout/Nav';
import Posts from '../components/posts/Posts';
import PostContext from '../context/post/postContext';
import AuthContext from '../context/auth/authContext';

import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    color: '#ED8121',
    // border: '1px solid green',
    '& label': {
      color: '#ED8121'
    },
    '& .MuiInputBase-input': {
      color: '#ED8121',
    },
    '& focus': {
      outlineColor: '#ED8121',
    }
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    maxWidth: '100px',
    backgroundColor: 'green',
  },
  
}));

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
});

const Feed = () => {
  const postContext = useContext(PostContext);
  const authContext = useContext(AuthContext);

  const { addPost, getPosts, clearPosts} = postContext;
  const { user, loadUser } = authContext;

  const classes = useStyles();

  useEffect(() => {
    loadUser();
    getPosts();
  }, []);

  const post = {
    id: '',
    userName: `${user && user.userName}`,
    content: '',
  };

  // resets post input
  const resetForm = () => {
    document.getElementById('feed-form').reset();
  };

  // updates post variable as the user types
  const onChange = (e) => {
    post.content = e.target.value;
  };

  // submitting the form and clearing it
  const onSubmit = (e) => {
    e.preventDefault();
    addPost(post);
    resetForm();
  };

  
  return (
    <div className='container feed-page'>
      <Nav />
      <div className="feed-middle">
        <h1 className="bottom-border orange">Hello { user && user.userName }</h1>
        <form action="" className="bottom-border" id="feed-form" onSubmit={onSubmit}>
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>  
        <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >Post</Button>
          {/* <textarea maxLength="140" cols="50" placeholder="Say Something" onChange={onChange}></textarea> */}
        </form>
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
