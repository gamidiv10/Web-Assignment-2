import React, {useState} from 'react'
import './ResetPassword.css'
import {Header} from '../header/Header'
import {useHistory} from 'react-router-dom'

export const ResetPassword = () => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [oldPwd, setOldPwd] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

    const [emailError, setEmailError] = useState("");
    const [pwdError, setPwdError] = useState("");
    const [pwdMatchError, setPwdMatchError] = useState("");
    const EmailRegex = 
        new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
    const PwdRegex = 
        new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&*])(?=.{8,})");

        const handleEmail = (e) => {
            e.preventDefault();
            setEmail(e.target.value);        
        }
        const handlePwd = (e) => {
            e.preventDefault();
            setPwd(e.target.value);
        }
        const handleOldPwd = (e) => {
            e.preventDefault();
            setOldPwd(e.target.value);        
        }
        const handleConfirmPwd = (e) => {
            e.preventDefault();
            setConfirmPwd(e.target.value);
        
        }
        const handleReset = (e) => {
            e.preventDefault();
            if(EmailRegex.test(email) && PwdRegex.test(pwd) && (pwd === confirmPwd))
            {
                setEmailError("")
                setPwdError("")
                history.push('/home')
            }
            if(!EmailRegex.test(email))
            {
            setEmailError("Please Enter Email ID");
            }
            if(!(PwdRegex.test(pwd) && PwdRegex.test(oldPwd)))
            {
                setPwdError("Please Enter Valid Password: Atleast 1 Upper Case, 1 Lower Case, 1 Numeric, 1 Special Symbol");
            }
            if(pwd !== confirmPwd)
            {
                setPwdMatchError("Passwords should match");
            }
        }
    return (
        <section className="reset-pwd-section">
        <Header/>
        <section className="container reset-pwd-container">
            <section className="form-container">
                <section className="reset-pwd-form">
                <section className="form-group">
                    <h3>Password Reset</h3>
                    </section>
                    <form>
                        <section className="form-group input-element">
                            <input type="text" className="form-control" onChange={handleEmail} placeholder="Email ID"/>
                        </section>
                        <section className="form-group input-element">
                            <input type="password" className="form-control" onChange={handleOldPwd} placeholder="Old Password"/>
                        </section>
                        <section className="form-group input-element">
                            <input type="password" className="form-control" onChange={handlePwd} placeholder="New Password"/>
                        </section>
                        <section className="form-group input-element">
                            <input type="password" className="form-control" onChange={handleConfirmPwd} placeholder="Re-Enter New Password"/>
                        </section>
                        <section className="form-group">
                            <button className="btn btn-success" onClick={handleReset} type="submit">Reset</button>
                        </section>
                        <section className="form-group">
                            <a href="/login" className="forgot-password" value="reset-pwd">Don't want to Reset? Login</a>
                        </section>
                        <section className="form-group">
                            <p className="error">{emailError}</p>
                            <p className="error">{pwdError}</p>
                            <p className="error">{pwdMatchError}</p>
                        </section>   
                    </form>
                </section>
            </section>
        </section>
        </section>
    )
}


