import React from 'react'

const BookDetails = ({ title, author, pages }) => {
  return (
    <div>
        <h1>{title}</h1>
        <h1>{author}</h1>
        <h1>{pages}</h1>
    </div>
  )
}

export default BookDetails