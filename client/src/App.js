import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Feed from './pages/feed';
import Register from './components/auth/Register';

import PostState from './context/post/PostState';

function App() {
  return (
    <PostState>
      <Router>
        <Fragment>
          <div>
            <Switch>
              <Route exact path='/' component={Feed} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </PostState>
    
  );
};

export default App;
