import React, { useState } from 'react'
import profile from '../../../images/profile.png'
import profile_h from '../../../images/profile_h.png'
import receipt from '../../../images/receipt-edit.png'
import receipt_h from '../../../images/receipt-edit_h.png'
import calendar_h from '../../../images/calendar-edit_h.png'
import calendar from '../../../images/calendar-edit.png'
import Image from '@/components/global/Image'
import { NavLink, useLocation } from 'react-router-dom'


const LinkTabs = () => {
    const location = useLocation();
  return (
    <div className='flex-1 md:flex-initial'>
        <ul className='flex justify-between md:gap-20 items-center '> 
              <NavLink to={`/creator/profile`} className={ ({isActive})=>`flex  items-center md:gap-1 capitalize  ${isActive && "text-green-400"}`}>
                <Image src={location.pathname.endsWith('profile') ? profile_h:profile} className='w-[20px] h-[20px]' alt="" />
                    <span className='blofck'>profile</span>
              </NavLink>
              <NavLink to={`/creator/posts`} className={ ({isActive})=>`flex justify-between items-center md:gap-1 capitalize  ${isActive && "text-green-400"}`}>
                <Image src={location.pathname.endsWith('posts') ? receipt_h:receipt} className='w-[20px] h-[20px]' alt="" />
                    <span className='block'>posts</span>
              </NavLink>
              <NavLink to={`/creator/bookings`} className={ ({isActive})=>`flex justify-between items-center md:gap-1 capitalize  ${isActive && "text-green-400"}`}>
                <Image src={location.pathname.endsWith('bookings') ? calendar_h:calendar} className='w-[20px] h-[20px]' alt="" />
                    <span className='block'>bookings</span>
              </NavLink>
        
    </ul>

       

    </div>
  )
}


export default LinkTabs