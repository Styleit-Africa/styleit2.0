import Avatar from '@/components/global/Avatar'
import React from 'react'

const Complainant = ({complaint,randomIndex}) => {
  return (
    <div className='flex items-start gap-4'>
       <Avatar data={{complaint,randomIndex}}/>
        
        <div>
            <div className='flex justify-between'>
            <h1 className='text-md font-[700] capitalize'>{complaint.name}</h1>
            <p>3hrs ago</p>
            </div>
            <p className='mt-2'>{complaint.message.substring(0,30)}...</p>

        </div>
</div>
  )
}

export default Complainant