import React, { useState } from 'react'
import profileImage from '../../../images/profile_i.png'
import User from '../User'
import Indicator from '../Indicator'
import send from '../../../images/send.png'
import PostActivities from './PostActivities'
import { Input } from '@/components/ui/input'
import Image from '../Image'
import CommentContainer from '../comment/CommentContainer'
import { Button } from '@/components/ui/button'
import PostTitle from './PostTitle'
import axios from 'axios'
import Cookies from 'js-cookie'
import SharePostContainer from './SharePostContainer'
import Report from '../Report'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useLocation } from 'react-router-dom'
import PostCardImages from './PostCardImages'
import { usePost } from '@/store/usePost'
import { useComment } from '@/store/useComment'
import { useCreatorStore } from '@/store/useCreator'
import PostDescription from './PostDescription'
import ImageGallery from '../imageGallery/ImageGallery'
import ViewPostDetails from './ViewPostDetails'


const PostCard=({data,post,follow,userProfile}) => {
    const {pathname} = useLocation()
    const [isReportOpened,setIsReportOpened] = useState(false)//needed for individual component
    const {showReport,setShowReport,isShared,setIsShared,deletePost,likePost
      } = usePost();
    const {setComment,isCommentOpened,setIsCommentOpened,storeComment} = useComment();
    const [postId,setPostId] = useState(null);
    const {storeFollow} = useCreatorStore();

    const queryClient = useQueryClient()
      const {mutate:followMutation} = useMutation({
        mutationFn:storeFollow,
        onSuccess:()=>{
            queryClient.invalidateQueries('following')
        }
    })
     const handleFollow = async(id)=>{
      followMutation(id)
    }
     const handleUnFollow = async()=>{
         try{
           const response = await axios.post(`https://styleitafrica.pythonanywhere.com/api/unfollow/${data?.userId}/`,{
          headers: {
                 Authorization: `Bearer ${Cookies.get('token')}`,
                 'Content-Type': 'application/json',
                 Accept:'application/json'

        },
        withCredentials:true
      })
         }catch(e){
          console.error(e)
         }
    }

    

    const {mutate} = useMutation({
        mutationFn:storeComment,
        onSuccess:()=>{
            queryClient.invalidateQueries('trending')
        }
    })
    const handleComment = async(id)=>{
            mutate(id)
            console.log(isCommentOpened)
          setIsCommentOpened(!isCommentOpened)

    }
    
    const {mutate:deleteMutation} = useMutation({
      mutationFn:deletePost,
        onSuccess:()=>{
            queryClient.invalidateQueries('myPosts')
        }
    })

    const handleDeletePost = (id)=>{
            deleteMutation(id)
    }    
  return (
    <div className='max-w-[480px] mx-auto mt-10'>
      {
        postId === post.id &&<ViewPostDetails setPostId={setPostId} post={post} />
      }
      {
        showReport&&<Report user={{creator:data?.creator}} setShowReport={setShowReport}/>
      }
    <div className='relative border border-gray-200 rounded-2xl  text-sm  p-3.5'>
        {
            isReportOpened&&<div data-testid="options" className='absolute right-6 top-7 rounded-3xl bg-transparent  backdrop-filter backdrop-blur-md text-white pl-5 py-5 w-[200px] '>
            <p className='capitalize text-lg cursor-pointer text-red-500 font-[500]' onClick={()=>handleDeletePost(post.postId)}>delete</p>
            <p className='capitalize text-lg cursor-pointer text-yellow-500 font-[500]' onClick={()=>setShowReport(true)}>report</p>
        </div>
        }
        <div className='flex justify-between items-center '>
        <User
        userProps={{
                name:{userProfile,fullName:false,styles:'text-black capitalize font-[500]'},
                indicator:{isIndicator:false,styles:'h-2 w-2 absolute bottom-2 right-0 rounded-full bg-green-300 '},
                image:{profileImage,styles:'w-[35px] h-[35px]'},
                container:' flex items-center gap-3 font-[700] text-lg font-lato'
            }}/>

           
            {

            <div className='flex items-center '  >
                {
                follow&&
                <Button onClick={()=>handleFollow(post.creator.creator_id)} className="text-primary -mt-1.5  p-0 bg-white hover:bg-white shadow-none block text-lg">Follow</Button>
                }

                <div data-testid="options-icon" className='relative  w-[25px] self-start h-[29px] cursor-pointer' onClick={()=>setIsReportOpened(!isReportOpened)}>
                <Indicator className='h-1 w-1 absolute bottom-2 right-0 rounded-full bg-black'/>
                <Indicator className='h-1 w-1 absolute bottom-4 right-0 rounded-full bg-black'/>
                <Indicator className='h-1 w-1 absolute bottom-6 right-0 rounded-full bg-black'/>

                </div>
            </div>
            }
        </div>
        <PostTitle title={post.postTitle}/>
        {/* <PostDescription description={post.content}/> */}
        <p>{post.content}</p>
       {/* post images */}
        {
          post?.img&&post?.img?.length !== 0&&<ImageGallery _images={post.img}/>
        }
        <PostActivities
         comments={post.comments} 
         likePost={likePost}
         post={post} 
         setPostId={setPostId}
         isCommentOpened={isCommentOpened} 
         setIsCommentOpened={setIsCommentOpened}
         share={{isShared,setIsShared}}  />
        <div className='relative' onClick={()=>setIsCommentOpened(!isCommentOpened)}>
            <Input type="text" onChange={(e)=>setComment(e.target.value)}  
            className="h-12 rounded-2xl border border-gray-200  focus-visible:ring-0"/>
            <Image src={send} className='absolute top-3.5 md:top-2.5 right-2.5 w-5 h-5 md:w-7 md:h-7 '
              onClick={()=>handleComment(pathname==='/trending'?post.id:post.postId)}/> 
        </div>
    </div>
    {/* {
        isCommentOpened&&<CommentContainer  userProfile={userProfile} postComments={post.comments} />
    } */}
    {
      isShared&&<SharePostContainer setIsShared={setIsShared} post={post}/>
    }
            
</div>
  )
}

export default PostCard