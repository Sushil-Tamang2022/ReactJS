import React, { createContext, useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
// creation

const UserContext = createContext();
const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <h1>Login System</h1>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Home />
      </UserContext.Provider>
    </div>
  )
}

export default App
export {UserContext}