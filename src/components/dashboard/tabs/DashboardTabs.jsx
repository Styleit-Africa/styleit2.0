import React, { useState } from 'react'

import Post from '../post/Post'
import Image from '@/components/global/Image'
import { NavLink } from 'react-router-dom'
import { dashboardTabs } from '@/static/data'


const DashboardTabs = ({setCurrentTab,currentTab}) => {
  return (
    <div className='flex-1 md:flex-initial'>
{/* //         <div className='flex justify-between md:gap-12 '> 
//         {dashboardTabs.map((tab,index)=>{
//           return(
//             <div key={tab.id} onClick={()=>setCurrentTab(index+1)} className='flex gap-2 items-center cursor-pointer'>
//               <Image src={index+1===currentTab?tab.activeIcon:tab.icon} className='w-[20px] h-[20px]' alt="" />
//               <h3 className={`capitalize  ${index+1 === currentTab && "text-green-400"}`}>{tab.name}</h3>
//             </div>
//           )
//         })} */}
{/* //     </div> */}


    </div>
  )
}

export default DashboardTabs