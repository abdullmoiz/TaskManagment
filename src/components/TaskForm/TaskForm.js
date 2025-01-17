import React, { useState } from "react";
import './TaskForm.css';
import statuses from "../../static-data/status.json";

const TaskForm = ({ fetchTasks }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        if (!title) formErrors.title = "Title is required";
        if (!status) formErrors.status = "Status is required";
        return formErrors;
    };

    const addTask = async () => {
        const formErrors = validateForm();
        setErrors(formErrors);

        if (Object.keys(formErrors).length > 0) return;

        await fetch("http://localhost:5000/api/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, description, status })
        });        

        setTitle("");
        setDescription("");
        setStatus("");
        setErrors({});
        fetchTasks();
    };

    return (
        <div className="taskform-container">
            <h2 className="taskform-header">Add Task</h2>

       
            {/*Title*/}
            <label>*Title</label>
            <input
                type="text"
                className="task-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
           

            {/*Description*/}
            <label>Description</label>

            <input
                type="text"
                className="task-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
          
            {/*Status*/}
            <label>*Status</label>

            <select
                className="task-status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
            >
                {statuses.map(status => (
                    <option key={status.value} value={status.value}>
                        {status.name}
                    </option>
                ))}
            </select>
           
            {errors && (errors.title || errors.status) && <div className="error-group">
        {errors.title && <p className="error-message">{errors.title}</p>}
        {errors.status && <p className="error-message">{errors.status}</p>}
        </div>}

            {/*Add Button*/}
            <button className="task-button" onClick={addTask}>Add Task</button>
        </div>
    );
};

export default TaskForm;