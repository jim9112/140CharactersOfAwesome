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
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

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
    },
  },
  deleteButton: {
    cursor: 'pointer',
    float: 'right',
  },
  postDate: {
    float: 'right',
    color: '#ED8121',
  },
  cardWidth: {
    width: '100%',
  },
  dialogButton: {
    backgroundColor: '#151D26',
  },
  margin: {
    cursor: 'pointer',
    marginRight: '20px',
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
    cursor: 'pointer',
    color: 'white',
  },
  iconBar: {
    marginTop: '20px',
  },
  dateContainer: {
    textAlign: 'center',
    
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
  const { deletePost, openComments, setCurrentPost } = postContext;
  const {
    comments,
    likes,
    addLikeList,
    addNewLike,
    deleteComment,
    deleteLike,
  } = commentContext;
  const [open, setOpen] = React.useState(false);

  // variables specific for this page
  let numComments = 0;
  let numLikes = 0;
  let isLikes = false;
  let currentLike = null;
  var postDate = "";

  // Counts likes for post to update badge
  likes.forEach((like) => {
    if (like.postID === post._id) {
      numLikes = like.likes.length;
      isLikes = true;
    }
  });

  // Searches comments for the post ID and increases comment badge count with matches
  comments.forEach((comment) => {
    if (comment.postID === post._id) {
      numComments += 1;
    }
  });

  const setDate = () => {
    var newDate = Date.parse(post.date);
    var anotherDate = new Date(newDate);
    var projectDate = anotherDate.toString().split(' ');
    postDate = projectDate[2] + " " + projectDate[1] + " at " + projectDate[4];
    console.log(postDate);
  };
  setDate();
  // event handler for open comments
  const handleClickOpen = () => {
    setOpen(true);
  };

  // event handler for the close comments button
  const handleClose = () => {
    setOpen(false);
  };

  // Sets classes to JS style object
  const classes = useStyles();

  // Event handler for the delete button
  const onclick = () => {
    deletePost(post._id);
    // Finds and deletes comments that match the post
    comments.forEach((comment) => {
      if (comment.postID === post._id) {
        deleteComment(comment._id);
      }
    });
    // Finds and deletes likes that match post
    likes.forEach((like) => {
      if (like.postID === post._id) {
        deleteLike(like._id);
      }
    });
    // Close pop-up
    handleClose();
  };

  // Opens the comments screen with data from the post selected
  const handleComments = (stuff) => {
    setCurrentPost(stuff);
    openComments();
  };

  // Adds likes to the post
  const addLike = (post) => {
    if (isLikes === false) {
      let like = {
        postID: post._id,
        likes: [user.userName],
      };
      addLikeList(like);
    } else if (isLikes) {
      likes.forEach((like) => {
        if (like.postID === post._id) {
          numLikes = like.likes.length;
          isLikes = true;
          let userCommented = false;
          if (like.likes.includes(user.userName)) {
            userCommented = true;
          }
          if (userCommented === false) {
            currentLike = like;
            currentLike.likes.push(user.userName);
            addNewLike(currentLike);
          }
        }
      });
    }
  };
  if (user) {
    return (
      <ThemeProvider theme={theme}>
        <Card className={classes.card}>
          <CardContent className={classes.cardWidth}>
            <div>
              <Chip label={post.userName} className={user.userName === post.userName ? classes.chip2 : classes.chip} />
              <Typography className={classes.postDate} component="p">
                {postDate}
              </Typography>
              
            </div>
            <div className={classes.dateContainer}>
              <Typography className={classes.postDisplay} component="p" onClick={() => handleComments(post)}>
                {post.content}
              </Typography>
            </div>
            
            <div className={classes.iconBar}>
              <Badge className={classes.margin} badgeContent={numComments} color="primary" onClick={() => handleComments(post)}>
                <CommentIcon />
              </Badge>
              <Badge className={classes.margin} badgeContent={numLikes} color="primary" onClick={() => addLike(post)}>
                <ThumbUpIcon />
              </Badge>
              {user.userName === post.userName && <DeleteForeverIcon className={classes.deleteButton} onClick={handleClickOpen} />}
            </div>
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
