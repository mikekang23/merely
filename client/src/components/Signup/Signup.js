import React from 'react';
import "./Signup.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Signup = () => {
  return (
    <div className="text-center mt-5">
      <form className="form-signin">
        <p>Let's get you signed up!</p>
        <label for="inputEmail" className="sr-only">Email address</label>
        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
        <label for="inputPassword" className="sr-only">Password</label>
        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
        <button className="btn btn-lg btn-block sign-in-btn" type="submit">Sign Up</button>
      </form>
    </div>
  )
};

export default Signup;
