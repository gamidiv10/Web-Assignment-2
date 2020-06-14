import React, {useState} from 'react'
import './Register.css'
import {Header} from '../header/Header'
import {useHistory} from 'react-router-dom'

export const Register = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwdError, setPwdError] = useState("");    
    const EmailRegex = 
        RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
    const PwdRegex = 
        new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*])(?=.{8,})");

    const history = useHistory();
    const handleFirstName = (e) => {
        e.preventDefault();
        setEmail(e.target.value);        
    }
    const handleLastName = (e) => {
        e.preventDefault();
        setPwd(e.target.value);
    
    }
    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);        
    }
    const handlePwd = (e) => {
        e.preventDefault();
        setPwd(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(EmailRegex.test(email) && PwdRegex.test(pwd)){
            setPwdError("")
            setEmailError("")
            history.push('/login')
        }
        if(!PwdRegex.test(pwd)){
            setPwdError("Please Enter Valid Password: Atleast 1 Upper Case, 1 Lower Case, 1 Numeric, 1 Special Symbol");
        }
        if(!EmailRegex.test(email)){
            setEmailError("Please Enter Email ID");
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
                            <a href="/login" className="forgot-password">Already have an account?</a>
                        </section>
                        <section className="form-group">
                            <p className="error">{emailError}</p>
                            <p className="error">{pwdError}</p>
                        </section>   
                    </form>
                </section>
            </section>
        </section>
        </section>
    )
}


