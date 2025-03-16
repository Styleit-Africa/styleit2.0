import Image from '@/components/global/Image'
import { myPosts } from '@/static/data'
import React from 'react'

const MyPost = () => {
  return (
    <section className='mt-20'>
        <div className='flex gap-4 flex-row flex-wrap justify-center xl:justify-start'>
            {myPosts.map(post=>{
                return(
                    <div key={post.id} className='basis-[47%] lg:basis-[30%] xl:basis-[24%] h-[250px] relative'>
                        <Image src={post.imageUrl} className='rounded-2xl w-full h-full' />
                        <p className='absolute bottom-0 px-8 py-3 text-md font-[700] bg-gray-300 opacity-[0.8] rounded-xl'>{post.title}</p>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default MyPost