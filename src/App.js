import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import AdminPanel from './containers/AdminPanel/AdminPanel';
import './App.css';

const App = () => {
  return (
    // <AdminPanel />
    <Router>
    {/* <AppNavigationBar /> TODO move NavigationBar into component */}
    <Switch>
      <Route exact path="/admin" component={AdminPanel} />

      <Route exact path="/" render={() => <Redirect to="/admin" />} />
      {/* <Route component={Home} /> */}
    </Switch>
    {/* <BottomNavigationBar /> */}
  </Router>
  );
}

export default App;
