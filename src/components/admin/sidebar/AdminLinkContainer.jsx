import { adminLinks } from '@/static/adminData'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import AdminLink from './AdminLink'

const AdminLinkContainer = () => {
  return (
    <ul className='mt-9'>
        {
            adminLinks.map(link=>{
                return(
                    <AdminLink key={link.id} link={link} />
                )
            })
        }
    </ul>
  )
}

export default AdminLinkContainer