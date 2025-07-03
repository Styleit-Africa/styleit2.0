import { userDashboardTabs } from '@/static/adminData'
import React, { useState } from 'react'

const UserDashboardTabs = () => {
    const [currentIndex,setCurrentIndex] = useState(0)
  return (
   <div>
         <div className='flex '>
        {
            userDashboardTabs.map((tab,index)=>{
                return(

                    <div className='flex-[0.4]'>
                        <button  className={`w-full border-b-[3px] border-sidebar text-lightGray capitalize py-2
                         ${index === currentIndex?'border-primary border-b-primary text-primary':'text-sidebar' }`}
                         onClick={()=>setCurrentIndex(index)}
                         >{tab.name}</button>
                    </div>
                )
            })
        }
    </div>
    {
        userDashboardTabs[currentIndex].component
    }
   </div>
  )
}

export default UserDashboardTabs