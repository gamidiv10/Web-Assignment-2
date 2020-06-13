import React from "react";
import "./Header.css";
// import registerLogo from '../images/10.jpg'

export const Header = () => {
  return (
     <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <form className="form-inline" action="/register">
        <div className="form-group website-label">
          <a className="navbar-brand" href="/home">
            Taskatic
          </a>
        </div>
        <div className="form-group">
          <button className="btn btn-dark login-btn">Login</button>
        </div>
        <div className="form-group register-btn">
          <button className="btn btn-dark">
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
          <button className="btn btn-dark login-btn">About</button>
        </div>
        <div className="form-group">
          <button className="btn btn-dark login-btn">Contact Us</button>
        </div>

      </form>
    </nav>
    
  );
};
