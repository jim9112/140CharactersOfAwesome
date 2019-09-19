import React, { useContext } from 'react';

import Nav from '../components/layout/Nav';
import PostContext from '../context/post/postContext';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth: '700px',
    margin: 'auto',
    marginTop: '10%',
    backgroundColor: '#ED8121',
    color: '#151D26',
  },
  centerText: {
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#151D26',
    cursor: 'pointer',
  }
}));

const About = () => {
  const postContext = useContext(PostContext);

  const { openDrawer } = postContext;

  const classes = useStyles();

  return (
    <div>
      <Nav />
      <Paper className={classes.root}>
      <MenuIcon className={classes.link} color="primary" fontSize="large" onClick={openDrawer}/>
        <div className={classes.centerText}>
          <Typography variant="h5" component="h3" gutterBottom>
            A social media app built by James Hannan
          </Typography>
          <Typography component="p">
            If you would like to contribute or report suggestions or bugs please check out the{" "}
              <Link href="https://github.com/jim9112/140CharactersOfAwesome" variant="body2" target="_blank">
                Github Repo
              </Link>
          </Typography>
        </div>
        
      </Paper>
    </div>
      
  )
}

export default About
