import React from 'react'
import CreatorDashboardTabs from './CreatorDashboardTabs'
import Creators from '../../creator/Creators'

const DashboardCreator = () => {
  return (
    <div>
        <CreatorDashboardTabs/>
        <div className='mt-5'>
         <Creators />
        </div>

    </div>
  )
}

export default DashboardCreator