import React from 'react'

const Celsius = ({ onCelsiusChange, celsius }) => {
  return (
    <div>
        <label>Enter in Celsius </label>
        <input onChange={(e) => onCelsiusChange(e.target.value)} placeholder='Enter in celsius' value={celsius}/>
    </div>
  )
}

export default Celsius