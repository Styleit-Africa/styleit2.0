import React, { useEffect } from 'react'
import PostContainer from '../global/post/PostContainer'
import { userProfile } from "@/static/data"
import { useInfiniteQuery } from '@tanstack/react-query'
import PostListLoader from '../global/loaders/PostListLoader'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useInView } from 'react-intersection-observer'
import TrendingPostLoader from '../global/loaders/TrendingPostLoader'

const TrendingContents = ({pageParam=1}) => {
  const getTrending = async()=> {
          const response =  await axios.get(`https://styleitafrica.pythonanywhere.com/api/trending?page=${pageParam}`,{
            headers:{
              Authorization:`Bearer ${Cookies.get('token')}`,
              'Content-Type': 'application/json',
              Accept:'application/json'
            }
          })
          return response.data
  }


    const {   
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    } = useInfiniteQuery({
        queryKey:['trending'],
        queryFn:getTrending,
        initialPageParam:0,
        getNextPageParam: (lastPage, pages) =>{
              if (lastPage?.has_next) {
            return lastPage.page + 1;
          }
          return undefined; // stop fetching
        }
        })
        console.log(data?.pages)
        const {ref,inView} = useInView()

        useEffect(()=>{
              if(inView){
                fetchNextPage()
              }
        },[fetchNextPage,inView])
  return (
    <div>
      
      { 
                isLoading ? <TrendingPostLoader/>:
            <PostContainer 
            pages={data?.pages}
            follow={true} 
            userProfile={userProfile}/>
      }
      
      <div ref={ref}>{isFetchingNextPage&&<TrendingPostLoader/>}</div>
    </div>
  )
}

export default TrendingContents
