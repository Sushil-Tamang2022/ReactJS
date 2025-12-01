import React from 'react'

const UserNames = ( props ) => {
  return (
    <div>
        <h1>Hello {props.name} Your age is {props.age}</h1>
    </div>
  )
}

export default UserNames