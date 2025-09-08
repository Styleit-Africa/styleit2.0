import Avatar from '@/components/global/Avatar'
import { admins } from '@/static/adminData'
import React, { useState } from 'react'

const Admins = ({currentAdmin,setCurrentAdmin,superAdmin=true}) => {
    const [open,setOpen] = useState(true)
    const handleMouse = position =>{
        if(position === 'enter'){
            setOpen(true)
        }else{
            setOpen(false)
        }
    }
  return (
        <ul className=' shadow-md md:shadow-none p-5 rounded-md'
                 onMouseLeave={()=>handleMouse('leave')} onMouseEnter={()=>handleMouse('enter')}
        >
            {
                admins.map((admin,index)=>{
                    return (
                            <li className={`flex items-center gap-4 mb-7 md:mb-4 md:hover:bg-sidebar md:hover:text-lightGray cursor-pointer
                 p-3 rounded-md md: shadow-md ${index===currentAdmin&&'bg-sidebar text-lightGray' }`}
                onClick={()=>setCurrentAdmin(index)}>
                    <Avatar data={{complaint:{name:admin.name},section:3}} />
                    {
                        superAdmin ? <p className={`capitalize text-sm md:text-md font-[700] ${open ? 'block':'hidden'} sm:block`} 
                        >{admin.name}</p>:
                        <p className='capitalize text-sm md:text-md font-[700]'>{admin.name}</p>
                    }
                </li>
                    )
                })
            }
        </ul>
  )
}

export default Admins