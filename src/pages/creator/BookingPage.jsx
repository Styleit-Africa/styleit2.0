import Bookings from '@/components/dashboard/bookings/Bookings'
import Profile from '@/components/dashboard/profile/Profile'
import React from 'react'

const  BookingPage = () => {
  return (
    <section data-testid="bookings-page"  className='container'>
      <Bookings/>
    </section>
  )
}

export default  BookingPage