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
import { Button } from '@/components/ui/button'


const PostCard=({post,follow}) => {
    const [isCommentOpened,setIsCommentOpened]=useState(false)
    const [isReportOpened,setIsReportOpened]=useState(false)
  return (
    <div className='max-w-[480px] mx-auto mt-10'>
                 
    <div className='relative border border-gray-200 rounded-2xl  text-sm  p-3.5'>
        {
            isReportOpened&&<div data-testid="options" className='absolute right-6 top-7 rounded-3xl bg-transparent  backdrop-filter backdrop-blur-md text-white pl-5 py-5 w-[200px] '>
            <p className='capitalize text-lg cursor-pointer text-red-500 font-[500]'>delete</p>
            <p className='capitalize text-lg cursor-pointer text-yellow-500 font-[500]'>report</p>
        </div>
        }
        <div className='flex justify-between items-center '>
        <User
        userProps={{
                name:{userProfile,fullName:false,styles:'text-black font-[500]'},
                indicator:{isIndicator:false,styles:'h-2 w-2 absolute bottom-2 right-0 rounded-full bg-green-300 '},
                image:{profileImage,styles:'w-[35px] h-[35px]'},
                container:' flex items-center gap-3 font-[700] text-lg font-lato'
            }}/>

           
            {

            <div className='flex gap-3s items-center '  >
                {
                follow&&
                <Button className="text-primary -mt-1.5  p-0 bg-white hover:bg-white shadow-none block text-lg">Follow</Button>
                }

                <div data-testid="options-icon" className='relative mt-s6 w-[25px] self-start h-[29px] cursor-pointer' onClick={()=>setIsReportOpened(!isReportOpened)}>
                <Indicator className='h-1 w-1 absolute bottom-2 right-0 rounded-full bg-black'/>
                <Indicator className='h-1 w-1 absolute bottom-4 right-0 rounded-full bg-black'/>
                <Indicator className='h-1 w-1 absolute bottom-6 right-0 rounded-full bg-black'/>

                </div>
            </div>
            }

        </div>
        <PostDescription description={post.description}/>
        <Image src={postImage} className="mt-4" />
        <PostActivities
         comments={post.comments} 
         isCommentOpened={isCommentOpened} 
         setIsCommentOpened={setIsCommentOpened}  />
        <div className='relative'>
        <Input type="text" className="h-12 rounded-2xl border border-gray-200  focus-visible:ring-0"/>
        <Image src={send} className='absolute top-3.5 md:top-2.5 right-2.5 w-5 h-5 md:w-7 md:h-7 '/>
        </div>
    </div>
    {
        isCommentOpened&&<CommentContainer  userProfile={userProfile} postComments={post.comments} />
    }
</div>
  )
}

export default PostCard