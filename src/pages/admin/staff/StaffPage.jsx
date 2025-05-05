import Avatar from '@/components/global/Avatar'
import { complaints } from '@/static/adminData'
import { ActivitySquareIcon, BanIcon, LockKeyholeOpen, TrashIcon } from 'lucide-react'
import React from 'react'

const StaffPage = () => {
  return (
    <section className='font-lato font-[700]'>
        <div className='flex gap-6'>
            <div className='flex-[0.25]'>
                <ul>
                    <li className='flex items-center gap-4 mt-5'>
                        <Avatar data={{complaint:{name:'uthman sulaiman'},section:3}}/>
                        <p className='capitalize'>abdullahi sulaiman</p>
                    </li>
                    <li className='flex items-center gap-4 mt-5'>
                        <Avatar data={{complaint:{name:'fatai saliu'},section:3}}/>
                        <p className='capitalize'>fatai saliu</p>
                    </li>
                    <li className='flex items-center gap-4 mt-5'>
                        <Avatar data={{complaint:{name:'ismail fatimat'},section:3}}/>
                        <p className='capitalize'>ismail fatimat</p>
                    </li>
                    <li className='flex items-center gap-4 mt-5'>
                        <Avatar data={{complaint:{name:'Ahmad yusuf'},section:3}}/>
                        <p className='capitalize'>Ahmad yusuf</p>
                    </li>
                    <li className='flex items-center gap-4 mt-5'>
                        <Avatar data={{complaint:{name:'uthman sulaiman'},section:3}}/>
                        <p className='capitalize'>uthman sulaiman</p>
                    </li>
                </ul>
            </div>

            <div className='flex-[0.75]  flex  gap-6 flex-wrap'>
                <div className='basis-[30%] bg-green-500 pt-12f p-6 rounded-lg'>
                    <div className=' justify-between text-white capitalize  text-lg'>
                        <div className='flex justify-between '>
                            <p>active times</p> 
                            <p className='text-lg'>5</p>                  
                        </div>
                        <ActivitySquareIcon className='mx-auto mt-4 w-[60px] h-[60px] text-4xl'/>
                    </div>  
                </div>
                <div className='basis-[30%] bg-red-500  pt-12f p-6 rounded-lg'>
                    <div className=' justify-between text-white capitalize  text-lg'>
                        <div className='flex justify-between '>
                            <p>banned users</p> 
                            <p className='text-lg'>5</p>                  
                        </div>
                        <BanIcon className='mx-auto mt-4 w-[60px] h-[60px] text-4xl'/>
                    </div>  
                </div>
                <div className='basis-[30%] bg-black pt-12f p-6 rounded-lg'>
                    <div className=' justify-between text-white capitalize  text-lg'>
                        <div className='flex justify-between '>
                            <p>suspended users</p> 
                            <p className='text-lg'>5</p>                  
                        </div>
                        <TrashIcon className='mx-auto mt-4 w-[60px] h-[60px] text-4xl'/>
                    </div>  
                </div>
                <div className='basis-[30%] bg-blue-600 pt-12f p-6 rounded-lg'>
                    <div className=' justify-between text-white capitalize  text-lg'>
                        <div className='flex justify-between '>
                            <p>reset passwords</p> 
                            <p className='text-lg'>5</p>                  
                        </div>
                        <LockKeyholeOpen className='mx-auto mt-4 w-[60px] h-[60px] text-4xl'/>
                    </div>  
                </div>
                <div className='basis-[30%] bg-red-500 pt-12f p-6 rounded-lg'>
                    <div className=' justify-between text-white capitalize  text-lg'>
                        <div className='flex justify-between '>
                            <p>banned users</p> 
                            <p className='text-lg'>5</p>                  
                        </div>
                        <ActivitySquareIcon className='mx-auto mt-4 w-[60px] h-[60px] text-4xl'/>
                    </div>  
                </div>
                <div className='basis-[30%] bg-red-500 pt-12f p-6 rounded-lg'>
                    <div className=' justify-between text-white capitalize  text-lg'>
                        <div className='flex justify-between '>
                            <p>banned users</p> 
                            <p className='text-lg'>5</p>                  
                        </div>
                        <ActivitySquareIcon className='mx-auto mt-4 w-[60px] h-[60px] text-4xl'/>
                    </div>  
                </div>
            </div>
        </div>
    </section>
  )
}

export default StaffPage