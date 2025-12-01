import React, { useState } from 'react'

const App = () => {
  const [showPassword, setShowPassword] = useState(false)

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  }
  return (
    <div>
      <input type={showPassword ? "text" : "password"}/>
      <button onClick={handleTogglePassword}>Show/Hide</button>
    </div>
  )
}

export default App