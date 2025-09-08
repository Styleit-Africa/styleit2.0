import AdminActivities from '@/components/admin/admin/AdminActivities'
import Admins from '@/components/admin/admin/Admins'
import Avatar from '@/components/global/Avatar'
import { admins, period } from '@/static/adminData'
import React, { useState } from 'react'

const SuperAdminPage = () => {
    const [currentAdmin,setCurrentAdmin] = useState(0)
  return (
    <section className='font-lato font-[700]'>
        <div className='flex md:hidden items-center gap-2  mb-8 w-[max-content]'>
                    <Avatar data={{complaint:{name:admins[currentAdmin].name},section:1}}/>
                    <h1 className='capitalize'>{admins[currentAdmin].name}</h1>
                </div>
                               
        <div className='flex gap-6 items-start justify-between '>
            <div className=' md:flex-[0.25]'>
               <Admins currentAdmin={currentAdmin} setCurrentAdmin={setCurrentAdmin}/>
            </div>

           <div className='md:flex-[0.75]'>
                <AdminActivities currentAdmin={currentAdmin}/>
           </div>
        </div>
    </section>
  )
}

export default SuperAdminPage