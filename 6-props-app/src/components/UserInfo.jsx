import React from 'react'

const UserInfo = (props) => {
    // console.log(props)
    const {firstName, lastName, email} = props.user;
  return (
    <div>
        <h1>{firstName} {lastName}.</h1>
        <h3>{email}</h3>
    </div>
  )
}

export default UserInfo