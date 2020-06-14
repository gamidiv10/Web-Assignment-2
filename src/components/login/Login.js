import React, {useState} from 'react'
import './Login.css'
import {Header} from '../header/Header'
import {useHistory} from 'react-router-dom'

export const Login = () => {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errorMsg, setError] = useState([]);
    const validEmailRegex = 
        RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
    const validatePwdRegex = 
        new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*])(?=.{8,})");


    const history = useHistory();
    const handleEmail = (e) => {
        e.preventDefault();
        setEmail(e.target.value);        
    }
    const handlePwd = (e) => {
        e.preventDefault();
        setPwd(e.target.value);
    
    }
    const handleLoginClick = (e) => {
        e.preventDefault();
        if(validEmailRegex.test(email) && validatePwdRegex.test(pwd))
        {
            history.push('/home')
        }
        if(!validatePwdRegex.test(email))
        {
        setError([errorMsg.push("Please Enter Email ID")])
        }
        if(!validEmailRegex.test(pwd))
        {
        setError([errorMsg.push("Please Enter Valid Password")])
    }
        console.log(typeof(errorMsg), errorMsg)
    }

    return (
        <section className="login-section">
        <Header/>
        <section className="container login-container">
            <section className="form-container">
                <section className="login-form">
                    <h3>Taskatic Login</h3>
                    <form>
                        <section className="form-group input-element">
                            <input type="text" className="form-control" onChange={handleEmail} placeholder="Email ID" required/>
                        </section>
                        <section className="form-group input-element">
                            <input type="password" className="form-control" onChange={handlePwd} placeholder="Password" required/>
                        </section>
                        <section className="form-group">
                            <button className="btn btn-success" onClick={handleLoginClick} type="submit">Login</button>
                        </section>
                        <section className="form-group">
                            <a href="/resetPassword" className="forgot-password">Forget Password?</a>
                        </section>
                        <section className="form-group">
                            <a href="/register" className="forgot-password">Don't have an account?</a>
                        </section>
                        {errorMsg.map((msg) => (
                        <section className="form-group">
                            <p className="error">{msg}</p>
                        </section>
                        ))}
                    
                    </form>
                </section>
            </section>
        </section>
        </section>
    )
}


