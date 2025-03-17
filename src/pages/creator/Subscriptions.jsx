import SubscriptionDetails from '@/components/dashboard/creator/SubscriptionDetails'
import SubscriptionHeader from '@/components/dashboard/creator/SubscriptionHeader'
import SubscriptionItems from '@/components/dashboard/creator/SubscriptionItems'
import DashboardTabs from '@/components/dashboard/tabs/DashboardTabs'
import { useGlobalStore } from '@/store/global/useGlobal'
import React from 'react'

const Subscriptions = () => {
  return (
    <section className='container px-4 md:px-0 pb-20'>
          <div className='text-center pt-12 font-lato'>
                <SubscriptionHeader/>
            </div>        
            <SubscriptionItems/>
        <SubscriptionDetails/>
    </section>
  )
}

export default Subscriptions