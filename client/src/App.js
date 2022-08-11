import React from 'react';
import Dashboard from './Pages/Dashboard';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { PrivateRoute } from './Auth/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact> <Dashboard /> </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;
