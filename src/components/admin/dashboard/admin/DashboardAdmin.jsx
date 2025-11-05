import React, { useState } from 'react'
import Admin from './Admins'
import AdminDashboardTabs from './AdminDashboardTabs'
import { dadmins } from '@/static/adminData'

const DashboardAdmin = () => {
      const [admins,setAdmins] = useState(dadmins)
  
  return (
    <div>
      <AdminDashboardTabs admins={admins} setAdmins={setAdmins}/>
      <div className='mt-5'>
        <Admin admins={admins} />
      </div>
    </div>
  )
}

export default DashboardAdmin