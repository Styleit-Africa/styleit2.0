import { Button } from '@/components/ui/button'
import { subscriptions } from '@/static/data'
import React from 'react'
import SubscriptionCard from './SubscriptionCard';
import { Link, useParams } from 'react-router-dom';
import SubscriptionHeader from './SubscriptionHeader';

const  ProceedSubscription = () => {
    const {id} = useParams();
    const singleSubscription = subscriptions.find(subscription=>subscription.id == id);

    if(singleSubscription == undefined){
        return <h1>Subsription is currently not available</h1>
    }

  return (
        <section className='container font-lato md:pt-16   pb-32 px-4 xl:px-0'>
            <div className='text-center pt-7 font-lato'>
                <SubscriptionHeader/>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className='flex flex-col md:flex-row gap-6 md:gap-12 basis-[50%]'>
                        <div className='mt-6 md:mt-0'>
                            <p className='capitalize font-[500] '>full name:<span className='ml-3 md:ml-0 font-[200]'>Opeyemi Moses</span></p>
                            <p className='capitalize mt-2 font-[500] '>payment date:<span className='ml-3 md:ml-0 font-[200]'>22-08-2024</span></p>
                            <p className='capitalize mt-2 font-[500] '>amount paid:<span className='ml-3 md:ml-0 font-[200]'>500.00</span></p>
                        </div>
                        <div>
                            <p className='capitalize font-[500] '>Business name:<span className='ml-3 md:ml-0 font-[200]'>ariky stitches</span></p>
                            <p className='capitalize mt-2 font-[500] '>payment reference:<span className='ml-3 md:ml-0 font-[200]'>25903501</span></p>
                            <p className='capitalize mt-2 font-[500] '>payment status:<span className='ml-3 md:ml-0 font-[200]'>pending</span></p>
                        </div>
                    </div>
                    <div className='hidden md:block basis-[30%]'>
                        <SubscriptionCard 
                        subscription={singleSubscription}   btnContent="Pay now"
                        subscriptions={subscriptions} isShow={true}/>
                    </div>
                    <Link to={`/subscriptions/${singleSubscription.id}`} className='md:hidden capitalize block ont-[500] text-lg px-0 py-4 md:py-6 rounded-xl bg-white border border-primary hover:bg-primary hover:text-white
                                    w-full mt-16 md:mt-9 bg-[#FF617C] text-center text-white hover:bg-[#ffffff] hover:text-[#FF617C]'>Pay now</Link>
            </div>
        </section>
  )
}

export default  ProceedSubscription