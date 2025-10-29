import TrendingContents from '@/components/dashboard/TrendingContents';
import Image from '@/components/global/Image';
import { CommandIcon, MoreHorizontal, X } from 'lucide-react';
import React, { useState } from 'react'
import postImage from '@/images/post_i.png'
import profile from '@/images/profile_i.png'
import { useParams } from 'react-router-dom'
import like from '@/images/like.png'
import shareIcon  from '@/images/share.png'
import message from '@/images/message.png';
import send from '../../../images/send.png'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipProvider } from '@radix-ui/react-tooltip';
import ImageGallery from '../imageGallery/ImageGallery';
import CommentContainer from '../comment/CommentContainer';
import { months } from '@/static/adminData';
import { Input } from '@/components/ui/input';
import { usePost } from '@/store/usePost';
import SharePostContainer from './SharePostContainer';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useComment } from '@/store/useComment';

const ViewPostDetails = ({post,setPostId}) => {
        const {isShared,setIsShared,likePost} = usePost();
        const {setComment,storeComment,comment} = useComment()
        const [isOver,setIsOver] = useState(false)
        const handleOverFlow = (value)=>{
          setIsOver(value)
        }

        const date = new Date(post.created_at);
        const month = months[date.getMonth()]
        const d = date.getDate();
        const hour = date.getHours()
        const minute = date.getMinutes()
        console.log(month)
        const handleShare = ()=>{
            setIsShared(true)
      }

        const queryClient = useQueryClient();
        const {mutate} = useMutation({
            mutationFn:likePost,
          onSuccess:()=>{
              queryClient.invalidateQueries('trending')
          }
        })

      const handleLike = async(id)=>{
        mutate(id)
    }


     const {mutate:commentMutation} = useMutation({
            mutationFn: storeComment,
            onMutate:async()=>{
              await queryClient.cancelQueries({queryKey:['trending']})

              const previousPosts = queryClient.getQueryData(['trending']);
              queryClient.setQueryData(['trending'],(old)=>{
                const pages = old.pages.map(page=>{
                  page.posts.map(post=>{
                    post.comments.push({body:comment,client_reply:'',creator_reply:''})
                  })
                })
                return {
                  ...old,
                  pages
                }
              })
              return {previousPosts}

            },
            onSettled:()=>{
              queryClient.invalidateQueries(['trending'])
            }
        })
        const handleComment = async(id)=>{
                commentMutation(id)
        }
        

  return (
     <div  className={` font-lato py-6  flex justify-center items-center px-8 lg:px-0 bg-[rgba(0,0,0,0.1)]  z-40  fixed top-0  overflow-hidden  transition-all duration-300 bottom-0  right-0 w-full `}>
        <div className='bg-white w-[810px]  shadow-lg rounded-lg ' 
        onMouseEnter={()=>handleOverFlow(true)} onMouseLeave={()=>handleOverFlow(false)}>
          {/* header */}
           <div className="border-b-[1px] border-gray-300  px-4">
             <div className='max-w-[440px] ml-auto  flex items-center justify-between'>
                <h1 className='font-bold text-xl capitalize'>{post?.creator?.firstName||'name'}'s Post</h1>
          <X className='cursor-pointer h-16 w-16 scale-[0.5] transition-all duration-300 hover:scale-[0.7]'
           onClick={()=>setPostId(null)}/>
            </div>
           </div>

          {/* body */}
          <div className={`${isOver ? 'p-5 pr-1':'p-5'}`}>
           <div className={`h-[400px] w-full ${isOver ? 'overflow-y-auto':'overflow-hidden'} `}>

             <div className="flex items-center justify-between">
             <div className='flex gap-2 items-center '>
            <div className='w-[45px] h-[45px] rounded-full border-[2px] p-0.5 border-primary'>
            <Image src={profile} className='rounded-full w-full h-full' />
           </div>

           <div>
            <h2 className='capitalize text-md font-bold'> {post?.creator?.firstName||'first'}  {post?.creator?.lastName||'last'}</h2>
            <p className='text-md'>{month} {d} at {hour}:{minute} AM</p>
           </div>
           </div>
            
           <TooltipProvider >
                        <Tooltip className='z-50'>
            <TooltipTrigger asChild>
                    <MoreHorizontal className='cursor-pointer text-xl'/>
            </TooltipTrigger>
            <TooltipContent className='absolute left-[-120px]  bg-white shadow-lg max-w-[300px]'>
                <p className='capitalize cursor-pointer'>view profile</p>
            </TooltipContent>
            </Tooltip>
           </TooltipProvider>
           </div>
          <div className='mt-5'>
                <h3 className='text-md font-bold'>{post.title}</h3>
                <p className='mb-3'>{post.content}</p>
                {
          post?.img&&post?.img?.length !== 0&&<ImageGallery _images={post.img}/>
        }
          </div>

   <div className='flex justify-between text-primary my-3'>
        <div className='flex gap-[0.1rem] items-center hover:cursor-pointer'  onClick={()=>handleLike(post.id)} >
            <p className='text-xs'>{post.likes_Count}</p>
            <Image src={like} className='w-4 h-4'/>
        </div>
        <div  data-testid="toggle-comment-button" className='flex gap-[0.1rem] items-center hover:cursor-pointer' onClick={()=>(setIsCommentOpened(!isCommentOpened))}>
            <p className='text-xs'>{post.Comment_Count}</p>
            <Image src={message} className='w-4 h-4'/>
        </div>
        <div className='flex gap-[0.1rem] items-center' onClick={handleShare}>
            <p className='text-xs'>{post.shares_Count}</p>
            <Image src={shareIcon} className='w-3 h-2 hover:cursor-pointer'/>
        </div>

    </div>
    <h1 className='text-lg capitalize font-[500] mt-3'>comments ({post.Comment_Count})</h1>
        {
          post?.comments.length === 0 ? <div className='text-center mt-3'>
                  <h1 className='font-[500] text-2xl'>Be the first to comment on this post</h1>
                  <CommandIcon className='w-52 h-52 mx-auto text-pink-200'/>
          </div>:
          <CommentContainer userProfile={post.creator} post={post} />
        }

           </div>
          {/* footer */}
             <div className={`relative ${isOver&&'pr-4'} mt-3`}>
        <Input type="text" onChange={(e)=>setComment(e.target.value)}  className="h-16 rounded-3xl border border-gray-200  focus-visible:ring-0"/>
        <Image src={send} onClick={()=>handleComment(post.id)} className={` absolute top-3.5 md:top-4 right-3 ${isOver&&'right-7'} w-5 h-5 md:w-7 md:h-7 `}/>
        </div>
          </div>
        </div>
        {
      isShared&&<SharePostContainer setIsShared={setIsShared} post={post}/>
    }
    </div>
  )
}

export default ViewPostDetails