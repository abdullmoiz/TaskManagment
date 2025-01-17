import React, { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import './App.css';


const App = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await fetch("http://localhost:5000/api/tasks");
        const data = await response.json();
        setTasks(data);
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <h1 className="ms-teams-heading">Task Management</h1>
            <div className="flex">
            <TaskForm fetchTasks={fetchTasks} />
            <TaskList tasks={tasks} fetchTasks={fetchTasks} />
            </div>
           
        </div>
    );
};

export default App;