import PostListLoader from '@/components/global/loaders/PostListLoader'
import CreatePost from '@/components/global/post/CreatePost'
import PostContainer from '@/components/global/post/PostContainer'
import { sortByDate, sortItems } from '@/lib/utils'
import { useGlobalStore } from '@/store/global/useGlobal'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import React from 'react'

const Post = () => {
  const {postModal,setPostModal} = useGlobalStore(state=>state)
    const {data,isLoading,isError,error,isFetching} = useQuery({
        queryKey:['myPosts'],
        queryFn:async()=>await axios.get('https://styleitafrica.pythonanywhere.com/api/designer/profile',{
            headers:{
              Authorization:`Bearer ${Cookies.get('token')}`,
              'Content-Type': 'application/json',
              Accept:'application/json'
            }
          }),
          staleTime:1
        })
        console.log(data)
  return (
    <section className='px-4 xl:px-0'>
      <CreatePost />

      {
                data?.data?.posts?.length === 0&&<div>

                    
                </div>
      }

     
      {
          isLoading ?
               <PostListLoader/>:
               (
                <div>
                  {
                    data?.data?.posts?.length === 0 ? <div className="shadow-md max-w-[800px] mx-auto rounded-lg py-24 text-center text-xl mt-12 text-gray-400">
           Get started by creating posts to attract clients. <span className='text-primary cursor-pointer' onClick={()=>setPostModal()}>Create posts</span>
      </div>: <PostContainer data={data?.data}  follow={true} />
                  }
                </div>
               )
              
      }
    </section>
  )
}

export default Post
