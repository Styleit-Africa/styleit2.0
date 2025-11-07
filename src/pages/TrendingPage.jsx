import TrendingContents from "@/components/dashboard/TrendingContents"
import { useAuth } from "@/store/useAuth"
import React from "react"
import Login from "./auth/Login"

const TrendingPage = ()=>{
    const {user} = useAuth()
    if(!user){
        return(
                <Login/>
        )
    }
    return(
        <section data-testid="trending-page" className="pt-20 pb-32 px-4  font-lato">
            <TrendingContents/>
        </section>
    )
}

export default TrendingPage
