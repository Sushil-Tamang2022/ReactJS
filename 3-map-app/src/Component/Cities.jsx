import React from 'react'

const cities = ["Kathmandu", "Bhaktapur", "Lalitpur", "Sindhupalchwok"]
const Cities = () => {
  return (
    <div>
    <h1>List of Citiess</h1>
      {cities.map((city, idx) => (
        <li key={idx}>{city}</li>
      ))}
    </div>
  )
}

export default Cities