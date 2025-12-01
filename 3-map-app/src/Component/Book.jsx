import React from 'react'

const books = [
{ id: 101, title: "React Basics", author: "John" },
{ id: 102, title: "JavaScript Guide", author: "Mina" },
{ id: 103, title: "CSS Secrets", author: "Laxman" },
];

const Book = () => {
  return (
    <div>
        <h2>List of Books</h2>
        <ul>
            {books.map((book) => (
                <li key={book.id}>
                    bookTitle: {book.title} bookAuthor: {book.author}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Book