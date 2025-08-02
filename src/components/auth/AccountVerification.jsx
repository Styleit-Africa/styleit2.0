import React from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

const AccountVerification = () => {

    console.log(JSON.parse(Cookies.get('creator')).activation_link,'ppp')
    const verifyAccount = async(e)=>{
        e.preventDefault();
         try{
            const response = await axios.get(JSON.parse(Cookies.get('creator'))?.activation_link,
          {
        headers: {
            'Content-Type': 'application/json',
        },
        withCredentials: false, 
      })
        console.log(response)
        Cookies.set('creator',JSON.stringify(response.data))
    
    }catch(e){
      console.log(e)
    }
    }
  return (
    <form className=' font-lato font-[500] max-w-[500px] mx-auto mt-16 shadow-xl p-4 pb-6 '>
        <h1 className='text-center text-lg md:text-xl mb-6 px-10 text-gray-400'>Click the button below to Verify your account to get started </h1>
        <button onClick={(e)=>verifyAccount(e)} className='bg-primary w-full mt- py-3 rounded-md text-white text-lg'>Verify your account</button>
    </form>
  )
}

export default AccountVerification