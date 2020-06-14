import React, {useState, useEffect} from "react";
import { HomeHeader } from "../home_header/HomeHeader";
import "./People.css";
import registerLogo from "../images/11.jpg";
import deleteLogo from "../images/9.jpg";

export const People = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    setPeople([{
      "key": "VG",
      "title": "Web Developer",
      "name": "Vamsi Gamidi"
      
    },
    {
      "key": "TO",
      "title": "Front-end Developer",
      "name": "Thor Odinson"
    },
    {
      "key": "SR",
      "title": "Back-end Developer",
      "name": "Steve Rogers"
    },
    {
      "key": "TS",
      "title": "Web Developer",
      "name": "Tony Stark"
    },
    {
      "key": "TC",
      "title": "Backend Developer",
      "name": "Tom Cruise"
    },
    {
      "key": "BP",
      "title": "Front-end Developer",
      "name": "Brad Pitt"
    }])
  }, []);
  return (
    <section className="people-section">
      <HomeHeader />
      <section className="container people-container">
        {people.map((item) => (
          <section key={item.key} className="card text-white bg-dark mb-3">
              <span className="delete-span">
                  <img className="delete-img" src={deleteLogo} alt="delete"></img>
              </span>
            <section className="img-section">
              <img className="card-img-top" src={registerLogo} alt="img">
              </img>
            </section>
            {/* <section className="card-header">Taskatic</section> */}
            <section className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.title}</p>
              <a href="/project" className="stretched-link"> </a>
            </section>
          </section>
        ))}
        <section className="card text-white bg-secondary mb-3">
          <section className="img-section">
            <img className="card-img-top" src={registerLogo} alt="img"></img>
          </section>
          <section className="card-body">
            <h5>Add a new user to the project</h5>
            <a href="/project" className="stretched-link"> </a>
          </section>
        </section>
      </section>
    </section>
  );
};
