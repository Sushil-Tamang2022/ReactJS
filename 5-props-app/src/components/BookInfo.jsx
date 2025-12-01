import React from 'react'

const BookInfo = ({ title, author, year }) => {
  return (
    <div>
      <h1>Book Info</h1>
        <h1>{title} by {author} was published in {year}.</h1>
    </div>
  )
}

export default BookInfo