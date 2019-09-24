/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';

// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
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
});

const Post = ({ post }) => {
  const authContext = useContext(AuthContext);
  const postContext = useContext(PostContext);
  const { user } = authContext;
  const { deletePost } = postContext;

  const classes = useStyles();

  const onclick = (e) => {
    deletePost(post._id);
  };

  if (user) {
    return (

      <Card className={user.userName === post.userName ? classes.card2 : classes.card}>
        <CardContent>
          <Typography component="h3">
            {post.userName}
          </Typography>
          <Typography component="p">
            {post.content}
          </Typography>
          {user.userName === post.userName && <Button onClick={onclick}>Delete</Button>}
        </CardContent>
      </Card>
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
