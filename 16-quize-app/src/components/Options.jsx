import React from 'react'

const Options = ({ options, onAnswerCheck }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {options.map(option => (
            <button key={option.id} onClick={() => onAnswerCheck(option.text)}>{option.text}</button>
        ))}
    </div>
  )
}

export default Options