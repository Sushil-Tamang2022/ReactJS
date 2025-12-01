import React from 'react'

const WeatherReport = ({ weather: {city, temperature, condition}} ) => {
  return (
    <div>
        <h1>Weather Details</h1>
        <h1>city: {city}</h1>
        <h1>temperature: {temperature}°C</h1>
        <h1>condition: {condition}</h1>
    </div>
  )
}

export default WeatherReport