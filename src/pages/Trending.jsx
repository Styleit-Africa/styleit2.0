import PostContainer from "@/components/global/post/PostContainer"
import { userProfile } from "@/static/data"


const Trending = ()=>{
    return(
        <section className="py-24 px-4 md:px-0 font-lato">
            <PostContainer follow={false} userProfile={userProfile}/>
        </section>
    )
}

export default Trending