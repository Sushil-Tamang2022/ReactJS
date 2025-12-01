import React, { useState } from 'react'

const TodoApp = () => {
    // newTask
    const [newTask, setNewTask] = useState("");
    // mainTaskList
    const [tasks, setTasks] = useState([]);

    // For adding new task to main task list
    const handleAddTask = () => {
        if(newTask.trim() === "") return;
        const task = {
            id: Date.now() + Math.random(),
            text: newTask,
            completed: false
        }
        setTasks([...tasks, task]);
        setNewTask("");
    }

    // Toggle Task
    const handleToggle = (id) => {
        const updatedTasks = tasks.map((task) => (
            task.id === id ? {...task, completed: !task.completed} : task
        ))
        setTasks(updatedTasks);
    }

    const handleDelete = (id) => {
        const confirmDelete = confirm("Are you sure to delete?")
        if(confirmDelete) {
            const updatedTasks = tasks.filter((task) => task.id !== id)
            setTasks(updatedTasks);
        }
    }

  return (
    <div>   
        <h1>Todo App</h1>
        <input style={{ fontSize: "24px" }} onChange={(e) => setNewTask(e.target.value)} type='text' value={newTask} placeholder='Enter your task'/>
        <button onClick={handleAddTask} style={{ fontSize: "24px", marginLeft: "20px" }}>Add</button>
        <ul>
            {tasks.map((task) => (
                <li style={{ fontWeight: "bold", fontSize: "24px", textDecoration: task.completed ? "line-through" : "none", color: task.completed ? "grey" : "black" }} key={task.id}>{task.text} <button onClick={() => handleToggle(task.id)}>✅</button><button onClick={() => handleDelete(task.id)}>❌</button></li>
            ))}
        </ul>
    </div>
  )
}

export default TodoApp