import React from 'react'

const MovieDetails = ({ title, author, year }) => {
  return (
    <div>
        <h3>{title} by {author} was publishd in {year}</h3>
    </div>
  )
}

export default MovieDetails