import React, { useContext } from 'react'
import { UserContext } from '../App';

const Navbar = () => {
    const {user, setUser} = useContext(UserContext);
    return (
    <div>
        <h1>Navbar</h1>
        {user ? (
            <button onClick={() => setUser(null)}>LogOut</button>
        ) : (
            <button onClick={() => setUser("Ram")}>Login</button>
        )}
    </div>
  )
}

export default Navbar