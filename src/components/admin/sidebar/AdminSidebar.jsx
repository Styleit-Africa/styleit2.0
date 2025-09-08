import React from "react"
import adminImage from '@/images/profile_i.png'
import AdminLinkContainer from "./AdminLinkContainer"
import { useGlobalStore } from "@/store/global/useGlobal"

const AdminSidebar = ()=>{
    const {isAdminOpened} = useGlobalStore(state=>state)

    
   return(
       <aside className={`bg-sidebar  overflow-hidden  lg:w-[380px] transition-all duration-300 text-lightGray font-lato  ${isAdminOpened ? 'w-[380px]':'w-0'}  `} >
    <div className="text-center mt-16 border-b-2 border-sidebar">
        <img src={adminImage} alt="" className="w-[130px] h-[130px] block mx-auto" />
        <p className="text-lg mt-4">Yunus Abdullateef</p>
        <p className="text-lg">style1233258@</p>
    </div>
    <AdminLinkContainer/>
</aside>
   )
}

export default AdminSidebar 