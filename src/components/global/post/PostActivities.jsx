import React from 'react'
import Image from '../Image'
import like from '../../../images/like.png'
import share from '../../../images/share.png'
import message from '../../../images/message.png'

const PostActivities = ({comments,isCommentOpened,setIsCommentOpened}) => {
  return (
    <div className='flex justify-between text-primary my-3'>
        <div className='flex gap-[0.1rem] items-center'>
            <p className='text-xs'>20</p>
            <Image src={like} className='w-4 h-4'/>
        </div>
        <div data-testid="toggle-comment-button" className='flex gap-[0.1rem] items-center' onClick={()=>(setIsCommentOpened(!isCommentOpened))}>
            <p className='text-xs'>{comments?.length}</p>
            <Image src={message} className='w-4 h-4'/>
        </div>
        <div className='flex gap-[0.1rem] items-center'>
            <p className='text-xs'>3</p>
            <Image src={share} className='w-3 h-2'/>
        </div>
    </div>
  )
}

export default PostActivities