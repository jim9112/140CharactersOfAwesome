import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Feed from './pages/feed';

function App() {
  return (
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
  );
};

export default App;
