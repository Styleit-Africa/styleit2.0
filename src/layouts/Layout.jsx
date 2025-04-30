import React from "react";
import Header from "../components/global/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/global/Footer";
import SidebarContainer from "@/components/global/SidebarContainer";


const Layout =()=>{
    const {pathname} = useLocation();
    console.log()
    return(
        <>  
            <Header/>
            <SidebarContainer/>
                <main className="">
                    <Outlet/>
                </main>

                {
                    pathname.split('/')[1] !== 'admin'&&<Footer/>
                }
            
        </>
    )
}
export default Layout