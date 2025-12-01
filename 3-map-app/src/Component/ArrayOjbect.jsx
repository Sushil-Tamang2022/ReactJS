import React from 'react'

const users = [
    { id: 1, name: "Mandip" },
    { id: 2, name: "Sita" },
    { id: 3, name: "Hari" },
]
const ArrayOjbect = () => {
  return (
    <div>
        <h2>Username</h2>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default ArrayOjbect