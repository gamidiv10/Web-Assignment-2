import React from "react";
import { HomeHeader } from "../home_header/HomeHeader";
import "./People.css";
import registerLogo from "../images/11.jpg";
import deleteLogo from "../images/9.jpg";

export const People = () => {
  const test = [1, 2, 3, 4, 5, 6];

  return (
    <div className="people-div">
      <HomeHeader />
      <div className="container people-container">
        {test.map((item) => (
          <div className="card text-white bg-dark mb-3">
              <span className="delete-span">
                  <img className="delete-img" src={deleteLogo} alt="delete"></img>
              </span>
            <div className="img-div">
              <img className="card-img-top" src={registerLogo} alt="img">
              </img>
            </div>
            {/* <div className="card-header">Taskatic</div> */}
            <div className="card-body">
              <h5 className="card-title">Vamsi Gamidi</h5>
              <p className="card-text">Web Developer</p>
              <a href="/project" className="stretched-link"> </a>
            </div>
          </div>
        ))}
        <div className="card text-white bg-secondary mb-3">
          <div className="img-div">
            <img className="card-img-top" src={registerLogo} alt="img"></img>
          </div>
          <div className="card-body">
            <h5>Add a new user to the project</h5>
            <a href="/project" className="stretched-link"> </a>
          </div>
        </div>
      </div>
    </div>
  );
};
