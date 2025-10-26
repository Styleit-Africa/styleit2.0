import { admins, period } from '@/static/adminData'
import React from 'react'
import StaffActivityIcon from '../superAdmin/staff/StaffActivityIcon'
import AdminPeriodActivities from './AdminPeriodActivities'

const AdminActivities = ({currentAdmin}) => {
  return (
     <div className=''>
              <AdminPeriodActivities/>
                <div className=' flex flex-col sm:flex-row  gap-6 flex-wrap'>
                {
                    admins[currentAdmin].activities.map(activity=>{
                        return (
                            <div className={` basis-[30%] lg:basis-[40%] xl:basis-[30%]  cursor-pointer
                                 ${activity.activityName == 'suspended users'&&'bg-black '} ${activity.activityName == 'banned users'&&'bg-red-600 '}
                               ${activity.activityName == 'active times'&&'bg-green-600 '} ${activity.activityName == 'reset password'&&'bg-blue-600 '}  pt-12f p-6 rounded-lg`}>
                    <div className=' justify-between text-white capitalize  text-lg'>
                        <div className='flex justify-between '>
                            <p className='text-sm md:text-lg'> {activity.activityName}</p> 
                            <p className='text-sm md:text-lg'>{activity.activity}</p>                  
                        </div>
                      
                      <StaffActivityIcon activity={activity}/>
                    </div>  
                </div>
                        )
                    })
                }
            </div>
          
            </div>

  )
}

export default AdminActivities