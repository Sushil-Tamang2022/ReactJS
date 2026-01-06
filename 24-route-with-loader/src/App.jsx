import React from 'react'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Users from './pages/Users';
const userLoader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  return response.json();
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
    loader: userLoader
  }
])

const App = () => {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
