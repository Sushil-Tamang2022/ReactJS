import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

const TodoApp = () => {
    // newTask
    const [newTask, setNewTask] = useState("")
    // mainTaskList
    const [tasks, setTasks] = useState([])

    // For handling new task to main task list
    const handleAddTask = () => {
        if (newTask.trim() === "") return
        const task = {
            id: Date.now() + Math.random(),
            text: newTask,
            completed: false
        }
        setTasks([...tasks, task]);
        setNewTask("");
    }

    // For ticking the completed one
    const handleToggle = (id) => {
        const updatedTask = tasks.map((task) => (
            task.id === id ? {...task, completed: !task.completed} : task
        ))
        setTasks(updatedTask)
    }

    // For Deletion of Task
    const handleDelete = (id) => {
        const confirmDelete = confirm("Are you sure to Delete?")
        if (confirmDelete) {
            const updatedTask = tasks.filter((task) => task.id !== id);
            setTasks(updatedTask);
        }
    }

  return (
    <div>
        <h1>Todo App</h1>
        <TodoInput 
            onAddTask={handleAddTask}
            setNewTask={setNewTask}
            newTask={newTask} 
        />   
        <TodoList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete}/>
        
    </div>
  )
}

export default TodoApp