import React from 'react'
import CreatorSubscriptions from '../../creator/subscription/CreatorSubscriptions'
import DashboardSubscriptionTabs from './DashboardSubscriptionTabs'

const DashboardSubscription = () => {
  return (
    <div>
        <DashboardSubscriptionTabs/>
          <div className='mt-5'>
          <CreatorSubscriptions/>
        </div>
    </div>
  )
}

export default DashboardSubscription