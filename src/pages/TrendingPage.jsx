import TrendingContents from "@/components/dashboard/TrendingContents"
import React from "react"

const TrendingPage = ()=>{
    return(
        <section data-testid="trending-page" className="py-20 px-4  font-lato">
            <TrendingContents/>
        </section>
    )
}

export default TrendingPage
