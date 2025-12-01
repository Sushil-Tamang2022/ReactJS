import React from 'react'

const DecreaseButton = ({ onDecrease }) => {
  return (
    <div>
        <button onClick={onDecrease}>Decrease</button>
    </div>
  )
}

export default DecreaseButton