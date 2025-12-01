import React from 'react'

const UserInformation = ({ name, age, country }) => {
  return (
    <div>
        <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        <h1>Country: {country}</h1>
    </div>
  )
}

export default UserInformation