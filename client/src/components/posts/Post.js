/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Badge from '@material-ui/core/Badge';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CommentIcon from '@material-ui/icons/Comment';

import AuthContext from '../../context/auth/authContext';
import PostContext from '../../context/post/postContext';
import CommentContext from '../../context/comment/commentContext';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    width: '100%',
    color: '#ED8121',
    backgroundColor: '#151D26',
    border: '1px solid #ED8121',
    '& .MuiTypography-body1': {
      display: 'inline',
    },
    '& p': {
      marginLeft: '20px',
      color: 'white',
    },
  },
  deleteButton: {
    cursor: 'pointer',
    float: 'right',
  },
  cardWidth: {
    width: '100%',
  },
  dialogButton: {
    backgroundColor: '#151D26',
  },
  margin: {
    cursor: 'pointer',
  },
  chip: {
    color: '#ED8121',
    border: '1px solid #ED8121',
    backgroundColor: '#151D26',
  },
  chip2: {
    color: 'white',
    border: '1px solid #ED8121',
    backgroundColor: '#ED8121',
  },
  postDisplay: {
    marginRight: '10px',
    cursor: 'pointer',
  },
});

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

const Post = ({ post }) => {
  const authContext = useContext(AuthContext);
  const postContext = useContext(PostContext);
  const commentContext = useContext(CommentContext);
  const { user } = authContext;
  const { deletePost, openComments, commentView, setCurrentPost, currentPost } = postContext;
  const { comments } = commentContext;
  const [open, setOpen] = React.useState(false);

  let numComments = 0;
  for (let i=0; i<comments.length; i++) {
    if (comments[i].postID === post._id) {
      numComments += 1;
    }
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  const onclick = () => {
    deletePost(post._id);
    handleClose();
  };
  const handleComments = (stuff) => {
    setCurrentPost(stuff);
    openComments();
  };
  if (user) {
    return (
      <ThemeProvider theme={theme}>
        <Card className={classes.card}>
          <CardContent className={classes.cardWidth}>
            <Chip label={post.userName} className={user.userName === post.userName ? classes.chip2 : classes.chip} />
            <Typography className={classes.postDisplay} component="p" onClick={() => handleComments(post)}>
              {post.content}
            </Typography>
            <Badge className={classes.margin} badgeContent={numComments} color="primary" onClick={() => handleComments(post)}>
              <CommentIcon />
            </Badge>
            {user.userName === post.userName && <DeleteForeverIcon className={classes.deleteButton} onClick={handleClickOpen} />}
          </CardContent>
        </Card>
        
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Delete this post??</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {post.content}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onclick} color="primary" className={classes.dialogButton}>
              Yes
            </Button>
            <Button onClick={handleClose} color="primary" className={classes.dialogButton} autoFocus>
              No
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    );
  }
  return (
    <h1>Loading</h1>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
