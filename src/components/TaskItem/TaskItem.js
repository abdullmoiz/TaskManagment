import React, { useState } from "react";
import './TaskItem.css';
import statuses from "../../static-data/status.json"

const DeleteModal = ({ onConfirm, onCancel }) => (
  <div className="modal-overlay">
    <div className="modal-content">
      <h3>Are you sure you want to delete this task?</h3>
      <button className="modal-button" onClick={onConfirm}>Yes</button>
      <button className="modal-button" onClick={onCancel}>No</button>
    </div>
  </div>
);

const TaskItem = ({ task, fetchTasks }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);
    const [newTitle, setNewTitle] = useState(task.Title);
    const [newDescription, setNewDescription] = useState(task.Description);
    const [newStatus, setNewStatus] = useState(task.Status);
    const [errorMessage, setErrorMessage] = useState("");

    const clearState = async () => {
        setErrorMessage("");
        setNewTitle(task.Title);
        setNewDescription(task.Description);
        setNewStatus(task.Status);
    }

    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/api/tasks/${id}`, { method: "DELETE" });
        fetchTasks();
        setShowDeleteModal(false);
    };

    const editTask = async () => {
        debugger;
        if (!newTitle || !newStatus) {
            setErrorMessage("All fields are required!");
            return;
        }

        setErrorMessage("");

        await fetch(`http://localhost:5000/api/tasks/${task.TaskID}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: newTitle, description: newDescription, status: newStatus })
        });

        fetchTasks();
        setShowEditForm(false);
    };

    return (
        <tr>
            <td className="new-row"> <b>{task.Title}</b></td>
            <td className="new-row description">{task.Description}</td>
            <td className="flex">
                <button className="task-button edit-button" onClick={() => setShowEditForm(true)}>Edit</button>
                <button className="task-button delete-button" onClick={() => setShowDeleteModal(true)}>Delete</button>
            </td>

            {/* Delete Modal */}
            {showDeleteModal && (
                <DeleteModal
                    onConfirm={() => deleteTask(task.TaskID)}
                    onCancel={() => setShowDeleteModal(false)}
                />
            )}

            {/* Edit Form */}
            {showEditForm && (
                <div className="edit-form-container">
                    <div className="edit-form">
                        <h2>Edit Task</h2>
                        <input 
                            type="text" 
                            value={newTitle} 
                            onChange={(e) => setNewTitle(e.target.value)} 
                            placeholder="Title"
                        />
                        <textarea
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            placeholder="Description"
                        />
                        {/* Status Dropdown */}
                        <select 
                            value={newStatus} 
                            onChange={(e) => setNewStatus(e.target.value)}
                            className="status-dropdown"
                        >
                            {statuses.map(status => (
                                <option key={status.value} value={status.value}>
                                    {status.name}
                                </option>
                            ))}
                            

                        </select>
                        {errorMessage && <p className="error-group">{errorMessage}</p>} {/* Display error message */}
                        <div className="button-group">
                            <button onClick={editTask}>Save</button>
                            <button onClick={() => { setShowEditForm(false);clearState();}}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </tr>
    );
};

export default TaskItem;