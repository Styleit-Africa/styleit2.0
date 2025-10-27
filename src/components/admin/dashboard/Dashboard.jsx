import React, { useState } from 'react'
import DashboardTabs from './DashboardTabs'
import CurrentDashboardTab from './CurrentDashboardTab'
import { useQuery } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import axios from 'axios'

const Dashboard = () => {
    const [currentTab,setCurrentTab] = useState(0);

    const getDashboardData = async()=> {
        const response = await axios.get('https://styleitafrica.pythonanywhere.com/api/admin/dashboard/',{
            headers:{
              Authorization:`Bearer ${Cookies.get('token')}`,
              'Content-Type': 'application/json',
              Accept:'application/json'
            }
          })
          return response?.data
    }

     const {data,isLoading,error} = useQuery({
            queryKey:['dashboardData'],
            queryFn:getDashboardData,
            staleTime: 1000 * 60 * 3,
            })
    
            console.log(data)
            console.log(error)
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