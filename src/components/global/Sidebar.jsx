import { sidebarLinks, userProfile } from '@/static/data'
import React, { useState } from 'react'
import Image from './Image'
import User from './User'
import { Button } from '../ui/button'
import userEdit from '../../images/user-edit_2.png'
import icon from '../../images/icon.png'
import logout from '../../images/logout.png'
import profileImage from '../../images/profile_i.png'
import Followers from './Followers'
import { Link } from 'react-router-dom'
import SidebarLinks from './SidebarLinks'
import BankDetails from './BankDetails'
import { useAuthService } from '@/store/useAuthService'
import { useGlobalStore } from '@/store/global/useGlobal'




const Sidebar = () => {

    const {user} = useAuthService(state=>state)
    const {setIsSidebarOpened} = useGlobalStore(state=>state);

  return (
    <div className='w-72 ml-auto p-5 md:pb-9 rounded-l-xl bg-sidebar  font-lato relative z-50 cursor-auto '>
        
        <User
            userProps={{
                    name:{userProfile,fullName:true,styles:'text-white'},
                    indicator:{isIndicator:true,styles:'h-2 w-2 absolute bottom-2 right-0 rounded-full bg-green-300 '},
                    image:{profileImage,styles:'w-[50px] h-[50px]'},
                    container:' flex items-center gap-4 font-[700] text-lg font-lato'
            }}/>

            <Link to={`/${user.role==='creator'?'creator':'client'}/profile/edit`} className='block' onClick={()=>setIsSidebarOpened()}>
            <div className='flex justify-between text-lightGray text-md border-b pt-3 pb-2  border-lgray mt-5'>
                <div className='flex items-center gap-3'>
                    <Image src={icon} className="w-6 h-6" />
                    <p>Online</p>
                </div>
                <div className="flex gap-2 bg-primary text-white rounded-xl px-4 py-2">
                <Image src={userEdit} className="w-6 h-6"  />
                    Edit
                </div>
            </div>
            </Link>
        <ul className="  font-lato textmd text-lightGray ">
           {
            user.role==='creator'&&
            <li className='flex items-center gap-4 pl-2 md:pl-1 md:border-b pb-3 pt-4  border-lgray '> 
                <Followers followers={80} styles="text-md md:text-lg"/>
                <p className=''>Followers</p>
            </li> 
           }
            <li className='flex items-center gap-4 pl-2 md:pl-1 md:border-b py-3 border-lgray '> 
                <Followers followers={42} styles="text-md md:text-lg"/>
                <p className=''>Following</p>
            </li>
            <SidebarLinks role={user.role} links={user.role==='creator'?sidebarLinks.creator:sidebarLinks.client}/>
    </ul>
    <div className='flex items-center pl-1.5 border-b py-2 border-lgray '>
        <Image src={logout} className="w-6 h-6" />
        <Button className="-indent-1 bg-sidebar hover:bg-sidebar shadow-none text-lg text-red-600">Logout</Button>
    </div>
    <BankDetails userProfile={userProfile}/>
    </div>
  )
}

export default Sidebar