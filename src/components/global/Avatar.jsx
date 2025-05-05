import React, { memo } from 'react'
import Image from './Image'
import { bgColors } from '@/static/adminData'


const Avatar = ({data}) => {
    const {complaint,section} = data
    const name = complaint.name.split(' ').length > 0 ? 
    `${complaint.name.split(' ')[0].slice(0,1)} ${complaint.name.split(' ')[1].slice(0,1)} `: complaint.name.split(' ')[0].slice(0,1)
    const randomIndex = Math.floor(Math.random()*bgColors.length)
    return (
   <div>
        {
            complaint.image ?(
                <Image src={complaint.image} className="w-[40px] h-[40px] rounded-full" />
            ):
            (
            <div className={`w-[40px] py-2 uppercase rounded-full text-center ${section === 3 && bgColors[randomIndex]} ${section === 2 && 'bg-primary'} ${section === 1 &&'bg-sidebar'}   text-md text-white`}>
                {name}
            </div>
            )
        }
   </div>
  ) 
}

export default memo(Avatar)