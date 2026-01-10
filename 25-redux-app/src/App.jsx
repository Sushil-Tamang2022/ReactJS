import React from 'react'
import { useDispatch, useSelector } from "react-redux"

const App = () => {
  // React state from the redux
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Plain Redux</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch({type: "INCREMENT"})}>Add</button>
    </div>
  )
}

export default App
