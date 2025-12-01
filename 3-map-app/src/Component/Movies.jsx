import React from 'react'

const movies = ["Kismat",
    "Jire",
    "Jerry",
    "RamSaili"]
const Movies = () => {
  return (
    <div>
        <h1>List of Movies</h1>
        {movies.map((movie, idx) => (
            <li key={idx}>{movie}</li>
        ))}
    </div>
  )
}

export default Movies