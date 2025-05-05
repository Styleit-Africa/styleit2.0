import UserProfile from '@/components/admin/shared/profile/UserProfileCard';
import React from 'react'
import { useParams } from 'react-router-dom'

const AdminClientProfilePage = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <section className='px-5' data-testid="admin-creator-profile">
        <UserProfile/>
    </section>
  )
}

export default AdminClientProfilePage