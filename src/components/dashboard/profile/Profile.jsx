import React from 'react'
import CreatorDetails from './creator/CreatorDetails'
import MyPost from './MyPost'

const Profile = () => {
  return (
    <div className='my-12  mx-4 xl:mx-0'>
      <CreatorDetails/>
      <MyPost/>
    </div>
  )
}

export default Profile