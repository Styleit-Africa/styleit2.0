import MyPost from '@/components/dashboard/profile/MyPost'
import React from 'react'

const LikedPosts = () => {
  return (
    <section  data-testid="liked-posts" className='container px-4 md:px-0 pb-28'>
        <MyPost/>
    </section>
  )
}

export default LikedPosts