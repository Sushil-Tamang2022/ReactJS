import React from 'react'

const Student = () => {
    const students = [
    { id: 1, name: "Sita", age: 20 },
    { id: 2, name: "Hari", age: 22 },
    { id: 3, name: "Gita", age: 21 },
];

  return (
    <div>
      <h2>Student Lists</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>Name: {student.name} Age: {student.age}</li>
        ))}
      </ul>
        
    </div>
  )
}

export default Student