import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import TopNavigationBar from './components/TopNavigationBar/TopNavigationBar';
import BottomNavigationBar from './components/BottomNavigationBar/BottomNavigationBar';

import AdminPanel from './containers/AdminPanel/AdminPanel';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import './App.css';

const App = () => {

  return (
    <Router>
      <TopNavigationBar />
      <Switch>
        <Route exact path="/admin" component={AdminPanel} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </Switch>
      <BottomNavigationBar />
    </Router>
  );
}

export default App;
