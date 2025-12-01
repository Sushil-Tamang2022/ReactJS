import React from 'react'

const MapEx = () => {
    const languages = ["Nepali", "English", "Hindi", "Japanese"]
  return (
    <div>
        <h2>Another Example of Map Function</h2>
        <ul>
            {languages.map((lang, idx) => (
                <li key={idx}>{lang}</li>
            ))}
        </ul>
    </div>
  )
}

export default MapEx