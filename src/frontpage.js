import React from "react";
import { useNavigate } from "react-router-dom"; 
import "./frontpage.css";
import logo from "./logo.png";

const TaskNest = () => {
    const navigate = useNavigate(); 

    return (
        <div className="container-f">
            <nav className="navbar-f">
                <div className="logo-f">
                    <img src={logo} alt="Task Nest Logo" />
                    <span>Task Nest</span>
                </div>
                <div className="nav-links-f">
                    <a href="#">Home</a>
                    <a href="/aboutPage">About</a>
                    <a href="/contactPage">Contact</a>
                    <button className="login-btn-f" onClick={() => navigate("/login")}>Login</button>
                    <button className="signin-btn-f" onClick={() => navigate("/signin")}>Sign in</button>
                </div>
            </nav>

            <div className="content-task-f">
                <h1>Task Nest</h1>
                <p>Nest Your Tasks Here</p>
                <div className="buttons-f">
                    <button className="btn1-f" onClick={() => navigate("/signin")}>Sign in</button>
                    <button className="btn2-f" onClick={() => navigate("/login")}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default TaskNest;
