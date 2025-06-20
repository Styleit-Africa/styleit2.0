import { ActivitySquareIcon, BanIcon, LockKeyholeOpen, Trash2, TrashIcon } from 'lucide-react'
import React from 'react'

const StaffActivityIcon = ({activity}) => {
    switch(activity.activityName){
        case 'banned users':
            return  <TrashIcon className='mx-auto mt-4 md:w-[60px] w-[40px] md:h-[60px] h-[40] text-4xl'/>
        case 'reset password':
            return  <LockKeyholeOpen className='mx-auto mt-4 md:w-[60px] w-[40px] md:h-[60px] h-[40] text-4xl'/>
        case 'active times':
            return  <ActivitySquareIcon className='mx-auto mt-4 md:w-[60px] w-[40px] md:h-[60px] h-[40] text-4xl'/>
    }
    return <Trash2 className='mx-auto mt-4 md:w-[60px] w-[40px] md:h-[60px] h-[40] text-4xl'/>    
}

export default StaffActivityIcon