import React from "react";
import "./tasks.css";
import bell from "./notification.png";
import User from "./usericon.jpeg";
import Board from "./boardimage.png";
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
const Tasks = () => {
  const tasks = [
    { id: 1, title: "Task-1", date: "Updated today", image: writingImage },
    { id: 2, title: "Task-2", date: "Updated yesterday", image: designImage },
    { id: 3, title: "Task-3", date: "Updated 2 days ago", image: projectDoing },
    { id: 4, title: "Task-4", date: "Updated today", image: studingImage },
    { id: 5, title: "Task-5", date: "Updated yesterday", image: lapWorking },
    { id: 6, title: "Task-6", date: "Updated 2 days ago", image: writingImage },
    { id: 7, title: "Task-7", date: "Updated today", image: projectDoing },
    { id: 8, title: "Task-8", date: "Updated yesterday", image: designImage },
    { id: 9, title: "Task-9", date: "Updated yesterday", image: studingImage },
  ];
  const navigate=useNavigate();
  return (
    <div className="task-board-container">
      {/* Sidebar */}
      <aside className="sidebar-tasks">
      <div className="logo-tasks"><img className="logoimage-tasks" src={logo}/> <strong className="logotext-tasks">Task Nest</strong></div><br></br>
        <ul>
        <li><img src={Board} alt="Board" className="icon-img-tasks" /><button className="button-list-tasks" onClick={() => navigate("/boardPage")}>Board</button></li><br></br>
          <li className="active-tasks"><img src={task} alt="Task" className="icon-img-tasks" /><button className="button1-list-tasks">Task</button></li><br></br>
          <li><img src={Project} alt="Projects" className="icon-img-tasks" /><button className="button-list-tasks" onClick={() => navigate("/projects")}> Projects</button></li><br></br>
          <li><img src={User} alt="Account" className="icon-img-tasks" /><button className="button-list-tasks" onClick={() => navigate("/account")}>Account</button></li><br></br>
          <li><img src={Setting} alt="Settings" className="icon-img-tasks" /><button className="button-list-tasks" onClick={() => navigate("/settings")}>Settings</button></li><br></br>
        </ul>
      </aside>

      {/* Main content */}
      <main className="task-main-tasks">
        <header className="task-header-tasks">
          <h2>Task Management System</h2>
          <div className="icons-tasks">
            <img src={bell} alt="Notification" className="icon1-tasks" />
            <img src={User} alt="User" className="icon-tasks" />
          </div>
        </header>

        <div className="task-filters-tasks">
          <h3 className="text2-tasks">Tasks</h3>
        </div>
        

        {/* Task Grid */}
        <div className="task-grid-tasks">
          {tasks.map((task) => (
            <div className="task-card-tasks" key={task.id}>
              <img src={task.image} alt={task.title} />
              <div className="task-info-tasks">
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

export default Tasks;
