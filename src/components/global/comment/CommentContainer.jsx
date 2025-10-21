import React, { useState } from 'react'
import User from '../User'
import profileImage from '../../../images/bobby.png'
import Image from '../Image'
import { Input } from '@/components/ui/input'
import send from '../../../images/send.png'
import Comment from './Comment'


const CommentContainer = ({userProfile,post}) => {
  return (
    <div data-testid="comment-container">
        {
            post?.comments.map(comment=>{
                return (
                    <div key={comment.id}>
                            
                      <Comment userProfile={userProfile} comment={comment} post={post} />
                      
                        {/* {
                            comment.replies.map(reply=>{
                                return(
                                <div key={reply.id} className={`mt-3 bg-lPink rounded-2xl py-2 pl-3 pr-5 ${reply.userId !== comment.userId && "max-w-[320px] ml-auto"}`}>
                                    <User
                                        userProps={{
                                                name:{userProfile,fullName:false,styles:'text-black font-[500]'},
                                                indicator:{isIndicator:false,styles:'h-2 w-2 absolute bottom-2 right-0 rounded-full bg-green-300 '},
                                                image:{profileImage,styles:'w-[28px] h-[28px]'},
                                                container:' flex items-center gap-3 font-[500] text-xs font-lato'
                                    }}/>
                                <p className='text-xs pl-10'>{reply.description}</p>
                                </div>

                                )
                            })
                        } */}
                    </div>
           )
        
       })
    }
    </div>
  )
}

export default CommentContainer