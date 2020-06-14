import React, {useState} from 'react'
import './Login.css'
import {Header} from '../header/Header'
import {useHistory} from 'react-router-dom'

export const Login = () => {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwdError, setPwdError] = useState("");
    const EmailRegex = 
        RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
    const PwdRegex = 
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
        if(EmailRegex.test(email) && PwdRegex.test(pwd))
        {
            setEmailError("")
            setPwdError("")
            history.push('/home')
        }
        if(!PwdRegex.test(email))
        {
        setEmailError("Please Enter Email ID");
        }
        if(!EmailRegex.test(pwd))
        {
        setPwdError("Please Enter Valid Password: Atleast 1 Upper Case, 1 Lower Case, 1 Numeric, 1 Special Symbol");
    }
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
                            <a href="/resetPassword">Forget Password?</a>
                        </section>
                        <section className="form-group">
                            <a href="/register">Don't have an account?</a>
                        </section>
                        <section className="form-group">
                            <p className="login-error">{emailError}</p>
                            <p className="login-error">{pwdError}</p>
                        </section>                    
                    </form>
                </section>
            </section>
        </section>
        </section>
    )
}


