import React from "react";
import { useNavigate } from "react-router-dom";
import "./loginpage.css";
import userIcon from "./usericon.jpeg";  // Path to user icon
import googleIcon from "./googleimage.png"; // Path to Google icon
import logo from "./logo.png";
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="loginp-container">
      {/* Navbar */}
      <header className="navbar-loginp">
      <div className="logo">
                    <img src={logo} alt="Task Nest Logo" />
                    <span>Task Nest</span>
                </div>
        <nav>
          <ul className="nav-links-loginp">
            <li><a href="/">Home</a></li>
            <li><a href="/aboutPage">About</a></li>
            <li><a href="/contactPage">Contact</a></li>
            <li><button className="login-btn-loginp" onClick={() => navigate("/signin")}>Sign In</button></li>
          </ul>
        </nav>
      </header>

      {/* Login Box */}
      <div className="login-box-loginp">
        <div className="login-header-loginp">
          <img src={userIcon} alt="User Icon" className="user-icon-loginp" />
          <h2>Login</h2>
        </div>

        <form>
          <label>Username</label>
          <input type="text" placeholder="Username" />

          <label>Password</label>
          <input type="password" placeholder="Password" /><p></p>

          <button type="submit" className="sign-in-btn-loginp" onClick={()=> navigate("/boardPage")}>Login</button>

          <button className="google-signin-loginp">
            <img src={googleIcon} alt="Google Icon" className="google-icon-loginp" />
            Sign in with Google
          </button>
          <button className="google-signin-loginp" onClick={() => navigate("/signin")}>
           Don't have an account?
          </button>
        </form>
      </div>
    </div>
  );
};


export default LoginPage;
