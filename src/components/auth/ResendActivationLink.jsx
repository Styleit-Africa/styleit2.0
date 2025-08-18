import React, { useState } from 'react'
import { Input } from '../ui/input'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Loader, X } from 'lucide-react';
import { useAuth } from '@/store/useAuth';

const ResendActivationLink = () => {
  const [activationData,setActivationData] = useState({email:'',isSent:false})
  const[isLoading,setIsLoading] = useState(false)
  const {logout} = useAuth();

  const navigate = useNavigate();

  const handleLogout = ()=>{
    logout();
    navigate('/login')
  }
  const data = {email:activationData.email}
  console.log(JSON.parse(Cookies.get('user')).status)
     const resendLink = async(e)=>{
      setIsLoading(true)
      e.preventDefault();
        try {
            const response = await axios.post('https://styleitafrica.pythonanywhere.com/api/resend-activation',data,{
              headers:{
                 Authorization:`Bearer ${Cookies.get('token')}`,
                  'Content-Type': 'application/json',
                  Accept:'application/json'
              }
            })
            console.log(response)
            if(response.status === 200){
              setIsLoading(false)
              setActivationData({email:'',isSent:true})
              toast("Activation link has been sent successfully to your email", {
                action: {
                label: <X size={16} />,
              },
            })
            }
          } catch (e) {
            console.log(e)
        }
      }
  return (
    <div>
    <form className=' font-lato max-w-[500px] mx-auto mt-16 shadow-xl p-4 pb-6rounded-lg'>
        <h1 className='text-center text-lg mb-6 text-gray-400'>Verify your account to get started </h1>
        <Input type='text' placeholder='Email' onChange={(e)=>setActivationData({...activationData,email:e.target.value})} className='py-7 placeholder-gray-400 '/>
        <button onClick={(e)=>resendLink(e)} type="submit" disabled={isLoading} className='bg-primary w-full mt-5 py-3 rounded-md text-white text-lg'>
                        {isLoading?<Loader className='w-[max-content] mx-auto animate-spin' />:'resend link'} 
          
          </button>
    </form>
    {
      activationData.isSent&&<p className='text-center text-lg mt-8  text-gray-400'>Verify your account and click here to <span className='text-primary cursor-pointer' onClick={handleLogout}>Login again</span> </p>
    }
   {/* a9codingsucks@gmail.com */}
    </div>
  )
}

export default ResendActivationLink