import React, { useState } from 'react'

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  return {
    count,
    increase,
    decrease,
    reset
  }
}
const App = () => {
  const {count, increase, decrease, reset} = useCounter(5);
  return (
    <div>
      {/* <h1>UseCounter Hook</h1> */}
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App
