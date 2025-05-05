import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const AdminLink = ({link}) => {
    const [isChildrenOpened,setIsChildrenOpened] = useState(false)
    const {pathname} = useLocation()
    console.log(pathname.split('http://localhost:5173'))
    const path = pathname.split('http://localhost:5173')
  return (
    <li className={` text-lg text-grayd-400 ${isChildrenOpened ? "items-start":"items-stcenterrt"}  border-b-[1px] border-b-gray-400  mb-4 pb-3 px-4 capitalize text-left`}>
        <div className='flex justify-between'>
            <Link to={`/admin/${link.name}`} className={`block ${path ==  `/admin/${link.name}` &&'text-primary'}`}>{link.name}</Link>
            <ChevronRight className={`${isChildrenOpened ? 'rotate-90':'rotate-0'} "bg-sidebar  "`} onClick={()=>setIsChildrenOpened(!isChildrenOpened)}/>
        </div>
        {
            isChildrenOpened && <ul>
            {
                link.links.map(item=>{
                    return(
                        <Link to={`/admin/${link.name}/${item}`}  className={`ml-5 mt-2 block text-lightGray ${path ==  `/admin/${link.name}/${item}` &&'text-primary'}`}>{item}</Link>

                    )
                })
            }
        </ul>
        }
      </li>
  )
}

export default AdminLink