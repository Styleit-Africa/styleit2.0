import { Button } from '@/components/ui/button'
import { subscriptions } from '@/static/data'
import React, { useEffect } from 'react'
import SubscriptionCard from './SubscriptionCard';
import { useParams } from 'react-router-dom';
import SubscriptionHeader from './SubscriptionHeader';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Card, CardContent } from '@/components/ui/card';
import { CreditCard } from 'lucide-react';

const ShowSubscription = () => {
    const {id} = useParams();
    const singleSubscription = subscriptions.find(subscription=>subscription.id == id);

    if(singleSubscription == undefined){
        return (

              <Card>
                <CardContent className="flex flex-col items-center justify-center py-12">
                <CreditCard className="w-12 h-12 text-slate-300 mb-4" />
                <p className="text-slate-500">Subsription is currently not available</p>
                </CardContent>
            </Card>
    )
        
    }

    console.log(singleSubscription)

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