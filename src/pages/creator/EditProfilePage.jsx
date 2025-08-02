import React from 'react'
import EditProfileForm from '@/components/global/EditProfileForm'

const EditProfilePage = () => {

  
  return (
    <section data-testid="edit-profile-page"  className='font-lato  container'>
      <EditProfileForm isEditable={true} title="Edit Profile"/>
    </section>
  )
}

export default EditProfilePage