import React from 'react'

const IncreaseButton = ({ onIncrease }) => {
  return (
    <div>
        <button onClick={onIncrease}>Increase</button>
    </div>
  )
}

export default IncreaseButton