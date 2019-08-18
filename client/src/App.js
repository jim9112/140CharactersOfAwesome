import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Feed from './pages/feed';

import PostState from './context/PostState';

function App() {
  return (
    <PostState>
      <Router>
        <Fragment>
          <div>
            <Switch>
              <Route exact path='/' component={Feed} />
              <Route exact path='/login' component={Login} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </PostState>
    
  );
};

export default App;
