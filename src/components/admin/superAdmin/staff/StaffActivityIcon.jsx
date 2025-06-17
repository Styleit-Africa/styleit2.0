import { ActivitySquareIcon, LockKeyholeOpen, Trash2, TrashIcon } from 'lucide-react'
import React from 'react'

const StaffActivityIcon = ({activity}) => {

    return (
      <div>
          {
               activity.activityName === 'banned users'&&<TrashIcon className='mx-auto mt-4 md:w-[60px] w-[40px] md:h-[60px] h-[40] text-4xl'/>
          }
          {
               activity.activityName === 'suspended users'&&<Trash2 className='mx-auto mt-4 md:w-[60px] w-[40px] md:h-[60px] h-[40] text-4xl'/> 
          }
          {
               activity.activityName === 'active times'&&<ActivitySquareIcon className='mx-auto mt-4 md:w-[60px] w-[40px] md:h-[60px] h-[40] text-4xl'/>
          }
          {
               activity.activityName === 'reset password'&& <LockKeyholeOpen className='mx-auto mt-4 md:w-[60px] w-[40px] md:h-[60px] h-[40] text-4xl'/>
          }
      </div>
    )

}

export default StaffActivityIcon