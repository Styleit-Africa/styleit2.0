import { useGlobalStore } from '@/store/global/useGlobal';
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarLinks = ({link}) => {
const {setIsNavbarOpened} = useGlobalStore();

  return (
    <li className='mt-1 text-sidebar capitalize text-[0.97rem] hover:text-primary transition-all duration-150'   onClick={()=>setIsNavbarOpened()}>
            {/* <NavLink to={link.route} className={({isActive})=>isActive ? 'w-full border-b-[2px] border-primary':''}>{link.name}</NavLink>  */}
            <NavLink to={link.route} className={({isActive})=>isActive ? 'w-full bordder-b-[2px] text-primary':''}>{link.name}</NavLink> 
        </li>
  )
}

export default NavbarLinks