import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LinkTabsContainer from "@/components/global/linkTabs/LinkTabsContainer";
import Cookies from "js-cookie";


const CreatorLayout =()=>{
  const navigate = useNavigate();
  console.log(JSON.parse(Cookies.get('user')),'here')
  if(JSON.stringify(Cookies.get('user'))?.status === 'deactived'){
    navigate('/verifyAccount')
    
  }
    return(
        <>  
          <LinkTabsContainer/>
          <Outlet/>

        </>
    )
}
export default CreatorLayout