import React from 'react'
import PostContainer from '../global/post/PostContainer'
import { userProfile } from "@/static/data"
import { useQuery } from '@tanstack/react-query'
import PostListLoader from '../global/loaders/PostListLoader'
import Cookies from 'js-cookie'
import axios from 'axios'

const TrendingContents = () => {
    const {data,isLoading,isError,error,isFetching} = useQuery({
        queryKey:['trending'],
        queryFn:async()=>await axios.get('https://styleitafrica.pythonanywhere.com/api/trending',{
            headers:{
              Authorization:`Bearer ${Cookies.get('token')}`,
              'Content-Type': 'application/json',
              Accept:'application/json'
            }
          })
        })
  return (
    <div>
      { 
                isLoading ? <PostListLoader/>:
            <PostContainer 
            data={data.data}
            follow={true} 
            userProfile={userProfile}/>
      }
    </div>
  )
}

export default TrendingContents