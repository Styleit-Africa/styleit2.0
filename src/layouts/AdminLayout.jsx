import AdminSidebar from "@/components/admin/sidebar/AdminSidebar";
import React from "react";
import { Outlet } from "react-router-dom";


const AdminLayout =()=>{
    return(
        <main className="flex">
          <AdminSidebar/>
          <div className="w-full">
            <Outlet/>
          </div>
        </main>
    )
}
export default AdminLayout