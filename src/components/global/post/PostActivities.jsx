import React from 'react'
import Image from '../Image'
import like from '../../../images/like.png'
import shareIcon  from '../../../images/share.png'
import message from '../../../images/message.png'
import Cookies from 'js-cookie'
import axios from 'axios'
import { QueryClient, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAuth } from '@/store/useAuth'
import { ThumbsDown, ThumbsUp } from 'lucide-react'
// import { useGlobalStore } from '@/store/global/useGlobal'

const PostActivities = (activitiesData) => {
  const {post,share,comments,likePost,setPostId} = activitiesData
    const {user} = useAuth();
    console.log(user.role)

        const queryClient = useQueryClient();
        const {mutate} = useMutation({
            mutationFn:likePost,
          onMutate:async(id)=>{
            await queryClient.cancelQueries(['trending'])
            //the data contains two array of user id
            const updateLikeId = (post)=>{
              console.log(post,'post')
              if(user.role == 'designer'){
                if(post.creator_id_likes.includes(user.designer_id)){
                  post.likes_count - 1
                  post.creator_id_likes.filter(id=>id !== user.designer_id)
                }else{
                  post.creator_id_likes.push(user.designer_id)
                  post.likes_count + 1
                }
              }else{
                if(post.client_id_likes.includes(user.id)){
                  post.client_id_likes.filter(id=>id !== user.id)
                  post.likes_count - 1
                }else{
                  post.client_id_likes.push(user.designer_id)
                  post.likes_count + 1
                }
              }
            }
            const previousPosts = queryClient.getQueryData(['trending'])
            queryClient.setQueryData(['trending'],(postData)=>{
              const pages = postData.pages.map(page=>{
                page.posts.map(post=>{
                  updateLikeId(post)
                  //  post.creator_id_likes.push(user.designer_id)
                  // return page
                })
              })
              console.log(postData)
              return {
                ...postData,pages
              }
            })
            return {previousPosts}
          }, onSettled:()=>{
              queryClient.invalidateQueries(['trending'])
            }
        })

      const handleLike = async(id)=>{
        mutate(id)
    }
    
    const handleShare = ()=>{
      share.setIsShared(true)
    }


    const handleComment = ()=>{
      setPostId(post.id)
    }
  return (
    <div className='flex justify-between text-primary my-3'>
          
          {/* client like buttons */}
        {
          user.role === 'client'&&<div>
            {
             post.client_id_likes.includes(user.id)?<div className='flex gap-[0.1rem] items-center hover:cursor-pointer' onClick={()=>handleLike(post.id)}>
            <p className='text-xs'>{post.likes_Count}</p>
          <Image src={like} className='w-4 h-4 rotate-180'/>
        </div>:<div className='flex gap-[0.1rem] items-center hover:cursor-pointer' onClick={()=>handleLike(post.id)}>
            <p className='text-xs'>{post.likes_Count}</p>
            <Image src={like} className='w-4 h-4'/>
        </div>
            }
          </div>
        }

          {/* designer like buttons */}


        {
          user.role === 'designer'&&<div>
            {
             post.creator_id_likes.includes(user.designer_id)?<div className='flex gap-[0.1rem] items-center hover:cursor-pointer' onClick={()=>handleLike(post.id)}>
            <p className='text-xs'>{post.likes_Count}</p>
          <Image src={like} className='w-4 h-4 rotate-180'/>
        </div>:<div className='flex gap-[0.1rem] items-center hover:cursor-pointer' onClick={()=>handleLike(post.id)}>
            <p className='text-xs'>{post.likes_Count}</p>
            <Image src={like} className='w-4 h-4'/>
        </div>
            }
          </div>
        }
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