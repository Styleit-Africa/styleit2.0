import CreatePost from '@/components/global/post/CreatePost'
import PostContainer from '@/components/global/post/PostContainer'
import React from 'react'

const Post = () => {
  return (
    <section className='px-4 xl:px-0'>
      <CreatePost />
      <PostContainer follow={true} />
    </section>
  )
}

export default Post