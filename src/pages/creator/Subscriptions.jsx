import SubscriptionDetails from '@/components/dashboard/creator/SubscriptionDetails'
import SubscriptionItems from '@/components/dashboard/creator/SubscriptionItems'
import React from 'react'

const Subscriptions = () => {
  return (
    <section className='container px-4 md:px-0 pb-20'>
        <div className='text-center pt-12 font-lato'>
            <h1 className='text-xl font-[700] capitalize'>subscription plans</h1>
            <p className='mt-2'>Choose your best plan and get access to a wide range of clients for service!</p>
        </div>
        <SubscriptionItems/>
        <SubscriptionDetails/>
    </section>
  )
}

export default Subscriptions