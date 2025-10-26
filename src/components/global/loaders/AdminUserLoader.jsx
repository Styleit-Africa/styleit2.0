import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const AdminUserLoader = () => {
  return (

    <div>
        {
             Array(10).fill(0).map((_,index)=>{
                return (
                    <ul className=' hidden md:flex items-center flex-row justify-between capitalize w-full font-[700] p-3 '>
                
                            <div className='flex items-center gap-3 '>
                            <Skeleton  className="w-[50px] h-[50px] rounded-full"></Skeleton>
                            <Skeleton className='w-24 h-5'></Skeleton>
                            </div>
                            <Skeleton className='basis-[15%] h-5'></Skeleton>
                            <Skeleton className='basis-[15%] h-5'></Skeleton>
                            <Skeleton className='basis-[15%] h-5'></Skeleton>
                            <Skeleton className='basis-[15%] h-5'></Skeleton>
                            <Skeleton className='basis-[15%] h-5'></Skeleton>
                    </ul>
                )
             })
        }
    </div>
    
  )
}

export default AdminUserLoader

