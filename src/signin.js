import React from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";
import logo from "./logo.png"; // Ensure this exists
import userIcon from "./usericon.jpeg"; // Ensure this exists

const SignIn = () => {
    const navigate = useNavigate(); // For navigation

    return (
        <div className="container1">
            <nav className="navbar1">
                <div className="logo">
                    <img src={logo} alt="Task Nest Logo" />
                    <span>Task Nest</span>
                </div>
                <div className="nav-links1">
                    <a href="/">Home</a>
                    <a href="/aboutPage">About</a>
                    <a href="/contactPage">Contact</a>
                    <button className="back-btn" onClick={() => navigate("/")}>Back</button>
                </div>
            </nav>

            <div className="content-user1">
                <div className="user-icon1">
                    <img src={userIcon} alt="User Icon" />
                </div>
                <h2>Sign In</h2>
                <p>Select your role</p>
                <div className="buttons1">
                    <button className="signAbtn" onClick={() => navigate("/signInPage")}>Sign in as Admin</button>
                    <button className="signUbtn" onClick={() => navigate("/signInPage")}>Sign in as User</button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
