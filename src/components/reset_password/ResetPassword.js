import React, {useState} from 'react'
import './ResetPassword.css'
import {Header} from '../header/Header'
import {useHistory} from 'react-router-dom'

export const ResetPassword = () => {
    //Used history to navigate to other pages and used useState() for state management
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [oldPwd, setOldPwd] = useState("");
    const [pwd, setPwd] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

    const [emailError, setEmailError] = useState("");
    const [pwdError, setPwdError] = useState("");
    const [pwdMatchError, setPwdMatchError] = useState("");
    //Regular Expressions to validate Email and Password
    const EmailRegex = 
        new RegExp(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
    const PwdRegex = 
        new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

        //Handlers for user input
        const handleEmail = (e) => {
            e.preventDefault();
            if(!EmailRegex.test(e.target.value))
            {
            setEmailError("Please Enter Valid Email ID");
            }
            else{
                setEmailError("")
            }
            setEmail(e.target.value);        
        }
        const handlePwd = (e) => {
            e.preventDefault();
            if(!PwdRegex.test(e.target.value))
            {
                setPwdError("Please Enter Valid Password: Atleast 1 Upper Case, 1 Lower Case, 1 Numeric");
            }
            else{
                setPwdError("")
            }
            setPwd(e.target.value);
        }
        const handleOldPwd = (e) => {
            e.preventDefault();
            if(!PwdRegex.test(e.target.value))
            {
                setPwdError("Please Enter Valid Password: Atleast 1 Upper Case, 1 Lower Case, 1 Numeric");
            }
            else{
                setPwdError("")
            }
            setOldPwd(e.target.value);        
        }
        const handleConfirmPwd = (e) => {
            e.preventDefault();
            if(!PwdRegex.test(e.target.value))
            {
                setPwdError("Please Enter Valid Password: Atleast 1 Upper Case, 1 Lower Case, 1 Numeric");
            }
            else{
                setPwdError("")
            }

            if(pwd !== e.target.value)
            {
                setPwdMatchError("Passwords should match");
            }
            else{
                setPwdMatchError("")
            }
            setConfirmPwd(e.target.value);
        
        }
        //Handler for reset button
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
            setEmailError("Please Enter Valid Email ID");
            }
            if(!(PwdRegex.test(pwd) && PwdRegex.test(oldPwd)))
            {
                setPwdError("Please Enter Valid Password: Atleast 1 Upper Case, 1 Lower Case, 1 Numeric");
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
                            <a href="/" className="forgot-password" value="reset-pwd">Don't want to Reset? Login</a>
                        </section>
                        <section className="form-group">
                            <p className="reset-error">{emailError}</p>
                            <p className="reset-error">{pwdError}</p>
                            <p className="reset-error">{pwdMatchError}</p>
                        </section>   
                    </form>
                </section>
            </section>
        </section>
        </section>
    )
}


