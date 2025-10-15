import React, { useState } from 'react'
import User from '../User'
import profileImage from '../../../images/bobby.png'
import Image from '../Image'
import { Input } from '@/components/ui/input'
import send from '../../../images/send.png'
import Comment from './Comment'


const CommentContainer = ({userProfile,post}) => {
        const [commentId,setCommentId] = useState(null)
    
  return (
    <div data-testid="comment-container">
        {
            post?.comments.map(comment=>{
                return (
                    <div key={comment.id}>
                            
                      <Comment userProfile={userProfile} 
                      commentId={commentId} setCommentId={setCommentId}
                        comment={comment} post={post} />
                    </div>
           )
        
       })
    }
    </div>
  )
}

export default CommentContainer