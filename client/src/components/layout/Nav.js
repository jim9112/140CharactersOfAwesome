/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';

import chicken from '../media/chicken.png';
import AuthContext from '../../context/auth/authContext';
import PostContext from '../../context/post/postContext';

import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '300px',
    padding: '0px 20px',
    textAlign: 'center'
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
}));

const Nav = () => {

  const authContext = useContext(AuthContext);
  const postContext = useContext(PostContext);

  const { logout } = authContext;
  const { drawer, openDrawer, closeDrawer } = postContext;
    
  const classes = useStyles();
  
  const onLogout = () => {
    logout();
  }


  return (

    <div 
    className={classes.list}
      role="presentation"
      onClick={closeDrawer}
      onKeyDown={closeDrawer}
    >
      <Drawer open={drawer} onClose={closeDrawer}>
      <ListItem button key="logout" onClick={logout}>
            <ListItemIcon>{<InboxIcon />}</ListItemIcon>
            <ListItemText primary="Logout" />
      </ListItem>
      </Drawer>
    </div>
      
  );
};

export default Nav;
