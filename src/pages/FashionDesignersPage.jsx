import React from "react"
import { useAuth } from "@/store/useAuth";
import AllFashionDesigners from "@/components/dashboard/creator/fashionDesigners/AllFashionDesigners";
import Login from "./auth/Login";

const FashionDesignersPage = ()=>{
       const {user} = useAuth()
    if(!user){
        return(
                <Login/>
        )
    }
    return(
        <section data-testid="fashion-page" className=" px-4 md:px-0 font-lato">
            <AllFashionDesigners/>
        </section>
    )
}

export default FashionDesignersPage



