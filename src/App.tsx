import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Security } from './security.component';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/security">Security</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/security">
            <Security />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
