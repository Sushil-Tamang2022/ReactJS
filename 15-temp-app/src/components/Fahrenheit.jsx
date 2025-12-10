import React from 'react'

const Fahrenheit = ({ onFarenheitChange, fahrenheit }) => {
  return (
    <div>
        <label>Enter in Fahrenheit </label>
        <input onChange={(e) => onFarenheitChange(e.target.value)} type='text' placeholder='Enter in Fahrenheit' value={fahrenheit}/>
    </div>
  )
}

export default Fahrenheit