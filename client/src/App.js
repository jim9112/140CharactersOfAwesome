/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Feed from './pages/feed';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';

import PostState from './context/post/PostState';
import AlertState from './context/alert/AlertState';
import AuthState from './context/auth/AuthState';

function App() {
  return (
    <AuthState>
    <PostState>
      <AlertState>
      <Router>
        <Fragment>
          <div>
            <Alert />
            <Switch>
              <Route exact path="/" component={Feed} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
        </Fragment>
      </Router>
      </AlertState>
    </PostState>
    </AuthState>
  );
};

export default App;
