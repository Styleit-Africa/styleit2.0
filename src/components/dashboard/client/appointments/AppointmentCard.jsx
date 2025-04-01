import React from 'react'
import BookingCard from '../../bookings/BookingCard'
import AppointmentMessage from './AppointmentMessage'
import Accepted from './Accepted'

const AppointmentCard = ({appointment}) => {
  return (
        <div className='w-full md:w-suto md:basis-[36%] lg:basis-[26%] xl:basis-[24%] border px-3 md:px-4 rounded-xl pt-4 pb-5'>
            <AppointmentMessage appointment={appointment} />
            <BookingCard  appointment={appointment} page='AppointmentDetails'  />
            {
              appointment.status === 'accepted'&&
              <Accepted appointment={appointment}/>
            }
            {
              appointment.status === 'paid'&& <p className='text-le text-center capitalize mt-5 text-blue-600 font-[500]'>payment completed</p>
            }
        </div>
  )
}
export default AppointmentCard