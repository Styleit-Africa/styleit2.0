import React, { useEffect, useState } from 'react'
import PostContainer from '../../global/post/PostContainer'
import { userProfile } from "@/static/data"
import { useQuery } from '@tanstack/react-query'
import PostListLoader from '../../global/loaders/PostListLoader'
import Cookies from 'js-cookie'
import axios from 'axios'
import User from '@/components/global/User'
import Indicator from '@/components/global/Indicator'
import PostTitle from '@/components/global/post/PostTitle'
import PostActivities from '@/components/global/post/PostActivities'
import Image from '@/components/global/Image'
import PostDescription from '@/components/global/post/PostDescription'
import profileImage from '../../../images/profile_i.png'
import send from '../../../images/send.png'
import { Input } from '@/components/ui/input'
import { useGlobalStore } from '@/store/global/useGlobal'
import { Link } from 'react-router-dom'



const SearchedPosts = () => {

  const {userDashboardSearchData,searchPosts,searchCreators,posts} = useGlobalStore()

  useEffect(()=>{
    searchCreators()
    searchPosts()

  },[userDashboardSearchData])

  return (
   <div>
        {
          posts.length === 0 ? <div>
                <h1>No posts found</h1>
          </div>:
           posts.map(post=>(
            <Link to={`/trending/${post.id}/view`} key={post.id}>

                 <div className='max-w-[480px] mx-auto mt-10'>
   
    <div className='relative border border-gray-200 rounded-2xl  text-sm  p-3.5'>
     
        <div className='flex justify-between items-center '>
        <User
        userProps={{
                name:{userProfile:{fname:post.first_name,lname:post.last_name},fullName:false,styles:'text-black capitalize font-[500]'},
                indicator:{isIndicator:false,styles:'h-2 w-2 absolute bottom-2 right-0 rounded-full bg-green-300 '},
                image:{profileImage,styles:'w-[35px] h-[35px]'},
                container:' flex items-center gap-3 font-[700] text-lg font-lato'
            }}/>

           
            <div className='flex items-center '  >
                <div data-testid="options-icon" className='relative  w-[25px] self-sstart h-[29px] cursor-pointer'/>
                <Indicator className='h-1 w-1 absolute top-4 right-4 rounded-full bg-black'/>
                <Indicator className='h-1 w-1 absolute top-6 right-4 rounded-full bg-black'/>
                <Indicator className='h-1 w-1 absolute top-8 right-4 rounded-full bg-black'/>

                </div>
        </div>
        {/* <PostTitle title={post.postTitle}/> */}
        <PostTitle title={post.title}/>
        <PostDescription description={post.content}/>
        {
          // post?.img&&post?.img?.length !== 0&&<ImageGallery _images={post.img}/>
        }
        {/* <PostCardImages/> */}
        <PostActivities
         comments={post.Comment_count} 
         likePost={0}
         post={post} 
         isCommentOpened={false} 
         setIsCommentOpened={()=>{}}
        //  share={{isShared,setIsShared}} 
          />
        <div className='relative'>
        <Input type="text"   className="h-12 rounded-2xl border border-gray-200  focus-visible:ring-0"/>
        <Image src={send} className='absolute top-3.5 md:top-2.5 right-2.5 w-5 h-5 md:w-7 md:h-7 '
          /> 
        </div>
    </div>
</div>
            </Link>
           ))
        }
   </div>
  )
}

export default SearchedPosts