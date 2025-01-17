import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import './TaskList.css';
import { FaCheckCircle, FaTimesCircle, FaClipboardList, FaCircleNotch, FaClock } from "react-icons/fa";
import statuses from "../../static-data/status.json"


const TaskList = ({ tasks, fetchTasks }) => {
    const getStatusIcon = (status) => {
        switch (status) {
            case "Completed":
                return <FaCheckCircle style={{ color: '#4CAF50' }} />;
            case "In Progress":
                return <FaCircleNotch style={{ color: '#0078D4' }} />;
            case "Cancelled":
                return <FaTimesCircle style={{ color: '#E74C3C' }} />;
            case "Pending":
                return <FaClock style={{ color: '#BDBDBD' }} />;
            default:
                return <FaClipboardList style={{ color: '#BDC3C7' }} />;
        }
    };

    const groupedTasks = {};
    // Step 1: Initialize groupedTasks with empty arrays based on status order
    for (let i = 0; i < statuses.length; i++) 
        {
            if(statuses[i].value)
            {
                groupedTasks[statuses[i].value] = [];
            }
    }
    
    // Step 2: Group tasks based on their status
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (groupedTasks.hasOwnProperty(task.Status)) {
            groupedTasks[task.Status].push(task);
        }
    }
    
    // Step 3: Convert groupedTasks into a sorted array (optional, if needed)
    const sortedGroupedTasks = Object.entries(groupedTasks).filter(([_, tasks]) => tasks.length > 0);

    return (

        <div> 
        {/* <h2 className="task-list-header">Task List</h2> */}
        <div className="flex task-list-container">
           

            {Object.keys(groupedTasks).map((status) => (
                <div key={status} className="task-status-group">
                    <h3 className="status-header">{getStatusIcon(status)}  {status} ({groupedTasks[status]?.length})</h3>
                    <div className="task-cards-container">
                        {groupedTasks[status].map((task) => (
                            <div key={task.TaskID} className="task-card">
                                <TaskItem task={task} fetchTasks={fetchTasks} />
                            </div>
                        ))}
                    </div>
                    
                </div>
            ))}
        </div>
        </div>
    );
};

export default TaskList;
