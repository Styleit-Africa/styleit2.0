import { dashboardTabs } from '@/static/adminData'
import { User } from 'lucide-react'
import React from 'react'

const DashboardTabs = ({currentTab,setCurrentTab}) => {

    const updateTab =index=>{
        setCurrentTab(index)
    }
  return (
    <div>
          <div className='flex flex-col md:flex-row gap-5 flex-wrap mt-9'>
        {
            dashboardTabs.map((tab,index)=>{
                return(
                    <div className={`shadow-md rounded-md grow-1 py-5 px-7 basis-[23%] text-lightGray
                     ${index === currentTab ? 'bg-gradient-to-l to-[55%] ':'bg-gradient-to-tr'} from-primary to-sidebar to-[35%] 
                      hover:bg-gradient-to-bl cursor-pointer `} onClick={()=>updateTab(index)} >
                        <div className='flex items-center justify-between'>
                            <p className='text-xl mt-4'>{tab.total}</p>
                            <User className='w-14 h-14'/>
                        </div>
                        <h1 className='text-2xl tracking-wide text-center font-[500] capitalize mt-4'>{tab.name}</h1>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default DashboardTabs