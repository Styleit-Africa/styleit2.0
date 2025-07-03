import React from 'react'
import Bookings from '../../client/bookings/Bookings'
import DashboardBookingTabs from './DashboardBookingTabs'

const DashboardBookings = () => {
  return (
    <div>
        <DashboardBookingTabs/>
        <Bookings/>
    </div>
  )
}

export default DashboardBookings