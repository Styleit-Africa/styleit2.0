import React from "react";
import Header from "../components/global/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/global/Footer";
import SidebarContainer from "@/components/global/SidebarContainer";


const Layout =()=>{
    return(
        <>  
            <Header/>
            <SidebarContainer/>
                <main className="">
                    <Outlet/>
                </main>
            <Footer/>


        </>
    )
}
export default Layout