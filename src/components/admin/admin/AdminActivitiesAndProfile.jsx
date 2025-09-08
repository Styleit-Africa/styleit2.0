import React, { useState } from 'react'
import AdminActivities from './AdminActivities'
import UserProfile from '../shared/profile/UserProfile'
import { Button } from '@/components/ui/button'
import LastSeen from '../shared/LastSeen'

const AdminActivitiesAndProfile = () => {
    const [currentTab,setCurrentTab] = useState('profile')
    
    const handleAdminTabs =tab=>{
        setCurrentTab(tab)
    }
  return (
    <div>
        <div className='flex flex-col-reverse items-start md:flex-row justify-between md:items-center'>
       <div className='flex  gap-4  w-[max-content]'>
            <Button className={`px-10 py-6 shadow-none capitalize text-lg text-lightGray rounded-md bg-sidebar 
                ${currentTab === 'profile'&&'bg-primary text-white' } `} onClick={()=>handleAdminTabs('profile')}>my profile</Button>
            <Button className={`px-10 py-6 shadow-none capitalize text-lg text-lightGray rounded-md bg-sidebar 
                ${currentTab === 'activies'&&'bg-primary text-white' } `} onClick={()=>handleAdminTabs('activies')}>my activities</Button>
       </div>
        <div className='mb-4 md:mb-0'>
            <LastSeen/>
        </div>
            
        </div>
       {
         currentTab === 'profile' ? <UserProfile/> : <div className='mt-7'><AdminActivities currentAdmin={1}/></div>
       }

    </div>
  )
}

export default AdminActivitiesAndProfile