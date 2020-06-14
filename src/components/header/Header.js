import React from "react";
import "./Header.css";
import {useHistory} from 'react-router-dom';
// import registerLogo from '../images/10.jpg'

export const Header = () => {
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    history.push('/login')
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
          <button className="btn btn-dark login-btn" onClick={handleAbout}>About</button>
        </section>
        <section className="form-group">
          <button className="btn btn-dark login-btn" onClick={handleContactUs}>Contact Us</button>
        </section>

      </form>
    </nav>
    
  );
};
