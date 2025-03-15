import React, { useState } from 'react'
import profileImage from '../../../images/profile_i.png'
import User from '../User'
import postImage from '../../../images/post_i.png'
import { userProfile } from '@/static/data'
import Indicator from '../Indicator'
import PostDescription from './PostDescription'
import send from '../../../images/send.png'
import PostActivities from './PostActivities'
import { Input } from '@/components/ui/input'
import Image from '../Image'
import CommentContainer from '../comment/CommentContainer'

const PostCard=({post}) => {
    const [isCommentOpened,setIsCommentOpened]=useState(false)
  return (
    <div className='max-w-[480px] mx-auto mt-10'>
                 
    <div className='border border-gray-200 rounded-2xl  text-sm  p-3.5'>
        <div className='flex justify-between items-center '>
        <User
        userProps={{
                name:{userProfile,fullName:false,styles:'text-black font-[500]'},
                indicator:{isIndicator:false,styles:'h-2 w-2 absolute bottom-2 right-0 rounded-full bg-green-300 '},
                image:{profileImage,styles:'w-[35px] h-[35px]'},
                container:' flex items-center gap-3 font-[700] text-lg font-lato'
            }}/>

            <div className='relative mt-3'>
                <Indicator className='h-1 w-1 absolute bottom-0 right-0 rounded-full bg-black'/>
                <Indicator className='h-1 w-1 absolute bottom-2 right-0 rounded-full bg-black'/>
                <Indicator className='h-1 w-1 absolute bottom-4 right-0 rounded-full bg-black'/>

            </div>

        </div>
        <PostDescription description={post.description}/>
        <Image src={postImage} className="mt-4" />
        <PostActivities
         comments={post.comments} 
         isCommentOpened={isCommentOpened} 
         setIsCommentOpened={setIsCommentOpened}  />
        <div className='relative'>
        <Input type="text" className="h-12 rounded-2xl border border-gray-200  focus:outline-none"/>
        <Image src={send} className='absolute top-2.5 right-2.5 w-7 h-7'/>
        </div>
    </div>
    {
        isCommentOpened&&<CommentContainer  userProfile={userProfile} postComments={post.comments} />
    }
</div>
  )
}

export default PostCard