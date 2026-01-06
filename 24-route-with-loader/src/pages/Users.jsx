import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Users = () => {
    const users = useLoaderData();
  return (
    <div className='bg-slate-900 rounded-sm text-white w-[700px] m-auto text-center p-5 mt-6'>
      <h1 className='text-2xl'>This is User Page</h1>
      {users.map((user) => (
        <li className='list-none border rounded-sm p-2 m-2 bg-white text-black' key={user.id}>
            {user.name} - {user.email}
        </li>
      ))}
    </div>
  )
}

export default Users
