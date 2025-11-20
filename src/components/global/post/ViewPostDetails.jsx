import Image from '@/components/global/Image';
import { CommandIcon, MoreHorizontal, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import profile from '@/images/profile_i.png'
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
import PostLikeButton from './PostLikeButton';

const ViewPostDetails = ({post,setPostId}) => {
        const {isShared,setIsShared,likePost} = usePost();
        const commentInput = useRef(null)
        const {setComment,storeComment,comment} = useComment()
        const [isOver,setIsOver] = useState(false)
        const handleOverFlow = (value)=>{
          setIsOver(value)
        }
        console.log(post)

        const date = new Date(post.created_at);
        const month = months[date.getMonth()]
        const d = date.getDate();
        const hour = date.getHours()
        const minute = date.getMinutes()
        const handleShare = ()=>{
            setIsShared(true)
      }

        const queryClient = useQueryClient();
        const {mutate} = useMutation({
            mutationFn:likePost,
          // onSuccess:()=>{
          //     queryClient.invalidateQueries('trending')
          // },
           onMutate: async(id) => {
    await queryClient.cancelQueries(['trending'])
    
    const updateLikeId = (post) => {
      console.log('ui')
      // Only update the post that matches the clicked post ID
      if(post.id !== id) return post;
      
      if(user.role === 'designer') {
        if(post.creator_id_likes.includes(user.designer_id)) {
          // Unlike - remove user ID and decrease count
          post.creator_id_likes = post.creator_id_likes.filter(userId => userId !== user.designer_id)
          post.likes_Count = post.likes_Count - 1
        } else {
          // Like - add user ID and increase count
          post.creator_id_likes = [...post.creator_id_likes, user.designer_id]
          post.likes_Count = post.likes_Count + 1
        }
      } else {
        if(post.client_id_likes.includes(user.id)) {
          // Unlike
          post.client_id_likes = post.client_id_likes.filter(userId => userId !== user.id)
          post.likes_Count = post.likes_Count - 1
        } else {
          // Like
          post.client_id_likes = [...post.client_id_likes, user.id]
          post.likes_Count = post.likes_Count + 1
        }
      }
      return post
    }
    
    const previousPosts = queryClient.getQueryData(['trending'])
    
    queryClient.setQueryData(['trending'], (postData) => {
      if(!postData) return postData;
      
      const pages = postData.pages.map(page => {
        return {
          ...page,
          posts: page.posts.map(post => updateLikeId(post))
        }
      })
      
      return {
        ...postData,
        pages
      }
    })
    
    return { previousPosts }
  },
        })

      const handleLike = async(id)=>{
        console.log('old','old')
        mutate(id)
    }

    useEffect(()=>{
      if (commentInput?.current) {
        commentInput.current.focus()
      }
    },[])


    
    const {mutate: commentMutation, isPending} = useMutation({
    mutationFn:storeComment,
    onMutate: async({postId, commentText}) => {
        await queryClient.cancelQueries({queryKey: ['trending']})
        
        const previousPosts = queryClient.getQueryData(['trending']);
        
        queryClient.setQueryData(['trending'], (old) => {
            if (!old || !old.pages) return old;
            
            return {
                ...old,
                pages: old.pages.map(page => ({
                    ...page,
                    posts: page.posts.map(p => {
                        if (p.id === postId) {
                            return {
                                ...p,
                                Comment_Count: p.Comment_Count + 1,
                                comments: [
                                    ...p.comments,
                                    {
                                        body: commentText,
                                        client_reply: '',
                                        creator_reply: '',
                                        id: `temp-${Date.now()}`,
                                        created_at: new Date().toISOString()
                                    }
                                ]
                            }
                        }
                        return p;
                    })
                }))
            }
        })
        
        return {previousPosts}
    },
    onError: (err, variables, context) => {
        console.error('Comment error:', err)
        if (context?.previousPosts) {
            queryClient.setQueryData(['trending'], context.previousPosts)
        }
    },
    onSettled: () => {
        queryClient.invalidateQueries({queryKey: ['trending']})
    }
})

const handleComment = (postId) => {
    if (!comment || !comment.trim()) {
        return;
    }
    commentMutation({
        postId, 
        commentText: comment
    })
    setComment('') 
}
        

  return (
     <div  className={` font-lato py-6  flex justify-center items-center px-8 lg:px-0 bg-[rgba(0,0,0,0.1)]  z-40  fixed top-0  overflow-hidden  transition-all duration-300 bottom-0  right-0 w-full `}>
        <div className='bg-white w-[810px]  shadow-lg rounded-lg ' 
        onMouseEnter={()=>handleOverFlow(true)} onMouseLeave={()=>handleOverFlow(false)}>
          {/* header */}
           <div className="border-b-[1px] border-gray-300  px-4">
             <div className='max-w-[440px] ml-auto  flex items-center justify-between'>
                <h1 className='font-bold text-xl capitalize'>{post?.creator?.firstName}'s Post</h1>
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
            <h2 className='capitalize text-sm md:text-md font-bold'> {post?.creator?.firstName}  {post?.creator?.lastName}</h2>
            <p className='text-sm md:text-md'>{month} {d} at {hour}:{minute} AM</p>
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
          <PostLikeButton
          handleLike={handleLike}
          post={post}
          />
        <div  data-testid="toggle-comment-button" className='flex gap-[0.1rem] items-center '>
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
                  <h1 className='font-[500] text-md md:text-2xl'>Be the first to comment on this post</h1>
                  <CommandIcon className='w-52 h-52 mx-auto text-pink-200'/>
          </div>:
          <CommentContainer userProfile={post.creator} post={post} />
        }

           </div>
          {/* footer */}
             <div className={`relative ${isOver&&'pr-4'} mt-3`}>
        <Input 
          type="text" 
          ref={commentInput} 
          value={comment}
          onChange={(e)=>{
            setComment(e.target.value)
            console.log(comment)
          }}  
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleComment(post.id)
            }
          }}
          placeholder="Write a comment..."
          disabled={isPending}
          className="h-16 rounded-3xl border border-gray-200 focus-visible:ring-0"
        />
        <Image 
          src={send} 
          onClick={()=>handleComment(post.id)} 
          className={`absolute top-[1.2rem] md:top-[1rem] lg:top-4 right-3 ${isOver&&'right-7'} w-5 h-5 md:w-7 md:h-7 cursor-pointer ${isPending ? 'opacity-50' : ''}`}
        />
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