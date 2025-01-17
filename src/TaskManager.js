import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/tasks";

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({ title: "", description: "" });

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await axios.get(API_URL);
        setTasks(response.data);
    };

    const addTask = async () => {
        await axios.post(API_URL, task);
        setTask({ title: "", description: "" });
        fetchTasks();
    };

    return (
        <div>
            <h2>Task Manager</h2>
            <input type="text" placeholder="Title" value={task.title} onChange={(e) => setTask({ ...task, title: e.target.value })} />
            <input type="text" placeholder="Description" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((t) => (
                    <li key={t.id}>
                        {t.title} - {t.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskManager;