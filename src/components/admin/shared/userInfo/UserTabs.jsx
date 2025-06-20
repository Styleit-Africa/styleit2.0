import { Button } from '@/components/ui/button'
import React from 'react'

const UserTabs = ({currentTab,handleTabs}) => {
    const role = 'creator'
  return (
    <div>
         <div className='flex mx-auto md:ml-0 pb-5 gap-4 w-[95%] overflow-x-auto md:w-[max-content] overflow-auto'>
            <Button className={`px-6 md:px-10 py-6 shadow-none capitalize text-md md:text-lg text-lightGray rounded-md bg-sidebar 
                ${currentTab === 'profile'&&'bg-primary text-white' } `} onClick={()=>handleTabs('profile')}>my profile</Button>
            <Button className={`px-6 md:px-10 py-6 shadow-none capitalize text-md md:text-lg text-lightGray rounded-md bg-sidebar 
                ${currentTab === 'loginDetails'&&'bg-primary text-white' } `} onClick={()=>handleTabs('loginDetails')}>login details</Button>
               {
                role === 'creator'&& <Button className={`px-6 md:px-10 py-6 shadow-none capitalize text-md md:text-lg text-lightGray rounded-md bg-sidebar 
                    ${currentTab === 'ratingsAndReviews'&&'bg-primary text-white' } `} onClick={()=>handleTabs('ratingsAndReviews')}>ratings and reviews</Button>
               }
        </div>
        
    </div>
  )
}

export default UserTabs