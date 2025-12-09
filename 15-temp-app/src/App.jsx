import React, { useState } from 'react'
import Celsius from './components/Celsius'
import Fahrenheit from './components/Fahrenheit'

const App = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  // Fahrenheit to Celsius
  const toCelsius = (fahrenheit) => {
    const num = Number(fahrenheit);
    return (((num - 32) * 5) / 9).toFixed(2);
  };

  // Celsius to Fahrenheit
  const toFahrenheit = (celsius) => {
    const num = Number(celsius);
    return ((num * 9) / 5 + 32).toFixed(2)
  }

  return (
    <div>
      <h1>Celsius Fahrenheit Converter</h1>
      <Celsius />
      <Fahrenheit />
    </div>
  )
}

export default App