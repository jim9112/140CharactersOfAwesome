/* eslint-disable react/jsx-filename-extension */
import React, { useContext } from 'react';
// Import state
import AuthContext from '../../context/auth/authContext';
import PostContext from '../../context/post/postContext';
// Import UI
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import InfoIcon from '@material-ui/icons/Info';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// JS served style sheet
const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '300px',
    padding: '0px 20px',
    textAlign: 'center'
  },
  list: {
    width: 250, 
  },
  menuStyle: {
    '& .MuiDrawer-paper': {
      backgroundColor: '#ED8121',
      color: '#151D26',
    }
  }
}));

// Nav bar element
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
      <Drawer className={classes.menuStyle} open={drawer} onClose={closeDrawer}>
        <ListItem button key="about">
              <ListItemIcon>{<InfoIcon />}</ListItemIcon>
              <ListItemText primary="About" />
        </ListItem>
        <ListItem button key="logout" onClick={logout}>
              <ListItemIcon>{<ExitToAppIcon />}</ListItemIcon>
              <ListItemText primary="Logout" />
        </ListItem>
      </Drawer>
    </div> 
  );
};

export default Nav;
