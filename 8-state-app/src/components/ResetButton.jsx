import React from 'react'

const ResetButton = ({ onReset }) => {
  return (
    <div>
        <button onClick={onReset}>Reset</button>
    </div>
  )
}

export default ResetButton