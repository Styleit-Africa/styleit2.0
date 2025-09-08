import Image from '@/components/global/Image'
import { postImages } from '@/static/data'
import { useAuth } from '@/store/useAuth'
import React from 'react'

const MyPostCards = ({posts}) => {
    const {user} = useAuth()
  return (
          <div>
                    {
                                user.role === 'designer'?
                                <div className='flex gap-4 flex-row flex-wrap justify-center xl:justify-start'>
                    {posts.map(post=>{
                        return(
                            <div key={post.id} className='basis-[47%] lg:basis-[30%] xl:basis-[24%] h-[250px] relative'>
                                <Image src={postImages[0]} className='rounded-2xl w-full h-full' />
                                {/* <Image src={} className='rounded-2xl w-full h-full' /> */}
                                <p className='absolute bottom-0 px-8 py-3 text-md font-[700] bg-gray-300 opacity-[0.8] rounded-xl'>{post.postTitle}</p>
                            </div>
                        )
                    })}
                </div>:   <div className='flex gap-4 flex-row flex-wrap justify-center xl:justify-start'>
                    {posts.map(post=>{
                        return(
                            <div key={post.id} className='basis-[47%] lg:basis-[30%] xl:basis-[24%] h-[250px] relative'>
                                <Image src={post.imagelikedUrl} className='rounded-2xl w-full h-full' />
                                <p className='absolute bottom-0 px-8 py-3 text-md font-[700] bg-gray-300 opacity-[0.8] rounded-xl'>{post.post}</p>
                            </div>
                        )
                    })}
                </div>
                    
                }
          </div>
  )
}

export default MyPostCards