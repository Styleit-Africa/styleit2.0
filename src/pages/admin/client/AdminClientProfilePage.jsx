import LastSeen from '@/components/admin/shared/LastSeen';
import UserProfile from '@/components/admin/shared/profile/UserProfile';
import UserInformation from '@/components/admin/shared/userInfo/UserInformation';
import React from 'react'

const AdminClientProfilePage = () => {
  return (
    <section  data-testid="admin-creator-profile">
        <LastSeen/>
        <UserInformation/>
    </section>
  )
}

export default AdminClientProfilePage