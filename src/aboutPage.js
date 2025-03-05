import React from "react";
import "./aboutPage.css";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
const AboutPage = () => {
const navigate=useNavigate();
    return (
        <div className="container-about">
            <nav className="navbar-about">
                <div className="logo-about">
                    <img src={logo} alt="Task Nest Logo" />
                    <span>Task Nest</span>
                </div>
                <div className="nav-links-about">
                    <a href="/">Home</a>
                    <a href="#">About</a>
                    <a href="/contactPage">Contact</a>
                    <button className="login-btn-about" onClick={() => navigate("/login")}>Login</button>
                    <button className="signin-btn-about" onClick={() => navigate("/signin")}>Sign in</button>
                </div>
            </nav>

            <div className="container1-about" >
            <div className="about-about" style={{ padding: '20px', maxWidth: '800px', margin: 'auto', textAlign: 'left'}}>
              <h1>About Our Task Management System</h1>
              <p>Welcome to our Task Management System, a powerful and intuitive tool designed to help individuals and teams stay organized, manage projects efficiently, and increase productivity.</p>
              <h2>Features</h2>
                <pre><strong>Task Organization:</strong>Easily create, edit, and categorize tasks.<br></br>

                <strong>Project Management:</strong>Manage multiple projects with distinct tasks and deadlines.<br></br>

                <strong>Prioritization & Deadlines:</strong>Set due dates and prioritize tasks to stay on schedule.<br></br>

                <strong>User-Friendly Interface:</strong>A clean and intuitive UI built with React for smooth navigation.<br></br>

                <strong>Notifications & Reminders:</strong>Stay updated with timely notifications and task reminders.<br></br>

                <strong>Progress Tracking:</strong>Visualize progress with charts and reports.</pre>
              <br></br>
              <h2>Get Started</h2>
              <p>Start using our Task Management System today and take control of your productivity!</p>
              <p>For any inquiries or support, feel free to contact us.</p>
            </div>
            </div>
        </div>
    );
};
export default AboutPage;