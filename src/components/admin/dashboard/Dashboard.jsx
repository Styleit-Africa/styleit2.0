import React, { useState } from 'react'
import DashboardTabs from './DashboardTabs'
import CurrentDashboardTab from './CurrentDashboardTab'

const Dashboard = () => {
    const [currentTab,setCurrentTab] = useState(0)

  return (
    <div>
        <DashboardTabs 
        currentTab={currentTab}
         setCurrentTab={setCurrentTab}/>
        <CurrentDashboardTab currentTab={currentTab}/>

    </div>
  )
}

export default Dashboard