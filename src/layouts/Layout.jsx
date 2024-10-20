import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


const Layout =()=>{
    return(
        <>  
            <Header/>
                <main className="mb-44">
                    <Outlet/>
                </main>
            <Footer/>


        </>
    )
}
export default Layout