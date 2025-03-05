import React from "react";
import "./addTask.css";
import backarrow from "./backarrrow.png";
import bell from "./notification.png";
import User from "./usericon.jpeg";
import Search from "./searchimage.jpeg";
import Board from "./boardimage.png";
import Project from "./projectimage.png";
import Setting from "./settingimage.png";
import task from "./tasks.png";
import logo from "./logo.png";
import writingImage from "./writingimage.png";
import projectDoing from "./projectdoing.jpeg";
import { useNavigate } from "react-router-dom";
const AddTask = () => {
  const navigate=useNavigate();
  return (
    <div className="task-board-container">
      {/* Sidebar */}
      <aside className="sidebar-addtask">
      <div className="logo-addtask"><img className="logoimage-addtask" src={logo}/> <strong className="logotext-addtask">Task Nest</strong></div><br></br>
        <ul>
        <li><img src={Board} alt="Board" className="icon-img-addtask" /><button className="button-list-addtask" onClick={() => navigate("/boardPage")}>Board</button></li><br></br>
          <li><img src={task} alt="Task" className="icon-img-addtask" /><button className="button-list-addtask" onClick={() => navigate("/tasks")}>Task</button></li><br></br>
          <li><img src={Project} alt="Projects" className="icon-img-addtask" /><button className="button-list-addtask" onClick={() => navigate("/projects")}> Projects</button></li><br></br>
          <li><img src={User} alt="Account" className="icon-img-addtask" /><button className="button-list-addtask" onClick={() => navigate("/account")}>Account</button></li><br></br>
          <li><img src={Setting} alt="Settings" className="icon-img-addtask" /><button className="button-list-addtask" onClick={() => navigate("/settings")}>Settings</button></li><br></br>
        </ul>
      </aside>

      {/* Main content */}
      <main className="task-main-addtask">
        <header className="task-header-addtask">
          <h2>Task Management System</h2>
          <div className="icons-addtask">
            <img src={bell} alt="Notification" className="icon-addtask" />
            <img src={User} alt="User" className="icon2-addtask" />
          </div>
        </header>
        <br></br>
        <div className="icons-addtask">
        <a href="/boardPage">
          <img className="backarrrow-addtask" src={backarrow} alt="" /></a>
          </div>
        {/* Task Filters */}
        <div className="task-filters-addtask">
          <h3 className="text2-addtask">Add Tasks</h3>
        </div>
        

        <section className="task-form-addtask">
          <div className="input-group-addtask">
            <label>Task Name</label>
            <input type="text" />
          </div>
          <div className="input-group-addtask">
            <label>Start Date </label>
            <input type="date" />
          </div>
          <div className="input-group-addtask">
            <label>End Date </label>
            <input type="date" />
          </div>
          <button className="add-task-addtask">Add task</button>
        </section>

        {/* Add Task Button */}
      </main>
    </div>
  );
};

export default AddTask;