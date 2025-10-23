import React from 'react'
import Image from '../Image'
import like from '../../../images/like.png'
import shareIcon  from '../../../images/share.png'
import message from '../../../images/message.png'
import Cookies from 'js-cookie'
import axios from 'axios'
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
// import { useGlobalStore } from '@/store/global/useGlobal'

const PostActivities = (activitiesData) => {
  const {post,share,comments,isCommentOpened,
    setIsCommentOpened,likePost,setPostId} = activitiesData

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
    
    const handleShare = ()=>{
      share.setIsShared(true)
    }


    const handleComment = ()=>{
      // setIsCommentOpened(!isCommentOpened)
      setPostId(post.id)
    }
  return (
    <div className='flex justify-between text-primary my-3'>
        <div className='flex gap-[0.1rem] items-center hover:cursor-pointer' onClick={()=>handleLike(post.id)}>
            <p className='text-xs'>{post.likes_Count}</p>
            <Image src={like} className='w-4 h-4'/>
        </div>
        <div  data-testid="toggle-comment-button" className='flex gap-[0.1rem] items-center hover:cursor-pointer' onClick={handleComment}>
            <p className='text-xs'>{comments?.length}</p>
            <Image src={message} className='w-4 h-4'/>
        </div>
        <div className='flex gap-[0.1rem] items-center  hover:cursor-pointer' onClick={handleShare}>
            <p className='text-xs'>{post.shares_Count}</p>
            <Image src={shareIcon} className='w-3 h-2'/>
        </div>
    </div>
  )
}

export default PostActivities