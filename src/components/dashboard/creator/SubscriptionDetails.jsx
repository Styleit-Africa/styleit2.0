import { Button } from '@/components/ui/button'
import { subscriptionDetails, subscriptions } from '@/static/data'
import React from 'react'

const SubscriptionDetails = () => {
  return (
    <section className='mt-12'>
        <h2 className='text-center text-xl font-[700] capitalize mb-5'>subscription details</h2>
       <div className='hidden md:block'>
            <div className='flex justify-between'>
                    <h3 className='basis-[15%]'>date</h3>
                    <h3 className='basis-[15%]'>time</h3>
                    <h3 className='basis-[15%]'>plan type</h3>
                    <h3 className='basis-[15%]'>start date</h3>
                    <h3 className='basis-[15%]'>end date</h3>
                    <h3 className='basis-[15%]'>payment status</h3>
                    <h3 className='basis-[15%]'>sub status</h3>
                
            </div>
            <div>
            {
                    subscriptionDetails.map(detail=>{
                        return(
                        <div className='flex justify-between capitalize '>
                            <p className='mt-4 basis-[15%]'>{detail.date}</p>
                            <p className='mt-4 basis-[15%]'>{detail.time}</p>
                            <p className='mt-4 basis-[15%]'>{detail.planType}</p>
                            <p className='mt-4 basis-[15%]'>{detail.startDate}</p>
                            <p className='mt-4 basis-[15%]'>{detail.endDate}</p>
                            <p className='mt-4 basis-[15%]'>{detail.paymentStatus}</p>
                            <p className='mt-4 basis-[15%]'>{detail.subStatus}</p>
                        </div>
                        )
                    })
                }
            </div>
       </div>
    </section>
  )
}

export default SubscriptionDetails