import Bookings from '@/components/dashboard/bookings/Bookings'
import Post from '@/components/dashboard/post/Post'
import Profile from '@/components/dashboard/profile/Profile'
import React from 'react'

const PostPage = () => {
  return (
    <section data-testid="posts-page"  className='container pb-16'>
        <Post/>
    </section>
  )
}

export default PostPage