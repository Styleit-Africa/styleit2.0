import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import LinkTabsContainer from "@/components/global/linkTabs/LinkTabsContainer";
import Cookies from "js-cookie";
import { useAuth } from "@/store/useAuth";


const CreatorLayout =()=>{
  const navigate = useNavigate();
   const {user} = useAuth();
  
   useEffect(()=>{
     if(!user){
       navigate('/login')
      }
      if(JSON.stringify(Cookies.get('user'))?.status === 'deactived'){
        navigate('/verifyAccount')
      }
    },[user,navigate])
    return(
        <>  
          <LinkTabsContainer/>
          <Outlet/>

        </>
    )
}
export default CreatorLayout