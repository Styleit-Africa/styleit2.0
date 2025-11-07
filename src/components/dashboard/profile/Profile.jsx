import React, { useEffect } from 'react'
import CreatorDetails from './creator/CreatorDetails'
import MyPost from './MyPost'
import { useAuthService } from '@/store/useAuthService'
import EditProfileForm from '@/components/global/EditProfileForm'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '@/store/useAuth'

const Profile = () => {

  const {user} = useAuth()
  console.log(user,'user')
  const {data,isLoading,isError} = useQuery({
        queryKey:['profile'],
        queryFn:async()=>await axios.get(`https://styleitafrica.pythonanywhere.com/api/${user.role==='designer'?'designer':'customer'}/profile`,{
            headers:{
              Authorization:`Bearer ${Cookies.get('token')}`,
              'Content-Type': 'application/json',
              Accept:'application/json'
            },
            withCredentials:true
          }),
        staleTime:1000*10*60
        })

       
  return (
    <>
    {
      isError ? <h1 className='m-4 p-24 shadow-md text-center text-xl rounded-lg'>We are currently in maintenance mode kindly try again later</h1>:(
        <div>
              {
          user?.role === 'client' ?
          (
            <EditProfileForm isEditable={false} title="Profile"/>
          ):(
            <div className='my-12  mx-4 xl:mx-0'>
            <CreatorDetails creatorDetails={{creator:data?.data?.creator,isError,isLoading}} />
           {user?.role === 'designer'&& <MyPost  postData={{posts:data?.data?.posts,isLoading,isError}} />}
          </div>
          )
        }
        </div>
      )
      
    }
    
    </>
  )
}

export default Profile

