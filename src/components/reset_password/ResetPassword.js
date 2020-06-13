import React from 'react'
import './ResetPassword.css'
import {Header} from '../header/Header'

export const ResetPassword = () => {

    return (
        <div className="reset-pwd-div">
        <Header/>
        <div className="container reset-pwd-container">
            <div className="form-container">
                <div className="reset-pwd-form">
                <div className="form-group">
                    <h3>Password Reset</h3>
                    </div>
                    <form>
                        <div className="form-group input-element">
                            <input type="text" className="form-control" placeholder="Email ID"/>
                        </div>
                        <div className="form-group input-element">
                            <input type="password" className="form-control" placeholder="Old Password"/>
                        </div>
                        <div className="form-group input-element">
                            <input type="password" className="form-control" placeholder="New Password"/>
                        </div>
                        <div className="form-group input-element">
                            <input type="password" className="form-control" placeholder="Re-Enter New Password"/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success" type="submit">Reset</button>
                        </div>
                        <div className="form-group">
                            <a href="/login" className="forgot-password" value="reset-pwd">Don't want to Reset? Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}


