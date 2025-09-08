import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DeclinedAppointmentReason from './DeclinedAppointmentReason'

const AppointmentMessage = ({appointment}) => {
    const {status,reason,bookingDate,bookingTime,receiver, creatorLname,creatorFname,paymentStatus,creatorPhone} = appointment
    const [greaterThanThirtyMins,setgreaterThanThirtyMins] = useState(false)
    // const exceededThirtyMins = ()=> new Date() - new Date(`${bookingDate+'T'+bookingTime}`)
    const exceededOne = ()=>new Date().getTime() - new Date(`${bookingDate}T${bookingTime}`)>60000//1 min
   
    const checkTime = ()=>{
        if(status === 'not decided'&&exceededOne()){
            setgreaterThanThirtyMins(true)
        }
    }
    useEffect(()=>{
        const interval = setInterval(checkTime,1000);
        return ()=>clearInterval(interval)
    },[])

  return (
    <div className='text-gray-500' role='appointment-message'>
        <p className='text-sm md:text-[1rem] ' role='status'>Your appointment with 
            <span  className='text-black capitalize font-[500]'> {receiver}  {creatorLname} {creatorFname}</span> {status !== 'pending'|| status !== 'not decided'?'was':'is'} 
             <span className={`font-[500]  ${(status ==='pending'|| status === 'not decided')&&'text-yellow-500'} ${status ==='accept'&&'text-green-600'} ${status ==='decline'&&'text-red-600'} ${status ==='paid'&&'text-blue-600'}`}> {status ==='paid'?'completed':status}</span>.
         {
         status==='accept'&& <p>You can reach out at {creatorPhone} to makeup decisions</p> } 
         {
          greaterThanThirtyMins &&<span role="urgent"> kindly book another if urgent. Click <Link to='/client/bookAppointment' className='text-purple-400'>Book Appointment </Link>{greaterThanThirtyMins&&'to book now'} </span> 
         } </p>
        {
            status==='decline'&&
           <DeclinedAppointmentReason reason={reason}/>
            
        }
        

    </div>
  )
//   return (
//     <div className='text-gray-500' role='appointment-message'>
//         <p className='text-sm md:text-[1rem] ' role='status'>Your appointment with 
//             <span  className='text-black capitalize font-[500]'> {receiver}  </span> {status !== 'pending'?'was':'is'} 
//              <span className={`font-[500]  ${status ==='pending'&&'text-yellow-500'} ${status ==='accepted'&&'text-green-600'} ${status ==='declined'&&'text-red-600'} ${status ==='paid'&&'text-blue-600'}`}> {status ==='paid'?'completed':status}</span>.
//          {
//          status==='accepted'&&'You can reach out at 09068342458 to makeup decisions'} 
//          {
//           greaterThanThirtyMins &&<span role="urgent"> kindly book another if urgent. Click <Link to='/client/bookAppointment' className='text-purple-400'>Book Appointment </Link>{greaterThanThirtyMins&&'to book now'} </span> 
//          } </p>
//         {
//             status==='declined'&&
//             <div role="reason">
//                 <h3 className='font-[500] text-black mt-5'>Reason:</h3>
//                 <p className='text-sm md:text-[1rem]'>{reason}</p>
//                 <p className=' mt-4'>click <Link to='/fashionDesigner' className='text-blue-500'> Designers</Link> to view list of designers and book appointment</p>
//             </div>
//         }
        

//     </div>
//   )
}

export default AppointmentMessage