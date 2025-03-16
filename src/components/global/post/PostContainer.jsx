import { posts } from '@/static/data'
import PostCard from './PostCard'


const PostContainer = ({userProfile,follow})=>{
    return(
        <div>
            {
                    posts.map(post=>{
                        return(
                            <PostCard follow={follow} post={post} key={post.id}/>
                )})
            }
         </div>
    )
}

export default PostContainer