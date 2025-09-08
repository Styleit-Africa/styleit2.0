import { useLocation } from 'react-router-dom'
import PostCard from './PostCard'
import React from "react"
import Cookies from 'js-cookie';


const PostContainer = ({data,userProfile,follow})=>{
    const {pathname} = useLocation();
    const user = Cookies.get('user')
    console.log(data)
    return(
        <div>
            
            {
                <div>
                    {
                    data?.posts?.map(post=>{
                        return(
                            <PostCard 
                             follow={follow} 
                             data={data}
                             userProfile={pathname !== '/creator/posts'?data.creator:
                                {firstName:user?.firstName,lastName:user?.lastName,businessname:user?.businessName}} 
                                post={post} key={post.id}/>
                )})
            }
                </div>
            }

         </div>
    )
}
// 689f47301fba868c24547a66
export default PostContainer