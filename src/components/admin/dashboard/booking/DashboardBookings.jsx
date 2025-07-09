import React from 'react'
import Bookings from '../../client/bookings/Bookings'
import DashboardBookingTabs from './DashboardBookingTabs'

const DashboardBookings = () => {
  return (
    <div>
        <DashboardBookingTabs/>
      <div className='mt-5'>
        <Bookings/>
      </div>

    </div>
  )
}

export default DashboardBookings