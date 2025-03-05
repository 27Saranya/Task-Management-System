import React from "react";
import "./board2.css";
import User from "./usericon.jpeg";
import Board from "./boardimage.png";
import Project from "./projectimage.png";
import Setting from "./settingimage.png";
import task from "./tasks.png";
import logo from "./logo.png"
import bell from "./notification.png";
import Edit from "./edit.png";
import Globe from "./languageicon.png";
import Clock from "./remaindericon.png";
import Moon from "./sunicon.png";
import { useNavigate } from "react-router-dom";
const Settings = () => {
const navigate=useNavigate();
  return (
    <div className="task-board-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo"><img className="logoimage" src={logo}/> <strong className="logotext">Task Nest</strong></div>
        <ul><br></br>
        <li><img src={Board} alt="Board" className="icon-img-account" /><button className="button-list-account" onClick={() => navigate("/boardPage")}>Board</button></li><br></br>
          <li><img src={task} alt="Task" className="icon-img-account" /><button className="button-list-account" onClick={() => navigate("/tasks")}>Task</button></li><br></br>
          <li><img src={Project} alt="Projects" className="icon-img-account" /><button className="button-list-account" onClick={() => navigate("/projects")}> Projects</button></li><br></br>
          <li><img src={User} alt="Account" className="icon-img-account" /><button className="button-list-account" onClick={() => navigate("/account")}>Account</button></li><br></br>
          <li className="active-account"><img src={Setting} alt="Settings" className="icon-img-account" /><button className="button1-list-account">Settings</button></li><br></br>
        </ul>
      </aside>

      {/* Main content */}
      <main className="task-main">
      <header className="task-header">
          <h2>Task Management System</h2>
          <div className="icons">
            <img src={bell} alt="Notification" className="icon1" />
            <img src={User} alt="User" className="icon2" />
          </div>
        </header>
        <header className="task-header">
          <h2 className="text1">Settings</h2>
        </header>
        <div className="settinglist">
  <button className="edit-text">
    <img src={Edit} alt="Edit Profile" className="icon1-img" /> Edit Profile
  </button><br></br>
  <button className="language-text">
    <img src={Globe} alt="Language" className="icon1-img" /> Language
  </button><br></br>
  <button className="reminder-text">
    <img src={Clock} alt="Reminder" className="icon1-img" /> Reminder
  </button><br></br>
  <button className="mode-text">
    <img src={Moon} alt="Light/Dark Mode" className="icon1-img" /> Light/Dark Mode
  </button>
</div>

      </main>
    </div>
  );
};

export default Settings;
