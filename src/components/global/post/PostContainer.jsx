import { posts } from '@/static/data'
import PostCard from './PostCard'


const PostContainer = ({userProfile})=>{
    console.log(userProfile)
    return(
        <div>
            {
                    posts.map(post=>{
                        return(
                            <PostCard post={post} key={post.id}/>
                )})
            }
         </div>
    )
}

export default PostContainer