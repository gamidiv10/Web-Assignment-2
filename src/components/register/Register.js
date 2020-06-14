import React, {useState, useEffect} from 'react'
import './Register.css'
import {Header} from '../header/Header'
import {useHistory} from 'react-router-dom'

export const Register = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errorMsg, setError] = useState([]);
    const validEmailRegex = 
        RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
    const validatePwdRegex = 
        new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*])(?=.{8,})");
    useEffect(() => {
        console.log("Use Effect", errorMsg)
      }, [errorMsg]);

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
        if(validEmailRegex.test(email) && validatePwdRegex.test(pwd)){
            history.push('/login')
        }
        if(!validatePwdRegex.test(pwd)){
            setError([errorMsg.push("Please Enter Valid Password")]);
            }
        if(!validEmailRegex.test(email)){
        setError([errorMsg.push("Please Enter a Valid Email ID")]);
        }
        errorMsg.map((item) => console.log(item));
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
                        {errorMsg.map((item) => (
                            // <section key={Math.random()} className="form-group">
                            <section key={Math.random()} className="error">{item}</section>
                            // </section>
                        ))}
                    </form>
                </section>
            </section>
        </section>
        </section>
    )
}


