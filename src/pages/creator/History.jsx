
import React from 'react'

import SubscriptionHistory from '@/components/dashboard/creator/SubscriptionHistory'

const History = ()=>{

    
    return(
        // <section data-testid="history-page"  className=' bg-gradient-to-br to-pink-50  to-[50%] from-[50%] md:to-[54.2%] from-gray-50 md:from-[54.7%] font-lato pt-8 pb-20 px-4 xl:px-0'>
        <section data-testid="history-page"  className=' font-lato pt-8 pb-20 px-4 xl:px-0'>
           <div className="container">
                <SubscriptionHistory/>
            </div> 
        </section>
    )
}

export default History


