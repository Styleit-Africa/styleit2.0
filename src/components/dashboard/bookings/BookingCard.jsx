import { Button } from '@/components/ui/button'
import React from 'react'

const BookingCard = ({appointment,page}) => {

    const {bookingDate,bookingTime,name,collectionDate,collectionTime} = appointment
    const getTime = (date,time)=>{
      return new Date(`${date+'T'+time}`).toLocaleDateString('en-US',{year:'numeric',month:'2-digit',
        day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'})
    }
    const getDate = (date)=>{
      return  `${date.getFullYear()}-${date.getMonth()<=9?'0'+ date.getMonth():date.getMonth()}-${date.getDay() <=9?'0'+ date.getDay():date.getDay()}`
    }
    const _bookingTime = getTime(bookingDate,bookingTime).split(', ')[1]
    const _collectionTime = getTime(collectionDate,collectionTime).split(', ')[1]
    const _bookingDate = getDate(new Date(bookingDate))
    const _collectionDate = getDate(new Date(collectionDate))
   
    return (
      <div className={`${page!=='AppointmentDetails'&&'shadow px-3 md:px-5 py-4'} basis-[max-content] rounded-xl `}>
            {
            page !== 'AppointmentDetails'&&
            <p className='text-sm md:text-[1rem] text-gray-500 '><span className='mr-3 text-black  font-[700] capitalize '>name:</span>{name}</p>
            }
            <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>booking date:</span>{_bookingDate}</p>
            <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>booking time:</span>{_bookingTime}</p>
            <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>collection date:</span>{_collectionDate}</p>
            <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>collection time:</span>{_collectionTime}</p>
            {
              page === 'bookings'&&<div className='mt-4'>
              <Button className="bg-green-700 hover:bg-green-800 px-5  md:px-8 py-6 md:py-5 mr-4 md:mr-2 text-white capitalize rounded-xl">accept</Button>
              <Button className="bg-red-600 hover:bg-red-800 px-5  md:px-8 py-6 md:py-5 text-white capitalize rounded-xl">decline</Button>
              </div>
            }
        </div>
    )
}

export default BookingCard