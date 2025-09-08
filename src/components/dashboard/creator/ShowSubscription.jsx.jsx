import { Button } from '@/components/ui/button'
import { subscriptions } from '@/static/data'
import React from 'react'
import SubscriptionCard from './SubscriptionCard';
import { useParams } from 'react-router-dom';
import SubscriptionHeader from './SubscriptionHeader';

const ShowSubscription = () => {
    const {id} = useParams();
    const singleSubscription = subscriptions.find(subscription=>subscription.id == id);

    if(singleSubscription == undefined){
        return <h1>Subsription is currently not available</h1>
    }

  return (
        <section data-testid="show-subscription" className=' md:pt-16 pb-20  md:pb-32 px-4 md:px-0'>

            <div className='text-center pt-12 font-lato'>
                <SubscriptionHeader/>
            </div>
            <div className='max-w-[450px] mx-auto'>
                <SubscriptionCard 
                 subscription={singleSubscription}   btnContent="Subscribe now"
                subscriptions={subscriptions} isShow={true}/>
            </div>
        </section>
  )
}

export default ShowSubscription