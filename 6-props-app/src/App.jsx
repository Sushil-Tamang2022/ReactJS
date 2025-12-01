import React from 'react'
import UserInformation from './components/UserInformation'

const user = {
  name: "Sita",
  age: 23,
  country: "Nepal"
}
const App = () => {
  return (
    <div>
      <UserInformation {...user}/>
    </div>
  )
}

export default App