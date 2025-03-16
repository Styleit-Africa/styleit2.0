import { Button } from '@/components/ui/button'
import { subscriptions } from '@/static/data'
import React from 'react'

const SubscriptionItems = () => {
  return (
    <div className='flex justify-center xl:justify-start flex-col flex-wrap md:flex-row gap-4'>
        {
            subscriptions.map(subscription=>{
                return(
                    <div className='shadow-md p-5 rounded-xl lg: basis-[45%] xl:basis-[24%] mt-8 text-center'>
                        <h2 className='text-xl font-[500] capitalize'>{subscription.period} plan</h2>
                        <p className='mt-8'>{subscription.discount}</p>
                        <p className={`mt-9 font-[500] text-lg ${subscription.amount > subscriptions[1].amount && 'text-green-400'}`}>{subscription.amount}.00</p>
                        <Button className={`capitalize font-[500] text-lg px-0 py-6 rounded-xl bg-white border border-primary hover:bg-primary hover:text-white
                            w-full mt-9 ${subscription.amount > subscriptions[1].amount && 'bg-primary text-white hover:bg-white hover:text-primary'}`}>subscribe now</Button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default SubscriptionItems