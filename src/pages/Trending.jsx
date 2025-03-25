import PostContainer from "@/components/global/post/PostContainer"
import { userProfile } from "@/static/data"
import React from "react"

const Trending = ()=>{
    return(
        <section data-testid="trending-page" className="py-24 px-4 md:px-0 font-lato">
            <PostContainer follow={false} userProfile={userProfile}/>
        </section>
    )
}

export default Trending