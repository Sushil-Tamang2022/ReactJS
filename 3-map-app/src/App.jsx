import React from 'react'
import MapEx from './Component/MapEx'
import Movies from './Component/Movies'
import Cities from './Component/Cities'
import Places from './Component/Places'
import ArrayOjbect from './Component/ArrayOjbect'
import Student from './Component/Student'
import Book from './Component/Book'
import Todo from './Component/Todo'
import TodoItem from './Component/TodoItem'


const todos = [
{ id: 1, task: "Do Homework", completed: true },
{ id: 2, task: "Go to Gym", completed: false },
{ id: 3, task: "Read Book", completed: true },
];

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} task={todo.task}/>
        ))}
      </ul>
      
    </div>
  )
}

export default App



