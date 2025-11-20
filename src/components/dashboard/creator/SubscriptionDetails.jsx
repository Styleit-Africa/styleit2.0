import AdminUserLoader from '@/components/global/loaders/AdminUserLoader'
import CreatorLoader from '@/components/global/loaders/CreatorLoader'
import { Button } from '@/components/ui/button'
import { subscriptionDetails, subscriptions } from '@/static/data'
import { useCreatorStore } from '@/store/creatorStore/useCreator'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

const SubscriptionDetails = () => {
    const {getSubscriptionHistories} = useCreatorStore()
    const [_subscriptionDetails,setSubscriptionDetails] = useState([])
      
    const { data, isLoading } = useQuery({
        queryKey: ['subscription-histories'],
        queryFn:getSubscriptionHistories
    })
    console.log(data)
  return (
    <section className='mt-12'>
        <h2 className='text-center text-xl font-[700] capitalize mb-5'>subscription details</h2>
       <div className='hidden md:block'>
            <div className='flex justify-between'>
                    <h3 className='text-lg capitalize font-[500] basis-[15%]'>date</h3>
                    <h3 className='text-lg capitalize font-[500] basis-[15%]'>time</h3>
                    <h3 className='text-lg capitalize font-[500] basis-[15%]'>plan type</h3>
                    <h3 className='text-lg capitalize font-[500] basis-[15%]'>start date</h3>
                    <h3 className='text-lg capitalize font-[500] basis-[15%]'>end date</h3>
                    <h3 className='text-lg capitalize font-[500] basis-[15%]'>payment status</h3>
                    <h3 className='text-lg capitalize font-[500] basis-[15%]'>sub status</h3>
                
            </div>
            <div>

              {
                isLoading?<AdminUserLoader/>: <div>
                 {
                    data.subscriptions.map(subscription=>{
                        return(
                        <div className='flex justify-between capitalize '>
                            <p className='mt-4 basis-[15%]'>{subscription.date}</p>
                            <p className='mt-4 basis-[15%]'>{subscription.time||'time'}</p>
                            <p className='mt-4 basis-[15%]'>{subscription.planType||'planType'}</p>
                            <p className='mt-4 basis-[15%]'>{subscription.startDate}</p>
                            <p className='mt-4 basis-[15%]'>{subscription.endDate}</p>
                            <p className='mt-4 basis-[15%]'>{subscription.paymentStatus}</p>
                            <p className='mt-4 basis-[15%]'>{subscription.subStatus}</p>
                        </div>
                        )
                    })
                }
                  
                </div>
              }
            {/* {
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
                } */}
            </div>
       </div>
    </section>
  )
}

export default SubscriptionDetails