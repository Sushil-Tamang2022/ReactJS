import React from 'react'

const messageCount = 3
 
const App = () => {
  return (
    <div>
      <h1>Message Count</h1>
        {messageCount > 0 && <h1>New Message Received</h1>}
    </div>
  )
}

export default App