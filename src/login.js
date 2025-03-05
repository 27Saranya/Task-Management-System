import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import logo from "./logo.png"; // Ensure this exists
import userIcon from "./usericon.jpeg"; // Ensure this exists

const LoginIn = () => {
    const navigate = useNavigate(); // For navigation

    return (
        <div className="container-login">
            <nav className="navbar-login">
                <div className="logo">
                    <img src={logo} alt="Task Nest Logo" />
                    <span>Task Nest</span>
                </div>
                <div className="nav-links-login">
                    <a href="/">Home</a>
                    <a href="/aboutPage">About</a>
                    <a href="/contactPage">Contact</a>
                    <button className="login-btn-login" onClick={() => navigate("/")}>Back</button>
                </div>
            </nav>

            <div className="content-log-login">
                <div className="user-icon-login">
                    <img src={userIcon} alt="User Icon" />
                </div>
                <h2>Login</h2>
                <p>Select your role</p>
                <div className="buttons-login">
                    <button className="btn-Alogin" onClick={() => navigate("/logInPage")}>Login in as Admin</button>
                    <button className="btn-Ulogin" onClick={() => navigate("/logInPage")}>Login in as User</button>
                </div>
            </div>
        </div>
    );
};

export default LoginIn;
