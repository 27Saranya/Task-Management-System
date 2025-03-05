import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TaskNest from "./frontpage.js";
import SignIn from "./signin.js";
import Login from "./login.js";
import TaskBoard from "./board.js";
import OverdueTask from "./overdueTask.js";
import AddTask from "./addTask.js";
import Tasks from "./tasks.js";
import Projects from "./projects.js";
import Account from "./account.js";
import CompletedTasks from "./completedTasks.js";
import InProgress from "./inprogressTasks.js";
import Settings from "./settingPage.js";
import TodoList from "./todoListPage.js";
import AboutPage from "./aboutPage.js";
import ContactPage from "./contactPage.js";
import Signin from "./signinpage.js";
import LoginPage from "./loginpage.js";
const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Check if user is logged in (token exists in localStorage)
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, []);

    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<TaskNest />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signInPage" element={<Signin />} />
                <Route path="/logInPage" element={<LoginPage />} />
                <Route path="/aboutPage" element={<AboutPage />} />
                <Route path="/contactPage" element={<ContactPage />} />

                {/* Protected Routes (Require Authentication) */}
                {isAuthenticated ? (
                    <>
                        <Route path="/boardPage" element={<TaskBoard />} />
                        <Route path="/addTask" element={<AddTask />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/overdueTasks" element={<OverdueTask />} />
                        <Route path="/completedTasks" element={<CompletedTasks />} />
                        <Route path="/inprogressTasks" element={<InProgress />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/todoList" element={<TodoList />} />
                    </>
                ) : (
                    // Redirect users to login if they try accessing protected routes
                    <Route
                        path="*"
                        element={
                            <>
                            {alert("Invalid username and password!")}
                            <Navigate to="/login" />
                            </>
                        }
                    />
                )}
            </Routes>
        </Router>
    );
};

export default App;
