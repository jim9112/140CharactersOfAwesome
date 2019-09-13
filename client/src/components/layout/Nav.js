/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';

import chicken from '../media/chicken.png';
import AuthContext from '../../context/auth/authContext';

import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '300px',
    padding: '0px 20px',
    textAlign: 'center'
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const Nav = () => {

  const authContext = useContext(AuthContext);

  const { logout } = authContext;
  
  const classes = useStyles();
  
  const onLogout = () => {
    logout();
  }

  return (
    <div className={classes.root}>
        <img src={chicken} alt="Chicken Icon" className="top-20" />
      <Paper className={classes.paper}>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem onClick={onLogout} href="#!">Logout</MenuItem>
        </MenuList>
      </Paper>
    </div>
  );
};

export default Nav;
