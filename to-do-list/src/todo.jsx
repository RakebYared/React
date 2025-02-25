import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

function TaskManagement() {
    const [task, setTask] = useState({ status: false, title: '', dueDate: '', description: '' });
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [sortOption, setSortOption] = useState("dateModified");

    const handleAddOrUpdate = () => {
        if (task.title) {
            if (editIndex !== null) {
                const updatedTasks = tasks.map((t, index) => (index === editIndex ? task : t));
                setTasks(updatedTasks);
                setEditIndex(null);
            } else {
                setTasks([...tasks, { ...task, dateModified: new Date() }]);
            }
            setTask({ status: false, title: '', dueDate: '', description: '' });
        }
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setTask(tasks[index]);
    };

    const handleDelete = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const toggleStatus = (index) => {
        const updatedTasks = tasks.map((t, i) =>
            i === index ? { ...t, status: !t.status } : t
        );
        setTasks(updatedTasks);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const sortedTasks = () => {
        return [...tasks].sort((a, b) => {
            if (sortOption === "dateModified") {
                return new Date(b.dateModified) - new Date(a.dateModified);
            }
            if (sortOption === "title") {
                return a.title.localeCompare(b.title);
            }
            if (sortOption === "status") {
                return (a.status === b.status) ? 0 : a.status ? -1 : 1;
            }
            return 0;
        });
    };

    return (
        <>
            <div>
                <h1>Task Management</h1>
                <input
                    type="text"
                    value={task.title}
                    placeholder="Title"
                    onChange={(e) => setTask({ ...task, title: e.target.value })}
                />
                <input
                    type="date"
                    value={task.dueDate}
                    onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
                />
                <textarea
                    value={task.description}
                    placeholder="Description"
                    onChange={(e) => setTask({ ...task, description: e.target.value })}
                />
                <br />
                <button onClick={handleAddOrUpdate}>
                    {editIndex !== null ? 'Update Task' : 'Add Task'}
                </button>
            </div>
            <div className="sort-dropdown">
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" value={sortOption} onChange={handleSortChange}>
                    <option value="dateModified">Date Modified</option>
                    <option value="title">Title</option>
                    <option value="status">Status</option>
                </select>
            </div>
            <div>
                <ul>
                    {sortedTasks().map((taskItem, index) => (
                        <li key={index}>
                            <h3>
                                <span onClick={() => toggleStatus(index)} style={{ cursor: 'pointer', marginRight: '10px' }}>
                                    <FontAwesomeIcon icon={taskItem.status ? faCircleCheck : faCircle} />
                                </span>
                                {taskItem.title}
                            </h3>
                            <p>Due Date: {taskItem.dueDate}</p>
                            <p>Description: {taskItem.description}</p>
                            <button className="edit-button" onClick={() => handleEdit(index)}>Edit</button>
                            <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default TaskManagement;