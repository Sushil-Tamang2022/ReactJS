import React, { useState } from 'react'

const themes = [
  { name: "Light", background: "white", color: "black"},
  { name: "Dark", background: "black", color: "white"},
  { name: "Solarized", background: "#fdf6e3", color: "#657b83"},
  { name: "Pink", background: "#ffe4e1", color: "#ff1493"},
  { name: "Blue", background: "#e0f7fa", color: "#00796b"},
  { name: "Green", background: "#e8f5e9", color: "#2e7d32"}
];

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes[0]);

  const handleTheme = (e) => {
    const selectedTheme = themes.filter((theme) => (
      theme.name === e.target.value
    ));
    console.log(selectedTheme[0]);
    setCurrentTheme(selectedTheme[0]);
  };

  return (
    <div>
      <h1>Multi Theme App</h1>
      <select onChange={handleTheme} value={currentTheme.name}>
        {themes.map((theme) => (
          <option key={theme.name} value={theme.name}>{theme.name}</option>
        ))}
      </select>
    </div>
  )
}

export default App