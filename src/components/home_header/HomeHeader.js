import React from "react";
import "./HomeHeader.css";
import {useHistory} from 'react-router-dom';

export const HomeHeader = () => {
  const history = useHistory();
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
  const handleCalendar = (e) => {
    e.preventDefault();
    history.push('/calendar')
  }
  const handlePeople = (e) => {
    e.preventDefault();
    history.push('/people')
  }
  const handleReports = (e) => {
    e.preventDefault();
    history.push('/reports')
  }
  const handleBacklog = (e) => {
    e.preventDefault();
    history.push('/backlog')
  }
  return (
     <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <form className="form-inline" action="/register">
        <section className="form-group" style={{marginLeft: "10px"}}>
          <a className="navbar-brand" href="/home">
            Taskatic
          </a>
        </section>
        <section className="form-group">
          <button className="btn btn-dark" onClick={handleLogin}>Login</button>
        </section>

        <section className="form-group">
          <button className="btn btn-dark" onClick={handleRegister}>Register</button>
        </section>
        <section className="form-group">
          <button className="btn btn-dark" onClick={handlePeople}>People</button>
        </section>
        <section className="form-group">
          <button className="btn btn-dark" onClick={handleCalendar}>Calendar</button>
        </section>
        <section className="form-group">
          <button className="btn btn-dark" onClick={handleReports}>Reports</button>
        </section>
        <section className="form-group">
          <button className="btn btn-dark" onClick={handleBacklog}>Backlog</button>
        </section>
          <section className="form-group">
          <button className="btn btn-dark" onClick={handleAbout}>About</button>
        </section>
        <section className="form-group">
          <button className="btn btn-dark" onClick={handleContactUs}>Contact Us</button>
        </section>

      </form>
    </nav>
    
  );
};
