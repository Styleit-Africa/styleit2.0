import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Loader, X } from 'lucide-react'
import { toast } from 'sonner'
import { useAuth } from '@/store/useAuth'

const AccountVerification = () => {
  const[isLoading,setIsLoading] = useState(false)
  const {user,role,token} = useAuth();
  const navigate = useNavigate();
  console.log(Cookies.get('activationLink'))
  console.log(JSON.parse(Cookies.get('user')))
       console.log(user,'here')

    const verifyAccount = async(e)=>{
      setIsLoading(true)
        e.preventDefault();
         try{
            const response = await axios.get(Cookies.get('activationLink'),
          {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: true, 
      })

           if(response.status == 200&&user.role==='designer'){

              setIsLoading(false)
                  Cookies.set('user',JSON.stringify({...JSON.parse(Cookies.get('user')),status:'actived'}))
                  navigate('/creator/profile')
                    toast("Account verified successfully", {
                    action: {
                    label: <X size={16} />,
                  },
                })
            }

            if(response.status == 200&&user.role==='client'){
              setIsLoading(false)
                  Cookies.set('user',JSON.stringify({...JSON.parse(Cookies.get('user')),status:'actived'}))
                  navigate('/client/profile')
                    toast("Account verified successfully", {
                    action: {
                    label: <X size={16} />,
                  },
                })
            }

      console.log(response)
      return response

      
    
    }catch(e){
      console.log(e)
    }
    }

    // useEffect(()=>{
    //    console.log(user.role,'here')
    //    const response = verifyAccount()
    //    console.log(response)
    //         // if(response.status == 200){

    //         //   if(token&&user.role==='designer'){

    //         //   setIsLoading(false)
    //         //       Cookies.set('user',JSON.stringify({...JSON.parse(Cookies.get('user')),status:'actived'}))
    //         //       navigate('/creator/profile')
    //         //         toast("Account verified successfully", {
    //         //         action: {
    //         //         label: <X size={16} />,
    //         //       },
    //         //     })
    //         // }
    //         // if(token&&user.role==='client'){
    //         //   setIsLoading(false)
    //         //       Cookies.set('user',JSON.stringify({...JSON.parse(Cookies.get('user')),status:'actived'}))
    //         //       navigate('/client/profile')
    //         //         toast("Account verified successfully", {
    //         //         action: {
    //         //         label: <X size={16} />,
    //         //       },
    //         //     })
    //         // }
    //         }
    // },[token,role])
  return (
    <form className=' font-lato font-[500] max-w-[500px] mx-auto mt-16 shadow-xl p-4 pb-6 '>
        <h1 className='text-center text-lg md:text-xl mb-6 px-10 text-gray-400'>Click the button below to Verify your account to get started </h1>
        <button onClick={(e)=>verifyAccount(e)} className='bg-primary w-full mt- py-3 rounded-md text-white text-lg'>
                        {isLoading?<Loader className='w-[max-content] mx-auto animate-spin' />:'Verify your account'} 
          </button>
    </form>
  )
}

export default AccountVerification