import { Link, NavLink } from 'react-router-dom'
import Image from './Image'
import { useGlobalStore } from '@/store/global/useGlobal'
import React from 'react'
import { useAuthService } from '@/store/useAuthService'

const SidebarLinks = ({links,role})=>{
      const {setIsSidebarOpened} = useGlobalStore(state=>state)
    
    return(
        <>
         {
                links.map(link=>{
                    return(
                        <li key={link.id}  className='flex items-center gap-3.5 text-md md:text-lg pl-1 md:border-b border-lgray py-3 '>
                            <Image src={link.icon} className="w-6 h-6" />
                            <NavLink  to={`/${role==='client'?'client':'creator'}${link.route}`} className={({isActive})=>`${isActive && 'text-primary'}`} onClick={()=>setIsSidebarOpened()}>{link.name}</NavLink>
                        </li>
                    )
                })
            }
        </>
    )
}

export default SidebarLinks