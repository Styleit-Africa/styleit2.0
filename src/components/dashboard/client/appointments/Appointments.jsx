import { appointments } from '@/static/data'
import React from 'react'
import AppointmentCard from './appointmentCard'

const Appointments = () => {
  return (
    <section className='container  px-4 xl:px-0'>
       <h1 className='text-center text-xl font-[700] capitalize my-9'>appointment details</h1>
       <div className='flex flex-col md:flex-row justify-start md:justify-center lg:justify-start items-start md:flex-wrap gap-3  '>
        { 
            appointments.map(appointment=>{
                return (
                    <AppointmentCard key={appointment.id}  appointment={appointment}   />
                )
            })
        }
        </div>
    </section>

  )
}

export default Appointments