import React, { useState } from "react";
import "./CreateProject.css";
import { HomeHeader } from "../home_header/HomeHeader";
import { useHistory } from "react-router-dom";
import {Select} from "@material-ui/core";

export const CreateProject = () => {
  const [projectTitle, setProjectName] = useState("");
  const [projectCode, setProjectCode] = useState("");
  const [projectManager, setProjectManager] = useState("Vamsi Gamidi");
  const [projectNameError, setProjectNameError] = useState("");
  const [projectCodeError, setProjectCodeError] = useState("");

  const userList = [
    "Vamsi Gamidi",
    "Steve Rogers",
    "Tony Stark",
    "Bruce Wayne",
    "Clark Kent",
  ];
  const history = useHistory();
  const handleProjectName = (e) => {
    e.preventDefault();
    setProjectName(e.target.value);
  };
  const handleProjectCode = (e) => {
    e.preventDefault();
    setProjectCode(e.target.value);
  };
  const handleProjectManager = (e) => {
    e.preventDefault();
    setProjectManager(e.target.value);
    console.log(projectManager);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectCode !== "" && projectTitle !== "") {
        setProjectCodeError("");
        setProjectNameError("");
      history.push("/home");
    }
    if (projectCode === "") {
      setProjectCodeError("Project Code Should not be empty");
    }
    if (projectTitle === "") {
      setProjectNameError("Project Title Should not be empty");
    }
  };

  return (
    <section className="create-project-section">
      <HomeHeader />
      <section className="container create-project-container">
        <section className="form-container">
          <section className="create-project-form">
            <h3>Create Project</h3>
            <form>
              <section className="form-group input-element">
                <input
                  type="text"
                  className="form-control"
                  onChange={handleProjectName}
                  placeholder="Project Name"
                  required
                />
              </section>
              <section className="form-group input-element">
                <input
                  type="text"
                  className="form-control"
                  onChange={handleProjectCode}
                  placeholder="Project Code"
                  required
                />
              </section>
              <section className="form-group">
              <Select className="managerDropDown"
                native
                onChange={handleProjectManager}
                defaultValue="Select Manager"
                placeholder="Manager"
                
                >
                {userList.map((user) => (
                    <option key={Math.random()} value={user}>{user}</option>
                ))}
              </Select>
              </section>

              <section className="form-group">
                <button
                  className="btn btn-success"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Create
                </button>
              </section>
              <section className="form-group">
                <p className="error">{projectNameError}</p>
                <p className="error">{projectCodeError}</p>
              </section>
            </form>
          </section>
        </section>
      </section>
    </section>
  );
};