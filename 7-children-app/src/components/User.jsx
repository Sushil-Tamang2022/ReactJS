import React from 'react'

const User = ({ name, age, city }) => {
  return (
    <div style={{ border: "5px solid blue", margin: "20px", padding: "10px", color: "green"  }}>
        <h2>{name} - {age} - {city}</h2>
    </div>
  )
}

export default User