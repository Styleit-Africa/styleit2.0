import { Button } from '@/components/ui/button'
import React from 'react'

const BookingCard = ({appointment,page}) => {
  return (
     <div className={`${page!=='AppointmentDetails'&&'shadow px-3 md:px-5 py-4'} basis-[max-content] rounded-xl `}>
          {
          page !== 'AppointmentDetails'&&
          <p className='text-sm md:text-[1rem] text-gray-500 '><span className='mr-3 text-black  font-[700] capitalize '>name:</span>{appointment.name}</p>
          }
          <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>booking date:</span>{appointment.bookingDate}</p>
          <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>booking time:</span>{appointment.bookingTime}</p>
          <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>collection date:</span>{appointment.collectionDate}</p>
          <p className='text-sm md:text-[1rem] text-gray-500 mt-3.5'><span className='mr-3 text-black  font-[700] capitalize '>collection time:</span>{appointment.collectionTime}</p>
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