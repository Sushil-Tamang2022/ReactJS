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
    <div style={{ backgroundColor: currentTheme.color, width: "100vw", height: "100vh", margin: "0px 10px" }}>
      <h1>Multi Theme App</h1>
      <h3>Select your theme</h3>
      <select onChange={handleTheme} value={currentTheme.name}>
        {themes.map((theme) => (
          <option key={theme.name} value={theme.name}>{theme.name}</option>
        ))}
      </select>
      <h1>About Nepal</h1>
      <p>Nepal is a beautiful landlocked country located in South Asia, known for its rich culture, natural beauty, and friendly people. It lies between India and China and is home to the majestic Himalayan mountain range, including Mount Everest, the highest peak in the world. Nepal has diverse landscapes, from snowy mountains in the north to fertile plains in the south. The country is also famous for its ancient temples, UNESCO World Heritage Sites, and vibrant festivals that reflect its deep religious and cultural traditions. Despite being small in size, Nepal is rich in biodiversity and offers unique experiences for travelers and nature lovers.</p>
      <p>Nepal is a beautiful landlocked country located in South Asia, known for its rich culture, natural beauty, and friendly people. It lies between India and China and is home to the majestic Himalayan mountain range, including Mount Everest, the highest peak in the world. Nepal has diverse landscapes, from snowy mountains in the north to fertile plains in the south. The country is also famous for its ancient temples, UNESCO World Heritage Sites, and vibrant festivals that reflect its deep religious and cultural traditions. Despite being small in size, Nepal is rich in biodiversity and offers unique experiences for travelers and nature lovers.</p>
      <p>Nepal is a beautiful landlocked country located in South Asia, known for its rich culture, natural beauty, and friendly people. It lies between India and China and is home to the majestic Himalayan mountain range, including Mount Everest, the highest peak in the world. Nepal has diverse landscapes, from snowy mountains in the north to fertile plains in the south. The country is also famous for its ancient temples, UNESCO World Heritage Sites, and vibrant festivals that reflect its deep religious and cultural traditions. Despite being small in size, Nepal is rich in biodiversity and offers unique experiences for travelers and nature lovers.</p>
    </div>
  )
}

export default App