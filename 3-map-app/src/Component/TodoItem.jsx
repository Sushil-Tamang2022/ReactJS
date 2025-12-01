import React from 'react'

const TodoItem = ({ task }) => {
  return (
    <div>
        <h1>I am a Component</h1>
        <li>{task}</li>
    </div>
  )
}

export default TodoItem