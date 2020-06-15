import React from "react";
import "./Header.css";
import {useHistory} from 'react-router-dom';

export const Header = () => {
   //Using history to navigate to other pages
  const history = useHistory();
  //Handlers for Button Clicks
  const handleLogin = (e) => {
    e.preventDefault();
    history.push('/')
  }
  const handleRegister = (e) => {
    e.preventDefault();
    history.push('/register')
  }
  const handleAbout = (e) => {
    e.preventDefault();
    history.push('/about')
  }
  const handleContactUs = (e) => {
    e.preventDefault();
    history.push('/contactUs')
  }
  return (
     <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <form className="form-inline" action="/register">
        <section className="form-group website-label">
          <a className="navbar-brand" href="/home">
            Taskatic
          </a>
        </section>
        <section className="form-group">
          <button className="btn btn-dark login-btn" onClick={handleLogin}>Login</button>
        </section>
        <section className="form-group register-btn">
          <button className="btn btn-dark" onClick={handleRegister}>Register</button>
        </section>
          <section className="form-group">
          <button className="btn btn-dark login-btn" onClick={handleAbout} disabled>About</button>
        </section>
        <section className="form-group">
          <button className="btn btn-dark login-btn" onClick={handleContactUs} disabled>Contact Us</button>
        </section>

      </form>
    </nav>
    
  );
};
