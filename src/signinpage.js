import React from "react";
import { useNavigate } from "react-router-dom";
import "./signinpage.css";
import userIcon from "./usericon.jpeg";  // Path to user icon
import googleIcon from "./googleimage.png"; // Path to Google icon
import logo from "./logo.png";
const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className="login-container-signinp">
      {/* Navbar */}
      <header className="navbar-signinp">
      <div className="logo">
                    <img src={logo} alt="Task Nest Logo" />
                    <span>Task Nest</span>
                </div>
        <nav>
          <ul className="nav-links-signinp">
            <li><a href="/">Home</a></li>
            <li><a href="/aboutPage">About</a></li>
            <li><a href="/contactPage">Contact</a></li>
            <li><button className="login-btn-signinp" onClick={() => navigate("/login")}>Login</button></li>
          </ul>
        </nav>
      </header>

      {/* Login Box */}
      <div className="login-box-signinp">
        <div className="login-header-signinp">
          <img src={userIcon} alt="User Icon" className="user-icon-signinp" />
          <h2>Sign in</h2>
        </div>

        <form>
          <label>Username</label>
          <input type="text" placeholder="Username" />

          <label>Email</label>
          <input type="email" placeholder="Email" />

          <label>Password</label>
          <input type="password" placeholder="Password" />

          <button type="submit" className="sign-in-btn-signinp" onClick={()=> navigate("/boardPage")}>Sign in</button>

          <button className="google-signinp">
            <img src={googleIcon} alt="Google Icon" className="google-icon-signinp" />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
