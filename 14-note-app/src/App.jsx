import React, { useState } from "react";
// newNote - string "Do Homework"
// {id, text, completed}
const App = () => {
  // states
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("")

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
const handleEditCancel = (id) => {
  setEditingId(null);
  setEditingText("")
}



  return (
    <div>
      <h1>Note App</h1>
      <input value={newNote} onChange={handleChange} type="text" placeholder="Enter the note" />
      <button onClick={handleAddNote}>Add</button>
      <input type="text" placeholder="Search note" />
      <button>Search</button>
      
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
          {editingId === note.id ? (
            <div>
              <input value={editingText} type="text"/>
              <button>Save</button>
              <button onClick={() => handleEditCancel(note.id)}>Cancel</button>
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
