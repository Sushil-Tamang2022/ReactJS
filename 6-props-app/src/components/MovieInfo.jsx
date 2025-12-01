import React from 'react'

const MovieInfo = ({ movie }) => {
    const { name, director, year } = movie;
  return (
    <div>
        <h1>Movie Information</h1>
        <h2>MovieName: {name}</h2>
        <h2>MovieDirector: {director}</h2>
        <h2>Movie Released Year: {year}</h2>
    </div>
  )
}

export default MovieInfo