import React, { useState } from 'react'
import User from '../User'
import profileImage from '../../../images/bobby.png'
import Image from '../Image'
import { Input } from '@/components/ui/input'
import send from '../../../images/send.png'
import Comment from './Comment'
import { useLocation } from 'react-router-dom'


const CommentContainer = ({userProfile,post}) => {
      const [commentId,setCommentId] = useState(null)
      const {pathname} = useLocation()

      const getComment = pathname === '/trending'?post.comments:post.post_comment
      
    
  return (
    <div data-testid="comment-container">
        {
            // post?.comments.map(comment=>{
            getComment.map(comment=>{
                return (
                    <div key={comment.com_id}>
                            
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