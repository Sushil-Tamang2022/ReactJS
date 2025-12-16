import React, { useReducer, useState } from 'react'
const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {
                id: Date.now() + Math.random(),
                text: action.payload
            }]
        case "DELETE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        default:
            return state
    }
}



const App = () => {
  const [text, setText] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, []);

  const handleAdd = () => {
    dispatch({ type: "ADD_TODO", payload: text });
    setText("");
}

  console.log(todos);
  return (
    <div>
        <h1>ToDO App</h1>
        <input value={text} type='text' onChange={(e) => setText(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>{todo.text}<button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>Delete</button></li>
            ))}
        </ul>
    </div>
  )
}

export default App