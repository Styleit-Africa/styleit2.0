import React, { useState } from 'react'
import User from '../User'
import profileImage from '../../../images/bobby.png'
import Image from '../Image'
import { Input } from '@/components/ui/input'
import send from '../../../images/send.png'
import Comment from './Comment'
import { useLocation } from 'react-router-dom'
import CreatorPostComments from './CreatorPostComments'


const CreatorPostCommentContainer = ({userProfile,post}) => {
      const [commentId,setCommentId] = useState(null)


      
    
  return (
    <div data-testid="comment-container">
      container
        {
            post.post_comment.map(comment=>{
                return (
                    <div key={comment.id}>
                            
                      <CreatorPostComments userProfile={userProfile} 
                      commentId={commentId} setCommentId={setCommentId}
                        comment={comment} post={post} />
                    </div>
           )
        
       })
    }
    </div>
  )
}

export default CreatorPostCommentContainer