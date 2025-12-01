import React from 'react'
import ProfilePic from './ProfilePic'
import UserName from './UserName'
import UserBio from './UserBio'

const ProfileCard = () => {
  return (
    <div>
        <ProfilePic />
        <UserName />
        <UserBio />
    </div>
  )
}

export default ProfileCard