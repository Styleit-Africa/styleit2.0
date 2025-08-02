import React from 'react'
import { Input } from '../ui/input'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const ResendActivationLink = () => {

  const navigate = useNavigate();

  console.log(JSON.parse(Cookies.get('user')).status)
     const resendLink = async(e)=>{
      e.preventDefault();
        try {
            const response = await axios.post('https://styleitafrica.pythonanywhere.com/api/resend-activation')
            console.log(response)
            // if(response.data.status === 201){
            //   navigate('/verifyAccount')
            // }
          } catch (e) {
            console.log(e)
        }
      }
  return (
    <form className=' font-lato max-w-[500px] mx-auto mt-16 shadow-xl p-4 pb-6rounded-lg'>
        <h1 className='text-center text-lg mb-6 text-gray-400'>Verify your account to get started </h1>
        <Input type='text' placeholder='Email' className='py-7 placeholder-gray-400 '/>
        <button onClick={(e)=>resendLink(e)} type="submit" className='bg-primary w-full mt-5 py-3 rounded-md text-white text-lg'>verify account</button>
    </form>
  )
}

export default ResendActivationLink