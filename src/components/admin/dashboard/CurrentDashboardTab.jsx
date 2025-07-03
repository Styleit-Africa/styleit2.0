import { dashboardTabs } from '@/static/adminData'
import React from 'react'

const CurrentDashboardTab = ({currentTab}) => {
  return (
    <div className='mt-12'>
         {
            dashboardTabs[currentTab].component
         }
    </div>
  )
}

export default CurrentDashboardTab