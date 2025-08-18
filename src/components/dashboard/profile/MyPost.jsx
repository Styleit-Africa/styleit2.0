import Image from '@/components/global/Image'
import PostListLoader from '@/components/global/loaders/PostListLoader'
import postImage from '@/images/post_i.png'
import React from 'react'

const MyPost = ({postData}) => {
    const {isError,isLoading,posts} = postData
  return (
    <section className='mt-20'>
       {
           isLoading ?
               <PostListLoader/>
        :(
           <div>
            {
                isError?<h1>try again later</h1>:(
                      <div className='flex gap-4 flex-row flex-wrap justify-center xl:justify-start'>
            {posts.map(post=>{
                return(
                    <div key={post.id} className='basis-[47%] lg:basis-[30%] xl:basis-[24%] h-[250px] relative'>
                        <Image src={postImage} className='rounded-2xl w-full h-full' />
                        <p className='absolute bottom-0 px-8 py-3 text-md font-[700] bg-gray-300 opacity-[0.8] rounded-xl'>{post.postTitle}</p>
                    </div>
                )
            })}
        </div>
                )
            }
           </div>
        )
       }
    </section>
  )
}

export default MyPost