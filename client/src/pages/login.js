import React, { useContext, useState, useEffect } from 'react';
// Import state 
import AuthContext from '../context/auth/authContext';
import AlertContext from '../context/alert/alertContext';
// Import UI
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// JS served style sheet
const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: '#151D26',
      color: '#ED8121',
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '800px',
    margin: 'auto'
  },
  form: {
    maxWidth: '500px',
    margin: 'auto'
  },
  textField: {
    color: '#ED8121',
    '& label': {
      color: '#ED8121'
    },
    '& .MuiInputBase-input': {
      color: '#ED8121',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#ED8121',
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  title: {
    color: 'white',
  },
}));

// Color theme for page
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ED8121'
    },
    secondary: {
      main: '#b09fa5'
    },
  },
});

const Login = (props) => {
    
    const authContext = useContext(AuthContext);
    const alertContext = useContext(AlertContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    const classes = useStyles();

    useEffect(() => {
        if (isAuthenticated) {
          props.history.push('/');
        }
    
        if (error === 'Invalid Credentials') {
          alert(error);
          clearErrors();
        }
      }, [error, isAuthenticated, props.history]);


    const onSubmit = e => {
        e.preventDefault();
        console.log('Test');
        if (email === '' || password === '') {
            setAlert('Invalid Credentials')
          } else {
            login({
              email,
              password
            })
          }
    }
    
    const [user, setUser] = useState({
        email: '',
        password: '',
      });
    
      const { email, password} = user;
    
      const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value});

    return(

      <Container component="main" maxwidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography className={classes.title} component="h1" variant="h5" gutterBottom>
            Welcome to
          </Typography>
          <Typography className={classes.title} component="h1" variant="h5" gutterBottom>
            140CharactersOfAwesome
          </Typography>
          <form className={classes.form} onSubmit={onSubmit}>
          <ThemeProvider theme={theme}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  className={classes.textField}
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={onChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  className={classes.textField}
                  name="password"
                  type="password"
                  autoComplete="password"
                  onChange={onChange}
                  required
                />
              </Grid>
            </Grid>
            
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >Sign In</Button>
          
          <Grid container justify="flex-end">
            <Grid item>
              <Link className={classes.title} href="/register" variant="body2">
                Dont have an account? Register now!
              </Link>
            </Grid>
          </Grid>
          </ThemeProvider>
          </form>
        </div>
        
      </Container> 
    )
}

export default Login;
