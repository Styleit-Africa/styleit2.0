import React from 'react'
import User from '../User'
import profileImage from '../../../images/bobby.png'


const CommentContainer = ({userProfile,postComments}) => {
  return (
    <div data-testid="comment-container">
        {
            postComments?.map(comment=>{
                return (
                    <div key={comment.id}>
                            
                        <div className='mt-3 bg-lPink rounded-2xl py-2 pl-3'>
                            <User
                                userProps={{
                                        name:{userProfile,fullName:false,styles:'text-black font-[500]'},
                                        indicator:{isIndicator:false,styles:'h-2 w-2 absolute bottom-2 right-0 rounded-full bg-green-300 '},
                                        image:{profileImage,styles:'w-[28px] h-[28px]'},
                                        container:' flex items-center gap-3 font-[500] text-xs font-lato'
                            }}/>
                        <p className='text-xs pl-10'>{comment.body}</p>
                        </div>
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