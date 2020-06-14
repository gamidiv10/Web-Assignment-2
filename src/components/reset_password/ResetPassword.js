import React from 'react'
import './ResetPassword.css'
import {Header} from '../header/Header'

export const ResetPassword = () => {

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
                            <input type="text" className="form-control" placeholder="Email ID"/>
                        </section>
                        <section className="form-group input-element">
                            <input type="password" className="form-control" placeholder="Old Password"/>
                        </section>
                        <section className="form-group input-element">
                            <input type="password" className="form-control" placeholder="New Password"/>
                        </section>
                        <section className="form-group input-element">
                            <input type="password" className="form-control" placeholder="Re-Enter New Password"/>
                        </section>
                        <section className="form-group">
                            <button className="btn btn-success" type="submit">Reset</button>
                        </section>
                        <section className="form-group">
                            <a href="/login" className="forgot-password" value="reset-pwd">Don't want to Reset? Login</a>
                        </section>
                    </form>
                </section>
            </section>
        </section>
        </section>
    )
}


