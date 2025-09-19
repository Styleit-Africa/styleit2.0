import React from "react";
import Header from "../components/global/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/global/Footer";
import SidebarContainer from "@/components/global/SidebarContainer";
import { Toaster } from "@/components/ui/sonner";


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
                <Toaster 
            toastOptions={{
                className: "text-xl text-white bg-gradient-to-tr from-primary to-sidebar",
                style: {
                background: 'linear-gradient(to top right, #FF617C, #27213c)',
                color: '#fff',
                border:'none'
                },
                        descriptionClassName: "text-white",

            }}
            />
            
        </>
    )
}
export default Layout