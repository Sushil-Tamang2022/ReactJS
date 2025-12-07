import React, { useState } from "react";
// newNote - string "Do Homework"
// {id, text, completed}
// const fruits = ['apple', 'banana', 'mango', 'orange'];
// console.log(fruits.includes('apple'))

// const word = "aeroplane"
// console.log(word.includes('ae'))
const App = () => {
  // states
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("")
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setNewNote(e.target.value);
  };

  // add note
const handleAddNote = () => {
  const note = {
    id: Date.now() + Math.random(),
    text: newNote,
  };
  setNotes([...notes, note])
  setNewNote("")
}

// Delete Note
const handleDelete = (id) => {
  const updatedNote = notes.filter(note => note.id !== id);
  setNotes(updatedNote);
}

// Edit Start
const handleEdit = (id, text) => {
  setEditingId(id)
  setEditingText(text)
}

// cancelEdit
const handleEditCancel = () => {
  setEditingId(null);
  setEditingText("")
}

// Save Edit
const handleSaveEdit = (id) => {
  const updatedNote = notes.map(note => id === note.id ? {...note, text: editingText} : note)
  setNotes(updatedNote)
  setEditingId(null)
  setEditingText("")
}

// Search
const filteredNote = notes.filter((note) => (
  note.text.toLowerCase().includes(search.toLowerCase())
))

// console.log(search)


// Render elements
// console.log(editingText)




  return (
    <div>
      <h1>Note App</h1>
      <input value={newNote} onChange={handleChange} type="text" placeholder="Enter the note" />
      <button onClick={handleAddNote}>Add</button>
      <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search note" />
      <button>Search</button>
      
      <ul>
        {filteredNote.map((note) => (
          <li key={note.id}>
          {editingId === note.id ? (
            <div>
              <input onChange={(e => setEditingText(e.target.value))} value={editingText} type="text"/>
              <button onClick={() => handleSaveEdit(note.id)}>Save</button>
              <button onClick={handleEditCancel}>Cancel</button>
            </div>
            
          ) : (
            <div>
              {note.text} <button onClick={() => handleEdit(note.id, note.text)}>Edit</button> <button onClick={() => handleDelete(note.id)}>Delete</button>
            </div>
          )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
