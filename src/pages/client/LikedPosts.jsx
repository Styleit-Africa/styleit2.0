import MyPost from '@/components/dashboard/profile/MyPost'
import { posts } from '@/static/data'
import { useAuth } from '@/store/useAuth'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
// posts
import React from 'react'

const LikedPosts = () => {
    const {user} = useAuth()
    console.log(user,'user')
    const {data,isLoading,error,isError} = useQuery({
          queryKey:['profile'],
          queryFn:async()=>await axios.get(`https://styleitafrica.pythonanywhere.com/api/customer/profile`,{
              headers:{
                Authorization:`Bearer ${Cookies.get('token')}`,
                'Content-Type': 'application/json',
                Accept:'application/json'
              },
              withCredentials:true
            }),
            staleTime:1
          })
          console.log(data)
          console.log(error)
  return (
    <section  data-testid="liked-posts" className='container px-4 md:px-0 pb-28'>
        <MyPost postData={{posts:data?.data?.likes,isLoading,isError}}/>
    </section>
  )
}

export default LikedPosts