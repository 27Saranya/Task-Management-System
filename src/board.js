import React from "react";
import "./board.css";
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
const TaskBoard = () => {
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
      <aside className="sidebar-board">
      <div className="logo-board"><img className="logoimage-board" src={logo}/> <strong className="task-board-text">Task Nest</strong></div><br></br>
        <ul>
          <li className="active-board"><img src={Board} alt="Board" className="icon-img-board" /><button className="button1-list">Board</button></li><br></br>
          <li><img src={task} alt="Task" className="icon-img-board" /><button className="button-list" onClick={() => navigate("/tasks")}>Task</button></li><br></br>
          <li><img src={Project} alt="Projects" className="icon-img-board" /><button className="button-list" onClick={() => navigate("/projects")}> Projects</button></li><br></br>
          <li><img src={User} alt="Account" className="icon-img-board" /><button className="button-list" onClick={() => navigate("/account")}>Account</button></li><br></br>
          <li><img src={Setting} alt="Settings" className="icon-img-board" /><button className="button-list" onClick={() => navigate("/settings")}>Settings</button></li><br></br>
        </ul>
      </aside>

      {/* Main content */}
      <main className="task-main-board">
        <header className="task-header-board">
          <h2>Task Management System</h2>
          <div className="search-bar-board">
            <input type="text" placeholder="Search" />
            <img src={Search} alt="Search" className="search-icon-board" />
          </div>
          <div className="icons-board">
            <img src={bell} alt="Notification" className="icon-board" />
            <img src={User} alt="User" className="icon-board" />
          </div>
        </header>

        {/* Task Filters */}
        <div className="task-filters-board">
          <button onClick={() => navigate("/todoList")}>To-do List</button>
          <button onClick={() => navigate("/completedTasks")}>Completed</button>
          <button onClick={() => navigate("/overdueTasks")}>Overdue</button>
          <button onClick={() => navigate("/inprogressTasks")}>In Progress</button>
          <button className="add-task-board" onClick={() => navigate("/addTask")}>
          <img src={Add} alt="Add" className="icon-add-img-board" /> <h6 className="text-board">Add</h6>
        </button>
        </div>
        

        {/* Task Grid */}
        <div className="task-grid-board">
          {tasks.map((task) => (
            <div className="task-card-board" key={task.id}>
              <img src={task.image} alt={task.title} />
              <div className="task-info-board">
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

export default TaskBoard;
