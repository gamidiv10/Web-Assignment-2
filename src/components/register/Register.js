import React, {useState} from 'react'
import './Register.css'
import {Header} from '../header/Header'
import {useHistory} from 'react-router-dom'

export const Register = () => {
    //Used React Hook to manage state
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwdError, setPwdError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    //Regular Expressions to validate Email and Password    
    const EmailRegex = 
        RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
    const PwdRegex = 
        new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

    const history = useHistory();

    //Handlers for user input
    const handleFirstName = (e) => {
        e.preventDefault();
        if(e.target.value === ""){
            setFirstNameError("First Name Field Should not be Empty");
        }
        else{
            setFirstNameError("")
        }
        setEmail(e.target.value);        
    }
    const handleLastName = (e) => {
        e.preventDefault();
        if(e.target.value === ""){
            setLastNameError("Last Name Field Should not be Empty");
        }
        else{
            setLastNameError("")
        }
        setPwd(e.target.value);
    
    }
    const handleEmail = (e) => {
        e.preventDefault();
    if(!EmailRegex.test(e.target.value)){
        setEmailError("Please Enter Valid Email ID");
    }
    else{
        setEmailError("");
    }
        setEmail(e.target.value);        
    }

    const handlePwd = (e) => {
        e.preventDefault();
        if(!PwdRegex.test(e.target.value)){
            setPwdError("Please Enter Valid Password: Atleast 1 Upper Case, 1 Lower Case, 1 Numeric");
        }
        else{
            setPwdError("");
        }
        setPwd(e.target.value);
    }
    //Handler for register button click
    const handleSubmit = (e) => {
        e.preventDefault();
        if(EmailRegex.test(email) && PwdRegex.test(pwd)){
            setPwdError("")
            setFirstName("")
            setLastName("")
            setEmailError("")
            history.push('/')
        }
        if(!PwdRegex.test(pwd)){
            setPwdError("Please Enter Valid Password: Atleast 1 Upper Case, 1 Lower Case, 1 Numeric");
        }
        if(!EmailRegex.test(email)){
            setEmailError("Please Enter Valid Email ID");
        }
        if(firstName === ""){
            setFirstNameError("First Name Field Should not be Empty");
        }
        if(lastName === ""){
            setLastNameError("Last Name Field Should not be Empty");
        }
  
    }
    return (
        <section className="register-section">
        <Header/>
        <section className="container register-container">
            <section className="form-container">
                <section className="register-form">
                    <h3>Taskatic Registration</h3>
                    <form>
                        <section className="form-group input-element">
                            <input type="text" className="form-control"  onChange={handleFirstName} placeholder="First Name" required/>
                        </section>
                        <section className="form-group input-element">
                            <input type="text" className="form-control"  onChange={handleLastName} placeholder="Last Name" required/>
                        </section>
                        <section className="form-group input-element">
                            <input type="text" className="form-control"  onChange={handleEmail} placeholder="Email ID" required/>
                        </section>
                        <section className="form-group input-element">
                            <input type="password" className="form-control" onChange={handlePwd} placeholder="Password" required/>
                        </section>
                        <section className="form-group">
                            <button className="btn btn-success" type="submit"  onClick={handleSubmit}>Register</button>
                        </section>
                        <section className="form-group">
                            <a href="/">Already have an account?</a>
                        </section>
                        <section className="form-group">
                            <p className="reg-error">{emailError}</p>
                            <p className="reg-error">{pwdError}</p>
                            <p className="reg-error">{firstNameError}</p>
                            <p className="reg-error">{lastNameError}</p>
                        </section>   
                    </form>
                </section>
            </section>
        </section>
        </section>
    )
}


