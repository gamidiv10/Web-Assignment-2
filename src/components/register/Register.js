import React, {useState} from 'react'
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
        if(!validEmailRegex.test(email)){
        setError(errorMsg.push("Please Enter Email ID"))
        }
        if(!validEmailRegex.test(pwd)){
        setError(errorMsg.push("Please Enter Valid Password")) 
        }
    }


    return (
        <div className="register-div">
        <Header/>
        <div className="container register-container">
            <div className="form-container">
                <div className="register-form">
                    <h3>Taskatic Registration</h3>
                    <form>
                        <div className="form-group input-element">
                            <input type="text" className="form-control"  onChange={handleFirstName} placeholder="First Name" required/>
                        </div>
                        <div className="form-group input-element">
                            <input type="text" className="form-control"  onChange={handleLastName} placeholder="Last Name" required/>
                        </div>
                        <div className="form-group input-element">
                            <input type="text" className="form-control"  onChange={handleEmail} placeholder="Email ID" required/>
                        </div>
                        <div className="form-group input-element">
                            <input type="password" className="form-control" onChange={handlePwd} placeholder="Password" required/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success" type="submit"  onClick={handleSubmit}>Register</button>
                        </div>
                        <div className="form-group">
                            <a href="/login" className="forgot-password">Already have an account?</a>
                        </div>
                        {errorMsg.map((msg) => (
                            <div className="form-group">
                            <p className="error">{msg}</p>
                            </div>
                        ))}
                      
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}


