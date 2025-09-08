import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const PostListLoader = () => {

  return (
        <div className='flex gap-4 flex-row flex-wrap justify-center xl:justify-start'>
        {
            Array(10).fill(0).map((post,index)=>{
           
                return <div className='basis-[47%] lg:basis-[30%] xl:basis-[24%] h-[200px] relative'> 
                     <Skeleton key={index} className="h-full w-full bg-gradient-to-tr from-primary to-sidebar " />
                     <Skeleton key={index} className="h-4 w-20 absolute bottom-0 px-8 py-3 text-md font-[700] bg-gray-300 opacity-[0.8] rounded-xl" />

                </div>
            })
        }
  </div>
  )
}

export default PostListLoader


