import Cookies from 'js-cookie';
import {react} from 'react'
import { useLocation } from "react-router-dom";
import PostCard from './PostCard';

const PostContainer = ({pages,userProfile,follow})=>{
    const {pathname} = useLocation();
    const location = pathname.endsWith('trending')
 
    return(
        <div>
            {/* for treending page */}
            {
                location?
                <div>
                    
                    {
                        pages?.map(page=>{
                                return page?.posts.map(post=>{
                                return(
                                    <PostCard
                                     follow={follow} 
                                        post={post} key={post.id}
                                    
                                    />
                        )
                    })
                        })
            }
                </div>
            : <div>
                {/* for creator profile */}
                {
                    pages.map(post=>{
                                return(
                                    <PostCard
                                     follow={follow} 
                                    userProfile={{firstName:'uthman',lastName:'fatai'}}
                                        post={post} key={post.id}
                                    
                                    />
                        )
                    })
                }
            </div>
            }

         </div>
    )
}

export default PostContainer