import React from "react";
import { Outlet } from "react-router-dom";
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