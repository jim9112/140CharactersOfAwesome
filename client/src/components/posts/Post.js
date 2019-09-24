/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AuthContext from '../../context/auth/authContext';
import PostContext from '../../context/post/postContext';

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
  card2: {
    display: 'flex',
    width: '100%',
    color: '#151D26',
    backgroundColor: '#ED8121',
    border: '1px solid #151D26',
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
  const { user } = authContext;
  const { deletePost } = postContext;

  const [open, setOpen] = React.useState(false);

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

  if (user) {
    return (
      <ThemeProvider theme={theme}>
        <Card className={user.userName === post.userName ? classes.card2 : classes.card}>
          <CardContent className={classes.cardWidth}>
            <Typography component="h3">
              {post.userName}
            </Typography>
            <Typography component="p">
              {post.content}
            </Typography>
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
  } else {
    return(
      <h1>Loading</h1>
    );
  }  
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
