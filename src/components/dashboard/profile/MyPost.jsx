import Image from '@/components/global/Image'
import PostListLoader from '@/components/global/loaders/PostListLoader'
import postImage from '@/images/post_i.png'
import { useAuth } from '@/store/useAuth'
import React from 'react'
import MyPostCards from './MyPostCards'
import { Link } from 'react-router-dom'

const MyPost = ({postData}) => {
    const {isError,isLoading,posts} = postData
    const {user} = useAuth();
    console.log(user)
  return (
    <section className='mt-20'>
       {
           isLoading ?
               <PostListLoader/>
        :(
           <div className='font-lato'>
            {
                isError?<h1>try again later</h1>:(
                 <div>
                    {
                        user.role === 'designer'&&<div>
                            {
                                 posts.length === 0 ?<div className='text-center border border-gray-200 py-16 rounded-md'>
                                    <h1 className='text-2xl text-gray-600'> You currently have no posts</h1>
                                    <p className='text-gray-500 mt-3 text-md'> get started by  creating a post <Link to='/creator/posts' className='text-primary'>on your post page</Link></p>
                                </div>: <div>
                                    <MyPostCards posts={posts} />
                                </div>
                            }
                        </div>
                    }
                    {
                        user.role === 'client'&&<div >
                            {
                                posts.length === 0 ?<div className='text-center border border-gray-200 py-16 max-w-[800px] mx-auto rounded-md'>
                                    <h1 className='text-2xl text-gray-600'> You currently have no liked posts</h1>
                                    <p className='text-gray-500 mt-3 text-md'> get started by liking a <Link to='/trending' className='text-primary'>trending post</Link></p>
                                </div>: <div>
                                    <MyPostCards posts={posts} />
                                </div>
                            }
                        </div>
                    }
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