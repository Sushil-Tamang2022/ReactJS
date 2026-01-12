import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Posts from './pages/Posts';
const postLoader = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
}
const router = createBrowserRouter([
  {
    path: "/posts",
    element: <Posts />,
    loader: postLoader
  }
])
const App = () => {
  return (
    <div>
      <h1>Loader</h1>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
