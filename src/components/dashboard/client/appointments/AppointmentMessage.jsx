import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AppointmentMessage = ({appointment:{id,status,reason,bookingDate,bookingTime}}) => {
    const [greaterThanThirtyMins,setgreaterThanThirtyMins] = useState(false)
    const exceededThirtyMins = ()=> new Date() - new Date(`${bookingDate+'T'+bookingTime}`)
    const exceededOne = ()=>new Date().getTime() - new Date(`${bookingDate}T${bookingTime}`)>60000
    const date = new Date(`${bookingDate+'T'+bookingTime}`).toLocaleDateString('en-US',{year:'numeric',month:'2-digit',
        day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'})
        const d = new Date(bookingDate)
        const year = `${d.getFullYear()}-${d.getMonth()<=9&&'0'+ d.getMonth()}-${d.getDay() <=9&&'0'+ d.getDay()}`
        console.log(year)
        const time = date.split(', ')
    console.log(date.split(', '))
    console.log(date)
    const checkTime = ()=>{
        if(status === 'pending'&&exceededOne()){
            setgreaterThanThirtyMins(true)
        }
    }
    useEffect(()=>{
        const interval = setInterval(checkTime,1000);
        return ()=>clearInterval(interval)
    },[])
  return (
    <div className='text-gray-500'>
        <p className='text-sm md:text-[1rem] '>Your appointment with 
            <span className='text-black capitalize font-[500]'> ariky stitches </span> {status !== 'pending'?'was':'is'} 
             <span className={`font-[500]  ${status ==='pending'&&'text-yellow-500'} ${status ==='accepted'&&'text-green-600'} ${status ==='declined'&&'text-red-600'} ${status ==='paid'&&'text-blue-600'}`}> {status ==='paid'?'completed':status}</span>.
         {
         status==='accepted'&&'You can reach out at 09068342458 to makeup decisions'} 
         {
          greaterThanThirtyMins &&<span> kindly book another if urgent. Click <Link to='/client/bookAppointment' className='text-purple-400'>Book Appointment </Link>{greaterThanThirtyMins&&'to book now'} </span> 
         } </p>
        {
            status==='declined'&&
            <div>
                <h3 className='font-[500] text-black mt-5'>Reason:</h3>
                <p className='text-sm md:text-[1rem]'>{reason}</p>
                <p className=' mt-4'>click <Link to='/fashionDesigner' className='text-blue-500'> Designers</Link> to view list of designers and book appointment</p>
            </div>
        }
        

    </div>
  )
}

export default AppointmentMessage