# Task Management System
![alt text](https://i.ibb.co/tpZR69T/assessment1.png)
## Overview
This project is a **Task Management System** built using **React**. The system allows users to **create, edit, delete, and view tasks**, categorized by their **statuses**. Tasks are displayed in a format similar to **Microsoft Teams**, featuring **icons** for statuses and an organized **grouped view**.


## Installation & Setup
Note: Make sure react and nodejs is installed in the system.
https://nodejs.org/en
and
https://react.dev/learn/installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/abdullmoiz/TaskManagment.git
   ```
2. **Restore DB Backup**
   ```sh
   1. Go to project folder and restore the Assesssment.bak file to the SSMS.
   2. Go to the backend folder change the connection string in db.js file.
   ```
3. **Install dependencies:**
   ```sh
   cd ProjectCRUD_AbdulMoiz
   cd frontend
   npm install
   ```
4. **Run the frontend:**
   ```sh
   npm start
   ```
5. **Ensure backend API is running** at `http://localhost:5000/api/tasks`.

## Technologies Used
- **React.js** for frontend
- **CSS** for styling
- **JSON** for static data
- **React Icons** for status indicators
- **NodeJS API** for backend communication


## Components
### 1. TaskForm
**File:** `src/components/TaskForm/TaskForm.js`

**Description:**
The `TaskForm` component allows users to create new tasks. It includes input fields for task title, description, and status selection. The form also validates inputs and displays errors when required fields are missing.

**Features:**
- Takes **title** and **description** as input fields.
- Status selection is dynamically rendered from `status.json`.
- Displays an **error group** at the top instead of pop-ups.
- On submission, it sends a **POST request** to the backend and refreshes the task list.



---

### 2. TaskList
**File:** `src/components/TaskList/TaskList.js`

**Description:**
The `TaskList` component displays all tasks in a **grouped format based on status**. It structures tasks into **cards** similar to MS Teams and allows users to interact with tasks.

**Features:**
- Groups tasks by status dynamically.
- Uses a **sorting and grouping mechanism** based on `status.json` to maintain order.
- Renders tasks in **cards** instead of a table for better UX.


---

### 3. TaskItem
**File:** `src/components/TaskItem/TaskItem.js`

**Description:**
Each task is represented using the `TaskItem` component inside `TaskList`. This component displays task details and action buttons.

**Features:**
- Displays **icons** for statuses instead of text.
- Provides **Edit** and **Delete** buttons for modifying tasks.
- Uses a **custom confirmation modal** for deletion.
- Opens an **edit form**.


---

### 4. Status Data
**File:** `src/static-data/status.json`

**Description:**
This file contains the **predefined statuses** used throughout the application. It ensures consistency in status labels and sorting order.

**Example Content:**
```json
[
    { "name": "Pending", "value": "Pending" },
    { "name": "In Progress", "value": "In Progress" },
    { "name": "Completed", "value": "Completed" },
    { "name": "Cancelled", "value": "Cancelled" },
]
```

---

## How the System Works
1. **Creating a Task**:
   - Users enter title, description, and select a status.
   - Clicking "Add Task" sends data to the backend.
   - If a required field is missing, an error message appears at the top.

2. **Viewing Tasks**:
   - Tasks are grouped by status and displayed in card format.
   - Icons represent task statuses visually.

3. **Editing a Task**:
   - Clicking "Edit" opens a form with existing task details.
   - Users can modify and save changes.

4. **Deleting a Task**:
   - Clicking "Delete" opens a custom modal asking for confirmation.
   - If confirmed, the task is removed.

## Future Improvements
- **Drag-and-drop** functionality for changing statuses.
- **User authentication** to assign tasks to users.

---

## Conclusion
This Task Management System is a simplified UI, allowing efficient task tracking and management with a clean UI.


---

## Contact Info
- aabdulmoizz10@gmail.com
- https://www.linkedin.com/in/abdullmoiz