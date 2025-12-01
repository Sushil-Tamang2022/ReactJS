import React from 'react'

const places = ["Kathamndu", "Pokhara", "Khumbu", "Chitwan National Park"]
const Places = () => {
  return (
    <div>
        <h1>List of Beautiful Places</h1>
        <ul>{places.map((place, idx) => (
            <li key={idx}>{place}</li>
        ))}</ul>
    </div>
  )
}

export default Places