import React, { useState } from "react";
import "./AddUser.css";
import { HomeHeader } from "../home_header/HomeHeader";
import { useHistory } from "react-router-dom";

export const AddUser = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const EmailRegex = 
  RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
  const history = useHistory();
 
  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };


  const handleAddUser = (e) => {
    e.preventDefault();
    if (EmailRegex.test(email)) {
        setEmailError("");
      history.push("/home");
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
