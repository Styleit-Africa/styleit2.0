import { posts } from '@/static/data'
import PostCard from './PostCard'
import React from "react"
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import axios from 'axios'
import PostListLoader from '../loaders/PostListLoader'


const PostContainer = ({userProfile,follow})=>{
     const {data,isLoading,isError,error,isFetching} = useQuery({
        queryKey:['myPostss'],
        queryFn:async()=>await axios.get('https://styleitafrica.pythonanywhere.com/api/designer/profile',{
            headers:{
              Authorization:`Bearer ${Cookies.get('token')}`,
              'Content-Type': 'application/json',
              Accept:'application/json'
            }
          })
        })
        console.log(data)
    return(
        <div>
            {
                isLoading ? <PostListLoader/>:
                <div>
                    {
                    data?.data.post.map(post=>{
                        return(
                            <PostCard follow={follow} userProfile={data.data.creator} post={post} key={post.id}/>
                )})
            }
                </div>
            }
            
         </div>
    )
}

export default PostContainer