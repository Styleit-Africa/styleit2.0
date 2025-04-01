import React from "react";
import { Outlet } from "react-router-dom";
import LinkTabsContainer from "@/components/global/linkTabs/LinkTabsContainer";


const ClientLayout =()=>{
    return(
        <>  
          <LinkTabsContainer/>
          <Outlet/>

        </>
    )
}
export default ClientLayout