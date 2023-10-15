import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Maestro Socials</h3>
                <span className="Desc">Welcome to Maestro Socials, the next-generation social media platform designed to connect, inspire, and empower individuals from all corners of the world.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Account </button>
                </div>
            </div>
        </div>
    </div>
  )
}
