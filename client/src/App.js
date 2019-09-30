/* eslint-disable react/jsx-fragments */
/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import 'typeface-roboto';
import Login from './pages/login';
import Feed from './pages/feed';
import Register from './components/auth/Register';
import About from './pages/about';
import Alert from './components/layout/Alert';
import PrivateRoute from './components/routing/PrivateRoute';

import PostState from './context/post/PostState';
import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';
import CommentState from './context/comment/CommentState';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}


function App() {
  return (
    <AuthState>
      <PostState>
        <CommentState>
          <AlertState>
            <Router>
              <Fragment>
                <div>
                  <Alert />
                  <Switch>
                    <PrivateRoute exact path="/" component={Feed} />
                    <PrivateRoute exact path="/about" component={About} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                  </Switch>
                </div>
              </Fragment>
            </Router>
          </AlertState>
        </CommentState>
      </PostState>
    </AuthState>
  );
}

export default App;
