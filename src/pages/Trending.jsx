import PostContainer from "@/components/global/post/PostContainer"
import { userProfile } from "@/static/data"


const Trending = ()=>{
    return(
        <section className="py-24 font-lato">
            <PostContainer userProfile={userProfile}/>
        </section>
    )
}

export default Trending