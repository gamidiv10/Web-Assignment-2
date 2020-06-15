import React, { useState } from "react";
import "./AddUser.css";
import { HomeHeader } from "../home_header/HomeHeader";
import { useHistory } from "react-router-dom";

export const AddUser = () => {

  //Used React Hook for managing state
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  //Regular Expressions to validate the Email ID and Password
  const EmailRegex = 
  RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);

  //Using history to navigate to other pages
  const history = useHistory();
 //Handlers for inputs
  const handleEmail = (e) => {
    e.preventDefault();
    if (!EmailRegex.test(e.target.value)) {
      setEmailError("Please Enter a valid email");

    }
    else{
      setEmailError("")
    }
    setEmail(e.target.value);
  };

  //Handler for invite button
  const handleAddUser = (e) => {
    e.preventDefault();
    if (EmailRegex.test(email)) {
        setEmailError("");
      history.push("/people");
    }
    else {
      setEmailError("Please Enter a valid email");
    }
  };

  return (
    <section className="add-user-section">
      <HomeHeader />
      <section className="container add-user-container">
        <section className="form-container">
          <section className="add-user-form">
            <h3>Invite User</h3>
            <form>
              <section className="form-group input-element">
                <input
                  type="text"
                  className="form-control"
                  onChange={handleEmail}
                  placeholder="Email ID"
                  required
                />
              </section>
              <section className="form-group">
                <button
                  className="btn btn-success"
                  type="submit"
                  onClick={handleAddUser}
                >
                  Invite
                </button>
              </section>
              <section className="form-group">
                <p className="user-error">{emailError}</p>
              </section>
            </form>
          </section>
        </section>
      </section>
    </section>
  );
};
