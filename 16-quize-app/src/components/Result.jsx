import React from 'react'

const Result = ({ score, total }) => {
  return (
    <div>
    <h1>Thank you for completing Quize.</h1>
        <p>You got <strong>{score}</strong> out of <strong>{total}</strong></p>
    </div>
  )
}

export default Result