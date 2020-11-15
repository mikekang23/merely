import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const MainNav = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <Link to="/" className="my-0 mr-md-auto font-weight-normal"><img src={process.env.PUBLIC_URL + '/img/merely.png'} alt="" height="30" /></Link>

      <nav className="my-2 my-md-0 mr-md-3">
        <Link to="/about" className="p-2 text-dark">About</Link>
        <Link to="/dashboard" className="p-2 text-dark">Dashboard</Link>
        <Link to="/login" className="p-2 text-dark">Login</Link>
      </nav>
      <Link to="/signup" className="btn btn-outline-primary">Sign up</Link>
    </div>
  )
};

export default MainNav;
