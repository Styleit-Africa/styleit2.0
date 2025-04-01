import { appointments } from '@/static/data'
import React from 'react'
import BookingCard from './BookingCard'

const Bookings = () => {
  return (
   <div className="container font-lato  px-4 xl:px-0">
       <h1 className='text-center text-xl font-[700] capitalize my-9'>appointment list</h1>
       <div className='flex flex-col md:flex-row justify-center  xl:justify-start md:flex-wrap gap-6  '>
      
      {appointments.map(appointment=>{
        return(
            <BookingCard key={appointment.id} appointment={appointment} page="bookings"/>
        )
      })}

    </div>
   </div>
  )
}

export default Bookings