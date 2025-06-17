import UserProfile from '@/components/admin/shared/profile/UserProfile';
import React from 'react'

const AdminClientProfilePage = () => {
  return (
    <section  data-testid="admin-creator-profile">
        <LastSeen/>
        <UserProfile/>
    </section>
  )
}

export default AdminClientProfilePage