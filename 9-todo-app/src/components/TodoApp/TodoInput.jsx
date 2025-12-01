import React from 'react'
// input, add button
const TodoInput = ({ newTask, onAddTask, setNewTask }) => {
  return (
    <div>
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} type='text' placeholder='Enter your task'/>
        <button onClick={onAddTask}>Add</button>
    </div>
  )
}

export default TodoInput