import React from 'react'

const Restaurant = ({ name, cusine, rating, location }) => {
  return (
    <div style={{ border: "5px solid brown", borderRadius: "5px", margin: "20px", padding: "10px" }}>
        <h1>{name}</h1>
        <h3>{cusine} - {rating}</h3>
        <h3>{location}</h3>
    </div>
  )
}

export default Restaurant