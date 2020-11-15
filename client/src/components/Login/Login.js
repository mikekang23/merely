import React from 'react';
import "./Login.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Login = () => {
  return (
    <div className="text-center mt-5">
      <form className="form-signin">
        <p>You've gotta log in first :P</p>
        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autofocus="" />
        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
        <button className="btn btn-lg btn-block sign-in-btn" type="submit">Sign in</button>
      </form>
    </div>
  )
};

export default Login;
