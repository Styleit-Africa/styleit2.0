import { useAuth } from '@/store/useAuth'
import like from '../../../images/like.png'
import React from 'react'
import Image from '../Image';

const PostLikeButton = ({post,handleLike}) => {
    const {user} = useAuth();
  return (
    <div>
           {/* client like buttons */}
        {
          user.role === 'client'&&<div>
            {
             post?.client_id_likes.includes(user.id)?<div className='flex gap-[0.1rem] items-center hover:cursor-pointer' onClick={()=>handleLike(post.id)}>
            <p className='text-xs'>{post?.likes_Count}</p>
          <Image src={like} className='w-4 h-4 rotate-180'/>
        </div>:<div className='flex gap-[0.1rem] items-center hover:cursor-pointer' onClick={()=>handleLike(post.id)}>
            <p className='text-xs'>{post?.likes_Count}</p>
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
    </div>
  )
}

export default PostLikeButton