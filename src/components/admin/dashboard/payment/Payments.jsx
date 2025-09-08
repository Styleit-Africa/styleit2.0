import React, { useState } from 'react'
import CreatorPayments from '../../creator/payment/CreatorPayments'
import { paymentDashboardTabs } from '@/static/adminData'
import { useCreatorStore } from '@/store/useCreator'
import DashboardPaymentTabs from './DashboardPaymentTabs'

const Payments = () => {
    const [currentIndex,setCurrentIndex] = useState(0)
    const {filterPayments} = useCreatorStore(state=>state)
    const updateTab = (tab,index)=>{
        setCurrentIndex(index)
        filterPayments(tab)
    }
  return (
    <div>
          
        <DashboardPaymentTabs/>
          <div className='mt-5'>
            <CreatorPayments/>
        </div>
    </div>
  )
}

export default Payments