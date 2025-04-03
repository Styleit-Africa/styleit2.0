import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { useGlobalStore } from '@/store/global/useGlobal'

const SidebarContainer = () => {
  const {setIsSidebarOpened,isSidebarOpened} = useGlobalStore(state=>state)

  const handleSideBar = (e)=>{
    const element = e.target.tagName.toLowerCase()
    console.log(element)
    if(element.includes('a','aside')){
      setIsSidebarOpened()
    }
  }
  return (
    <aside onClick={handleSideBar} className={` cursor-pointer backdrop-blur-[0.2rem] bg-white/20 z-20  fixed top-[180px]  overflow-hidden md:top-[96px] transition-all duration-300 bottom-0 w-0 right-0  ${isSidebarOpened ? "  w-[100%]":"w-0" } `}>
        <Sidebar/>
    </aside>
  )
}

export default SidebarContainer