
import React from 'react'
import BookingCard from '../../components/dashboard/bookings/BookingCard'
import {appointments} from '../../static/data'

const History = ()=>{
    return(
        <section data-testid="history-page"  className='container font-lato pt-8 pb-20 px-4 md:px-0'>
            <h1 className='text-center capitalize text-2xl font-[700] mb-8'>task history</h1>
        <div className='flex flex-col md:flex-row justify-center  xl:justify-start md:flex-wrap gap-6  '>

            {
                appointments.map(appointment=>{
                    return(
                        <BookingCard page="history" key={appointment.id} appointment={appointment}/>
                    )
                })
            }
            </div>
        </section>
    )
}

export default History