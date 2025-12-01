import React from 'react'

const MovieDetails = ({ title, director, year, rating }) => {
  return (
    <div style={{ border: "5px solid brown", borderRadius: "5px", margin: "20px", padding: "10px"  }}>
        <h1>{title}</h1>
        <h1>{director} - {year}</h1>
        <p>{rating}</p>
    </div>
  )
}

export default MovieDetails