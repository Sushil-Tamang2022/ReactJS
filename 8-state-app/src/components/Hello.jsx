import React from 'react'

const Hello = ({ onSubmit }) => {
  return (
    <div>
        <h1>OnClick</h1>
        <button onClick={onSubmit}>Click Me!</button>
    </div>
  )
}

export default Hello