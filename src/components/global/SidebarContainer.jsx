import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useGlobalStore } from '@/store/global/useGlobal'

const SidebarContainer = () => {
  const {isSidebarOpened} = useGlobalStore(state=>state)

  return (
    <sidebar className={`backdrop-blur-[0.2rem] bg-white/20 z-20  fixed top-[180px]  overflow-hidden md:top-[96px] transition-all duration-300 bottom-0 w-0 right-0  ${isSidebarOpened ? "  w-[100%]":"w-0" } `}>
    {/* // <sidebar className={`backdrop-blur-[0.2rem] bg-white/20 z-50  fixed  overflow-hidden top-[96px] transition-all duration-300 left-0 h-0 right-0  ${isSidebarOpened ? "  h-[100%]":"h-0" } `}> */}
    <div className={` w-full h-full   } `}>
        <Sidebar/>
        </div>
    </sidebar>
  )
}

export default SidebarContainer