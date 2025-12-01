import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ tasks, onToggle, onDelete  }) => {
  return (
    <div>
        <ul>
            {tasks.map((task) => (
                <TodoItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </ul>
    </div>
  )
}

export default TodoList