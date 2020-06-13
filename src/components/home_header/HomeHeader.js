import React from "react";
import "./HomeHeader.css";

export const HomeHeader = () => {
  return (
     <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <form className="form-inline" action="/register">
        <div className="form-group" style={{marginLeft: "10px"}}>
          <a className="navbar-brand" href="/home">
            Taskatic
          </a>
        </div>
        <div className="form-group">
          <button className="btn btn-dark">Login</button>
        </div>

        <div className="form-group">
          <button className="btn btn-dark">Register</button>
        </div>
        <div className="form-group">
          <button className="btn btn-dark">People</button>
        </div>
        <div className="form-group">
          <button className="btn btn-dark">Calendar</button>
        </div>
        <div className="form-group">
          <button className="btn btn-dark">Reports</button>
        </div>
        <div className="form-group">
          <button className="btn btn-dark">Backlog</button>
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
          <button className="btn btn-dark">About</button>
        </div>
        <div className="form-group">
          <button className="btn btn-dark">Contact Us</button>
        </div>

      </form>
    </nav>
    
  );
};
