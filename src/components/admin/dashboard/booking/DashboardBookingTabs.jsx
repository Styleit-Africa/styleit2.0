import { bookingDashboardTabs } from '@/static/adminData'
import { useClientStore } from '@/store/useClient'
import React, { useState } from 'react'

const DashboardBookingTabs = () => {
    const [currentIndex,setCurrentIndex] = useState(0)
    const {filterBookings} = useClientStore(state=>state);

    const updateTab =(tab,index)=>{
        setCurrentIndex(index)
        if(tab === 'cancelled'){
            filterBookings('declined')
        }else if(tab === 'in progress'){
            filterBookings('accepted')
        }else{
            filterBookings(tab)
        }
    }
  return (
        <div className='flex mb-9'>
            {
                bookingDashboardTabs.map((tab,index)=>{
                    return(
                        <div className='flex-[0.4]'>
                            <button  className={`w-full border-b-[3px] border-sidebar
                                text-lightGray capitalize py-2
                                ${index === currentIndex?'border-primary border-b-primary text-primary':'text-sidebar' }`}
                                onClick={()=>updateTab(tab,index)}
                                >{tab}</button>
                        </div>
                    )
                })
            }
        </div>
      )
}

export default DashboardBookingTabs