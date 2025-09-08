import { Button } from '@/components/ui/button'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Loader, X } from 'lucide-react';
import React, { useState } from 'react'
import { toast } from 'sonner';
import DeclineBookingModal from './DeclineBookingModal';

const BookingCard = ({appointment,page}) => {
  const [isDeclined,setIsDeclined] = useState(false)
    console.log(appointment,'here')

     const updateAppointmentStatus = async(data)=>{

      if(data.action === 'accept'){
        console.log(data,appointment.bookingId)

         return await axios.post(`https://styleitafrica.pythonanywhere.com/api/appointment/status/${appointment.bookingId}`,data,{
          headers:{
            Authorization:`Bearer ${Cookies.get('token')}`,
            Accept:'application/json'
          },
          withCredentials:true  
        })
      }else{
        console.log(data,appointment.bookingId)

        return await axios.post(`https://styleitafrica.pythonanywhere.com/api/appointment/status/${appointment.bookingId}`,data,{
          headers:{
            Authorization:`Bearer ${Cookies.get('token')}`,
            Accept:'application/json'
          },
          withCredentials:true  

        })
      }

      }
      const {mutate,data,isLoading,error} = useMutation({
        mutationFn:updateAppointmentStatus
      })
      console.log(data)
      const updateAppointment = async(value)=>{
        mutate(value)
        if(value.action === 'accept'&&data?.status === 200){
           toast("appointment accepted successfully", {
                action: {
                label: <X size={16} />,
              },
            })
        }
        if(value.action === 'decline'&&data?.status === 200){
           toast("appointment declined successfully", {
                action: {
                label: <X size={16} />,
              },
            })
        }
      }

   
    return (
      <div>

      <div role='booking-card' className={`${page!=='AppointmentDetails'&&'shadow px-3 md:px-5 py-4'} basis-[max-content] rounded-xl `}>
            {
            page !== 'AppointmentDetails'&&
            <p className='text-sm md:text-[1rem] text-gray-500 '><span className='mr-3 text-black  font-[700] capitalize '>name:</span>{appointment.clientfname} {appointment.clientlname}</p>
            }
            <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>booking date:</span>{appointment.bookingDate}</p>
            <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>booking time:</span>{appointment.bookingTime}</p>
            <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>collection date:</span>{appointment.collectionDate}</p>
            <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>collection time:</span>{appointment.collectionTime}</p>
            {
              page === 'bookings'&&<div className='mt-4'>
              <Button onClick={()=>updateAppointment({action:'accept'})} 
              className="bg-green-700 hover:bg-green-800 px-5  md:px-8 py-6 md:py-5 mr-4 md:mr-2 text-white capitalize rounded-xl"> 
                {isLoading?<Loader className='animate-spin' />:'accept'}</Button>
              <Button onClick={()=>setIsDeclined(true)} 
              className="bg-red-600 hover:bg-red-800 px-5  md:px-8 py-6 md:py-5 text-white capitalize rounded-xl"> 
                {isLoading?<Loader className='animate-spin' />:'decline'}</Button>
              </div>
            }
        </div>
            {
              isDeclined&&<DeclineBookingModal updateAppointment={updateAppointment}
              setIsDeclined={setIsDeclined } isDeclined={isDeclined}/>
            }
      </div>
      

//  <div role='booking-card' className={`${page!=='AppointmentDetails'&&'shadow px-3 md:px-5 py-4'} basis-[max-content] rounded-xl `}>
//             {
//             page !== 'AppointmentDetails'&&
//             <p className='text-sm md:text-[1rem] text-gray-500 '><span className='mr-3 text-black  font-[700] capitalize '>name:</span>{name}</p>
//             }
//             <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>booking date:</span>{_bookingDate}</p>
//             <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>booking time:</span>{_bookingTime}</p>
//             <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>collection date:</span>{_collectionDate}</p>
//             <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>collection time:</span>{_collectionTime}</p>
//             {
//               page === 'bookings'&&<div className='mt-4'>
//               <Button className="bg-green-700 hover:bg-green-800 px-5  md:px-8 py-6 md:py-5 mr-4 md:mr-2 text-white capitalize rounded-xl">accept</Button>
//               <Button className="bg-red-600 hover:bg-red-800 px-5  md:px-8 py-6 md:py-5 text-white capitalize rounded-xl">decline</Button>
//               </div>
//             }
//         </div>
    )
}

export default BookingCard;

