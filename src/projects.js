import React from "react";
import "./projects.css";
import bell from "./notification.png";
import User from "./usericon.jpeg";
import Search from "./searchimage.jpeg";
import Board from "./boardimage.png";
import Add from "./addimage.jpeg";
import Project from "./projectimage.png";
import Setting from "./settingimage.png";
import task from "./tasks.png";
import logo from "./logo.png";
import writingImage from "./writingimage.png";
import lapWorking from "./lapworking.jpeg";
import projectDoing from "./projectdoing.jpeg";
import studingImage from "./studyingimage.jpg";
import designImage from "./designingimage.jpg";
import { useNavigate } from "react-router-dom";
const Projects = () => {
  const navigate=useNavigate();
  const tasks = [
    { id: 2, title: "Task-2", date: "Updated yesterday", image: designImage },
    { id: 3, title: "Task-3", date: "Updated 2 days ago", image: projectDoing },
  ];
  return (
    <div className="task-board-container-projects">
      {/* Sidebar */}
      <aside className="sidebar-projects">
      <div className="logo-projects"><img className="logoimage-projects" src={logo}/> <strong className="logotext-projects">Task Nest</strong></div><br></br>
        <ul>
        <li><img src={Board} alt="Board" className="icon-img-projects" /><button className="button-list-projects" onClick={() => navigate("/boardPage")}>Board</button></li><br></br>
          <li><img src={task} alt="Task" className="icon-img-projects" /><button className="button-list-projects" onClick={() => navigate("/tasks")}>Task</button></li><br></br>
          <li className="active-projects"><img src={Project} alt="Projects" className="icon-img-projects" /><button className="button1-list-projects" onClick={() => navigate("/projects")}> Projects</button></li><br></br>
          <li><img src={User} alt="Account" className="icon-img-projects" /><button className="button-list-projects" onClick={() => navigate("/account")}>Account</button></li><br></br>
          <li><img src={Setting} alt="Settings" className="icon-img-projects" /><button className="button-list-projects" onClick={() => navigate("/settings")}>Settings</button></li><br></br>
        </ul>
      </aside>

      {/* Main content */}
      <main className="task-main-projects">
        <header className="task-header-projects">
          <h2>Task Management System</h2>
          <div className="icons-projects">
            <img src={bell} alt="Notification" className="icon1-projects" />
            <img src={User} alt="User" className="icon-projects" />
          </div>
        </header>

        <div className="task-filters-projects">
          <h3 className="text2-projects">Projects</h3>
        </div>
        

        {/* Task Grid */}
        <div className="task-grid-projects">
          {tasks.map((task) => (
            <div className="task-card-projects" key={task.id}>
              <img src={task.image} alt={task.title} />
              <div className="task-info-projects">
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

export default Projects;