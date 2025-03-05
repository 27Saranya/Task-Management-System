import React from "react";
import { useNavigate } from "react-router-dom";
import "./account.css";
import bell from "./notification.png";
import User from "./usericon.jpeg";
import Search from "./searchimage.jpeg";
import Board from "./boardimage.png";
import Add from "./addimage.jpeg";
import Project from "./projectimage.png";
import Setting from "./settingimage.png";
import task from "./tasks.png";
import logo from "./logo.png";
import EditIcon from "./edit.png";
const Account = () => {
  const navigate=useNavigate();
  return (
    <div className="task-board-container">
      {/* Sidebar */}
      <aside className="sidebar-account">
      <div className="logo-account"><img className="logoimage-account" src={logo}/> <strong className="logotext-account">Task Nest</strong></div><br></br>
        <ul>
        <li><img src={Board} alt="Board" className="icon-img-account" /><button className="button-list-account" onClick={() => navigate("/boardPage")}>Board</button></li><br></br>
          <li><img src={task} alt="Task" className="icon-img-account" /><button className="button-list-account" onClick={() => navigate("/tasks")}>Task</button></li><br></br>
          <li><img src={Project} alt="Projects" className="icon-img-account" /><button className="button-list-account" onClick={() => navigate("/projects")}> Projects</button></li><br></br>
          <li className="active-account"><img src={User} alt="Account" className="icon-img-account" /><button className="button1-list-account" onClick={() => navigate("/account")}>Account</button></li><br></br>
          <li><img src={Setting} alt="Settings" className="icon-img-account" /><button className="button-list-account" onClick={() => navigate("/settings")}>Settings</button></li><br></br>
        </ul>
      </aside>

      {/* Main content */}
      <main className="task-main-account">
        <header className="task-header-account">
          <h2>Task Management System</h2>
          <div className="icons-account">
            <img src={bell} alt="Notification" className="icon1-account" />
            <img src={User} alt="User" className="icon-account" />
          </div>
        </header>
        <h3 className="text2-account">Account</h3>
        <div className="content-account">
        <button className="edit-btn-account">
          Edit <img src={EditIcon} alt="Edit" className="edit-icon-account" />
        </button>
        <div className="account-details-account">
          <div className="detail-account">Username : Alice</div>
          <div className="detail-account">Email : Alice@example.com</div>
          <div className="detail-account">No. of tasks added : 09</div>
          <div className="detail-account">Completed : 03</div>
          <div className="detail-account">Overdue : 02</div>
          <div className="detail-account">To-Do : 03</div>
          <div className="detail-account">In-Progress : 03</div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default Account;
