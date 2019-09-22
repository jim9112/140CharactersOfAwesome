/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
    }
  },
});

const Post = ({ post }) => {
  const classes = useStyles();

  return (

    <Card className={classes.card}>
      <CardContent>
        <Typography component="h3">
          {post.userName}
        </Typography>
        <Typography component="p">
          {post.content}
        </Typography>
      </CardContent>
    </Card>

  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
