import React from "react";
import "./contactPage.css";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
const ContactPage = () => {
  const navigate=useNavigate();
    return (
        <div className="container-contact">
            <nav className="navbar-contact">
                <div className="logo-contact">
                    <img src={logo} alt="Task Nest Logo" />
                    <span>Task Nest</span>
                </div>
                <div className="nav-links-contact">
                    <a href="/">Home</a>
                    <a href="/abountPage">About</a>
                    <a href="#">Contact</a>
                    <button className="login-btn-contact" onClick={() => navigate("/login")}>Login</button>
                    <button className="signin-btn-contact" onClick={() => navigate("/signin")}>Sign in</button>
                </div>
            </nav>

            <div className="contact-container" style={{ padding: "20px", maxWidth: "800px", margin: "auto", textAlign: "left" }}>
      <h1>Contact Us</h1>
      <p>
        We’re here to help! If you have any questions, feedback, or need support with our Task Management System, feel free to reach out to us.
      </p>
      <h2>Get in Touch</h2>
      <form className="contact-form" style={{ marginTop: "20px" }}>
        <label htmlFor="name" style={{ display: "block", marginBottom: "10px" }}>
          Name:
        </label>
        <input type="text" id="name" name="name" placeholder="Enter your name" style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <label htmlFor="email" style={{ display: "block", marginBottom: "10px" }}>
          Email:
        </label>
        <input type="email" id="email" name="email" placeholder="Enter your email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        <label htmlFor="message" style={{ display: "block", marginBottom: "10px" }}>
          Message:
        </label>
        <textarea id="message" name="message" rows="3" placeholder="Enter your message"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "20px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        ></textarea>

        <button className="submit-btn" type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>
      <h2>Our Contact Details</h2>
      <p>
        <strong>Email:</strong> support@taskmanagement.com<br />
        <strong>Phone:</strong> +1 234 567 890<br />
        <strong>Address:</strong> 123 ABC street,XYZ City-123456
      </p>
    </div>
    </div>
  );
};

export default ContactPage;