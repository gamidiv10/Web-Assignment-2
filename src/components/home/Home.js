import React, {useState, useEffect} from "react";
import { HomeHeader } from "../home_header/HomeHeader";
import './Home.css'

export const Home = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
      setProjects([{
        "key": "TAS",
        "projectName": "Taskatic",
        "manager": "Vamsi Gamidi"
        
      },
      {
        "key": "GC",
        "projectName": "Star Sports",
        "manager": "Tony Stark"
      },
      {
        "key": "HWS",
        "projectName": "Halifax Web Services",
        "manager": "Steve Rogers"
      },
      {
        "key": "HCS",
        "projectName": "Health Care System",
        "manager": "Vamsi Gamidi"
      },
      {
        "key": "HT",
        "projectName": "Halifax Transit",
        "manager": "Bruce Wayne"
      },
      {
        "key": "TRM",
        "projectName": "Tourism",
        "manager": "Clark Kent"
      },
      {
        "key": "RS",
        "projectName": "Rental System",
        "manager": "Bruce Banner"
      }])
    }, []);
    
    console.log(typeof(projects), projects)
  return (
    <section className="home-section">
      <HomeHeader />
      <section className="container home-container">
        {projects.map((project) => (
            <section key={project.key} className="card text-white bg-dark mb-3">
            <section className="card-header">{project.projectName}</section>
            <section className="card-body">
        <h5 className="card-title">{project.key}</h5>
        <p className="card-text">{project.manager}</p>
                <a href="/project" className="stretched-link"> </a>
            </section>
            </section>
            ))}
            <section className="card text-white bg-secondary mb-3">
            <section className="card-body create-card">
                <h5>Create New Project</h5>
                <a href="/createProject" className="stretched-link"> </a>
            </section>
            </section>
      </section>
    </section>
  );
};
