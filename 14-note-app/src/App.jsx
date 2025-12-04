import React, { useState } from 'react'
// newNote - string "Do Homework"
// {id, text, completed}
const App = () => {
  const [newNote, setNewNote] = useState("")
  const [notes, setNotes] = useState([])
  return (
    <div>
      <h1>Note App</h1>
      <input type='text' placeholder='Enter the note'/>
      <button>Add</button>
      <input type='text' placeholder='Search note'/>
      <button>Search</button>
    </div>
  )
}

export default App