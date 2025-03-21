import React from "react";
import Header from "../components/global/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/global/Footer";
import SidebarContainer from "@/components/global/SidebarContainer";
import LinkTabs from "@/components/global/linkTabs/LinkTabs";
import LinkTabsContainer from "@/components/global/linkTabs/LinkTabsContainer";


const CreatorLayout =()=>{
    return(
        <>  
          <LinkTabsContainer/>
          <Outlet/>

        </>
    )
}
export default CreatorLayout