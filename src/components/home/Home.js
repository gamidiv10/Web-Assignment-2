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
        "projectName": "Google Chrome",
        "manager": "Sundar Pichai"
      },
      {
        "key": "AWS",
        "projectName": "Amazon Web Services",
        "manager": "Jeff Bezos"
      }])
    }, []);
    
    console.log(typeof(projects), projects)
  return (
    <div className="home-div">
      <HomeHeader />
      <div className="container home-container">
        {projects.map((project) => (
            <div key={project.key} className="card text-white bg-dark mb-3">
            <div className="card-header">{project.projectName}</div>
            <div className="card-body">
        <h5 className="card-title">{project.key}</h5>
        <p className="card-text">{project.manager}</p>
                <a href="/project" className="stretched-link"> </a>
            </div>
            </div>
            ))}
            <div className="card text-white bg-secondary mb-3">
            <div className="card-body">
                <h5>Create New Project</h5>
                <a href="/project" className="stretched-link"> </a>
            </div>
            </div>
      </div>
    </div>
  );
};
