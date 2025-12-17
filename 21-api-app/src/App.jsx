import React, { useEffect, useState } from 'react'

const App = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setloading] = useState(true);
  const [error, seError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error("Network Error");
        return response.json();
      })
    .then((data) => {
      setUsers(data);
      console.log(data)
      setloading(false);
    })
    .catch((err) => {
      seError(err.message);
      setloading(false);
    })
  }, [])

  const filterUsers = users.filter((user) =>
     user.name.toLowerCase().includes(search.toLowerCase()) 
  )

  return (
    <div>
      <h1>User Search</h1>
      <input onChange={(e) => setSearch(e.target.value)} type="text" />
      <ul>
        {filterUsers.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default App