import React from 'react'
import Clients from '../../client/Clients'
import ClientDashboardTabs from './ClientDashboardTabs'

const DashboardClient = () => {
  return (
    <div>
      <ClientDashboardTabs/>
      <div className='mt-5'>
          <Clients/>
        </div>
    </div>
  )
}

export default DashboardClient