import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import MainNav from './components/Nav/MainNav';
import { getAllUsers } from "./redux/selectors";

const App = () => {
  return (
    <div>
      <Router>
        <MainNav />
        <div className="container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

const mapStateToProps = state => {
  const users = getAllUsers(state);
  console.log(state);
  return users;
}

export default connect(
  mapStateToProps
)(App);
