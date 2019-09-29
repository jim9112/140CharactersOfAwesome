/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const Comment = ({ comment }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemText
        primary={comment.userName}
        secondary={(
          <Fragment>
            {comment.content}
          </Fragment>
)}
      />
    </ListItem>
  );
};

export default Comment;
