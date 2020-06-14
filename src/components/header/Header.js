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
        <div className="form-group website-label">
          <a className="navbar-brand" href="/home">
            Taskatic
          </a>
        </div>
        <div className="form-group">
          <button className="btn btn-dark login-btn" onClick={handleLogin}>Login</button>
        </div>
        <div className="form-group register-btn">
          <button className="btn btn-dark" onClick={handleRegister}>
            {/* <span>
          <img className="register-logo" src={registerLogo} alt="img"></img>
            </span>  */}
            Register</button>
        </div>

        {/* <div className="form-group" style={{ marginLeft: "50px" }}>
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Search"
          />
          <button className="btn btn-success" type="submit">
            Search
          </button>
          </div> */}

          <div className="form-group">
          <button className="btn btn-dark login-btn" onClick={handleAbout}>About</button>
        </div>
        <div className="form-group">
          <button className="btn btn-dark login-btn" onClick={handleContactUs}>Contact Us</button>
        </div>

      </form>
    </nav>
    
  );
};
