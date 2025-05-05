import CreatorProfile from '@/components/admin/creator/profile/CreatorProfile';
import React from 'react'
import { useParams } from 'react-router-dom'

const AdminCreatorProfilePage = () => {
  const {id} = useParams();
  console.log(id)
  return (
    <section  data-testid="admin-creator-profile">
        <CreatorProfile/>
    </section>
  )
}

export default AdminCreatorProfilePage