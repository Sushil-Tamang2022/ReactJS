import React, { useState } from 'react'
import IncreaseButton from './components/IncreaseButton'
import DecreaseButton from './components/DecreaseButton';
import ResetButton from './components/ResetButton';

const App = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount((prev) => prev + 1)
  }

  const handleDecrease = () => {
    if(count > 0) {
      setCount((prev => prev - 1))
    }
  }

  const handleReset = () => {
    setCount(1)
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h1>{count}</h1>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <IncreaseButton onIncrease={handleIncrease}>
        </IncreaseButton>
        <DecreaseButton onDecrease={handleDecrease}>
        </DecreaseButton>
        <ResetButton onReset={handleReset}>
        </ResetButton>
      </div>
      


    </div>
  )
}

export default App