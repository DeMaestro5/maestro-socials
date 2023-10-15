import React from 'react'
import './register.css'

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Maestro Socials</h3>
                <span className="Desc">Welcome to Maestro Socials, the next-generation social media platform designed to connect, inspire, and empower individuals from all corners of the world.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Password Again" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    
                    <button className="loginRegisterButton">Log into your Account </button>
                </div>
            </div>
        </div>
    </div>
  )
}
