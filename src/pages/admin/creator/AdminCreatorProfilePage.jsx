import LastSeen from '@/components/admin/shared/LastSeen';
import UserProfile from '@/components/admin/shared/profile/UserProfile';
import React from 'react'

const AdminCreatorProfilePage = () => {
  return (
    <section  data-testid="admin-creator-profile">
        <LastSeen/>
        <UserProfile/>
    </section>
  )
}

export default AdminCreatorProfilePage