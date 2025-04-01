import React from 'react'
import CreatorDetails from './creator/CreatorDetails'
import MyPost from './MyPost'
import { useAuthService } from '@/store/useAuthService'
import profileImage from '@/images/profile_i.png'
import EditProfileForm from '@/components/global/EditProfileForm'

const Profile = () => {
  const{user} = useAuthService(state=>state)
  return (
    <>
    {
      user.role === 'client' ?
      (
        <EditProfileForm isEditable={false} title="Profile"/>
      ):(
        <div className='my-12  mx-4 xl:mx-0'>
         <CreatorDetails/>
      <MyPost/>
      </div>
      )
    }
    </>
  )
}

export default Profile