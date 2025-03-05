import React from "react";
import "./overdueTask.css";
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
const OverdueTask = () => {
  const navigate=useNavigate();
  const tasks = [
    { id: 3, title: "Task-3", date: "Updated 2 days ago", image: projectDoing },
    { id: 6, title: "Task-6", date: "Updated 2 days ago", image: writingImage },
  ];
  return (
    <div className="task-board-container">
      {/* Sidebar */}
      <aside className="sidebar-overduetasks">
      <div className="logo-overduetasks"><img className="logoimage-overduetasks" src={logo}/> <strong className="logotext-overduetasks">Task Nest</strong></div><br></br>
        <ul>
        <li><img src={Board} alt="Board" className="icon-img-overduetasks" /><button className="button-list-overduetasks" onClick={() => navigate("/boardPage")}>Board</button></li><br></br>
          <li><img src={task} alt="Task" className="icon-img-overduetasks" /><button className="button-list-overduetasks" onClick={() => navigate("/tasks")}>Task</button></li><br></br>
          <li><img src={Project} alt="Projects" className="icon-img-overduetasks" /><button className="button-list-overduetasks" onClick={() => navigate("/projects")}> Projects</button></li><br></br>
          <li><img src={User} alt="Account" className="icon-img-overduetasks" /><button className="button-list-overduetasks" onClick={() => navigate("/account")}>Account</button></li><br></br>
          <li><img src={Setting} alt="Settings" className="icon-img-overduetasks" /><button className="button-list-overduetasks" onClick={() => navigate("/settings")}>Settings</button></li><br></br>
        </ul>
      </aside>

      {/* Main content */}
      <main className="task-main-overduetasks">
        <header className="task-header-overduetasks">
          <h2>Task Management System</h2>
          <div className="icons-overduetasks">
            <img src={bell} alt="Notification" className="icon-overduetasks" />
            <img src={User} alt="User" className="icon2-overduetasks" />
          </div>
        </header>
        <br></br>
        <div className="icons-overduetasks">
        <a href="/boardPage">
          <img className="backarrrow-overduetasks" src={backarrow} alt="" /></a>
          </div>
        {/* Task Filters */}
        <div className="task-filters-overduetasks">
          <h3 className="text2-overduetasks">Over Due Tasks</h3>
        </div>
        

        {/* Task Grid */}
        <div className="task-grid-overduetasks">
          {tasks.map((task) => (
            <div className="task-card-overduetasks" key={task.id}>
              <img src={task.image} alt={task.title} />
              <div className="task-info-overduetasks">
                <h3>{task.title}</h3>
                <p>{task.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Add Task Button */}
      </main>
    </div>
  );
};

export default OverdueTask;