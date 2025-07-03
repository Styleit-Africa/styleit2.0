import Creators from '../../creator/Creators'
import {  userDashboardTabs,creatorDashboardTabs } from '@/static/adminData'
import { useGlobalStore } from '@/store/global/useGlobal'
import { useCreatorStore } from '@/store/useCreator'
// import { useCreatorStore } from '@/store/useCreator'
import React, { useState } from 'react'


const CreatorDashboardTabs = () => {
    const {setFilterCreator} = useCreatorStore(state=>state)
    const [currentIndex,setCurrentIndex] = useState(0)
        const updateSearchData = (tab,index)=>{
            setCurrentIndex(index)
            switch(tab){
                case 'active subscribers':
                    setFilterCreator('active')
                break;
                case 'top performance':
                    setFilterCreator('active')
                break;
                case  'suspended/banned':
                    setFilterCreator('two')
                break;
                default:
                    setFilterCreator(tab)
            }
        }
    
  return (
   <div>
         <div className='flex mb-5'>
        {
            creatorDashboardTabs.map((tab,index)=>{
                return(

                    <div className='flex-[0.4]'>
                        <button  className={`w-full border-b-[3px] border-sidebar
                         text-lightGray capitalize py-2
                         ${index === currentIndex?'border-primary border-b-primary text-primary':'text-sidebar' }`}
                         onClick={()=>updateSearchData(tab,index)}
                         >{tab}</button>
                    </div>
                )
            })
        }
    </div>
   
   <div>
         <Creators />
   </div>
   </div>
  )
}

export default CreatorDashboardTabs