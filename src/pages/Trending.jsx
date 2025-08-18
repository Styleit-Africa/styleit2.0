import TrendingContents from "@/components/dashboard/TrendingContents"
import React from "react"

const Trending = ()=>{
    return(
        <section data-testid="trending-page" className="py-24 px-4 md:px-0 font-lato">
            <TrendingContents/>
        </section>
    )
}

export default Trending
