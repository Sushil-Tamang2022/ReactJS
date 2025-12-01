import React from 'react'

const AdminPanel = ({ isAdmin }) => {
    if (!isAdmin) {
        return null
    }
  return (
    <div>
        <h1>Welcome to the Admin Page</h1>
    </div>
  )
}

export default AdminPanel