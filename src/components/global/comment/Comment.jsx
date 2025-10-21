import React, { useState } from 'react'
import User from '../User'
import profileImage from '../../../images/bobby.png'
import Image from '../Image'
import { Input } from '@/components/ui/input'
import send from '../../../images/send.png'
import axios from 'axios'
import Cookies from 'js-cookie'

const Comment = ({comment,userProfile,post}) => {
    const [commentId,setCommentId] = useState(null)
    const [reply,setReply] = useState('')
    
    const handleReply = async(postId,comment_id)=>{
        console.log(reply)
        const data = {comrep:reply}
        console.log(data,Cookies.get('token'))
        const response = await axios.post(`https://styleitafrica.pythonanywhere.com/api/reply/${postId}/${comment_id}/`,data,{
                  headers: {
                         Authorization: `Bearer ${Cookies.get('token')}`,
                         'Content-Type': 'application/json',
                         Accept:'application/json'
                }
              });
        console.log(response)
    }

  return (
    <div>
          <div className='mt-3 bg-lPinkl w-[fit-content] flex gap-2 '>
                            {/* <User
                                userProps={{
                                        name:{userProfile,fullName:false,styles:'text-black font-[500]'},
                                        indicator:{isIndicator:false,styles:'h-2 w-2 absolute bottom-2 right-0 rounded-full bg-green-300 '},
                                        image:{profileImage,styles:'w-[28px] h-[28px]'},
                                        container:' flex items-center gap-3 font-[500] text-xs font-lato'
                            }}/> */}
                            <div className='basis-[25%]'>
                            <Image src={profileImage} className='w-[40px] h-[40px] rounded-full '/>

                            </div>
                           <div>
                             <div className='py-2 px-3 rounded-2xl bg-lPink'> 
                                <h1 className='capitalize font-[500]'>{userProfile.firstName} {userProfile.lastName}</h1>
                                <p className='text-md'>{comment.body} Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet veniam quasi ad alias pariatur? Deleniti dolores, iusto, quae nisi explicabo et debitis nam distinctio unde quia voluptate alias, numquam provident dicta enim totam minus suscipit sit beatae esse quas sunt? Vitae, temporibus? Aspernatur sed iure mollitia excepturi temporibus. Reiciendis, voluptates! </p>
                                {/* <p className='text-md'>{comment.body}</p> */}
                            </div>
                                     <div className='flex gap-3'>
                        <span>21m</span>
                         <button className='text-primary' onClick={()=>setCommentId(comment.id)}>reply</button>
                       </div>
                           </div>
                           
                        </div>
                {
                commentId === comment.id &&  <div className='relative'>
                <Input onChange={(e)=>setReply(e.target.value)} type="text" className="ml-auto h-16 max-w-[600px] rounded-2xl border border-gray-200  focus-visible:ring-0"/>
                <Image src={send} className='absolute top-3.5 md:top-4 right-2.5 w-5 h-5 md:w-7 md:h-7 ' onClick={()=>handleReply(post.id,comment.com_id)} /> 
                </div>
                }

                {
                  comment.client_reply&&<div className="ml-auto py-2 px-4 max-w-[200px] rounded-2xl bg-lPink w-[fit-content]">
                <p>{comment.client_reply} </p>
        </div>
                }
        

    </div>
  )
}

export default Comment