import React, { useContext } from 'react'
import { UserContext } from '../App'

const Home = () => {
    const { user } = useContext(UserContext);
    return (
    <div>
        <h1>Home</h1>
        {user ? (
            <h1>Welcome {user} you can seee this page.</h1>
        ) : (
            <h1>Please logIN first</h1>
        )}
    </div>
    )
}

export default Home