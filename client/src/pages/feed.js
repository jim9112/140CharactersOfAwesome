/* eslint-disable react/jsx-filename-extension */
import React, { useContext, useEffect } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuIcon from '@material-ui/icons/Menu';

import Nav from '../components/layout/Nav';
import Posts from '../components/posts/Posts';
import PostContext from '../context/post/postContext';
import AuthContext from '../context/auth/authContext';
import CommentContext from '../context/comment/commentContext';
import Comments from '../components/posts/Comments';

// JS served style sheet
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    color: '#ED8121',
    '& label': {
      color: '#ED8121',
    },
    '& .MuiInputBase-input': {
      color: '#ED8121',
    },
    '& focus': {
      outlineColor: '#ED8121',
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    maxWidth: '100px',
  },
  menuButton: {
    cursor: 'pointer',
  },
  lineUp: {
    display: 'inline-block',
    width: 'fit-content',
    marginLeft: '20px',
  },
  theTop: {
    color: '#ED8121',
    borderBottom: '1px solid #ED8121',
    padding: '10px',
  },
}));

// Color theme for page
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ED8121',
    },
    secondary: {
      main: '#b09fa5',
    },
  },
});

const Feed = () => {
  const postContext = useContext(PostContext);
  const authContext = useContext(AuthContext);
  const commentContext = useContext(CommentContext);

  const { addPost, getPosts, openDrawer, commentView } = postContext;
  const { user, loadUser } = authContext;
  const { getComments, getLikes } = commentContext;

  const classes = useStyles();

  // Load Posts, User, Comments, and Likes when the state changes
  useEffect(() => {
    loadUser();
    getPosts();
    getComments();
    getLikes();
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
    if (post.content.length > 140) {
      alert('Nice try, thats more than 140 characters!!!');
    } else {
      addPost(post);
      resetForm();
    }
  };
  if (commentView) {
    return (<Comments />);
  }

  return (
    <div className="container feed-page">
      <Nav />
      <div className="feed-middle">
        <ThemeProvider theme={theme}>
          <div className={classes.theTop}>
            <MenuIcon className={classes.menuButton} color="primary" fontSize="large" onClick={openDrawer} />
            <h1 className={classes.lineUp}>
              Hello { user && user.userName }
            </h1>
          </div>
          <form action="" className="bottom-border" id="feed-form" onSubmit={onSubmit}>
            <TextField
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
              Post
            </Button>
          </form>
        </ThemeProvider>
        <Posts />
      </div>
    </div>
  );
};

export default Feed;
