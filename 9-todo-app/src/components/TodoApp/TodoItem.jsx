import React from 'react'

const TodoItem = ({ task, onToggle, onDelete }) => {
  return (
    <div>
        <li 
          style={{
            textDecoration: task.completed ? "line-through" : "none",
            fontSize: "20px"
          }}
          >
          {task.text}<button onClick={() => onToggle(task.id)}>✅</button>
          <button onClick={() => onDelete(task.id)}>❌</button></li>
    </div>
  )
}

export default TodoItem