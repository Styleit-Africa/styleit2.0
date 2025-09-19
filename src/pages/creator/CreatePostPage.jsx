import PostForm from '@/components/dashboard/profile/creator/PostForm'
import React from 'react'

const CreatePostPage = () => {
  return (
        <section className='p-8'>
            {/* <div className=' bg-white h-[520px] mx-auto px-7 py-4  shadow-sm shadow-gray-400 rounded-md w-[600px] '> */}
                {/* <h1 className='text-center font-[700] text-2xl md:text-3xl'>Create post</h1> */}
                <PostForm/>

            {/* </div> */}
        </section>
  )
}

export default CreatePostPage