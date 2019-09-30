/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
  orangeText: {
    color: '#ED8121',
  }
}));

const Comment = ({ comment }) => {
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start">
      <ListItemText
        primary={comment.userName}
        secondary={(
          <Typography varient="p" className={classes.orangeText}>
            {comment.content}
          </Typography>
)}
      />
    </ListItem>
  );
};

export default Comment;
