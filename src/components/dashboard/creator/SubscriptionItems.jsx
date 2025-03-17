import { Button } from '@/components/ui/button'
import { subscriptions } from '@/static/data'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'

const SubscriptionItems = () => {
  return (
    <div className='flex justify-center xl:justify-start flex-col flex-wrap md:flex-row gap-4'>
        {
            subscriptions.map(subscription=>{
                return(
             <div className='basis-[45%] xl:basis-[24%] '>
                    <SubscriptionCard
                     key={subscription.id} subscription={subscription} btnContent="Subscribe now"
                       subscriptions={subscriptions}  isShow={false} />
                </div>
                )
            })
        }
    </div>
  )
}

export default SubscriptionItems