import DashboardTabs from '@/components/dashboard/tabs/DashboardTabs';
import glass from '../../images/search-normal.png';

import React, { useState } from 'react'
import CurrentTab from '@/components/dashboard/tabs/CurrentTab';
import SearchBar from '@/components/global/SearchBar';
import SearchContainer from '@/components/global/SearchContainer';
import { useGlobalStore } from '@/store/global/useGlobal';

const Dashboard = () => {

  const {currentTab,setCurrentTab} = useGlobalStore(state=>state)
  return (
    <section data-testid="dashboard-page"  className='mt-4 font-lato  pb-20'>
      <SearchContainer/>
      <div className="bg-green-200 px-4 xl:px-0 py-2">
      <div className=' container'>

      <div className='flex  gap-7 items-center md:max-w-[900px] '>
       <div className='hidden md:block flex-[0.7] '>
       <form>
        <SearchBar 
        placeholder='search anything here'
        imageIcon={glass}
        styles={{
          img:'absolute top-4 left-3  w-[20px]',
          input:'pl-10 w-full border placeholder-gray-400 border-green-500 outline-none bg-green-200 rounded-lg h-12'
        }} />
         
        </form>
       </div> 

       {/* dashboard tabs */}

       <DashboardTabs setCurrentTab={setCurrentTab} currentTab={currentTab}/>
       </div>
      </div>
      </div>

      <div className=' container'>

      <div className='' >
        <CurrentTab currentTab={currentTab} />
      </div>
      </div>
    </section>
  )
}

export default Dashboard