import Cookies from 'js-cookie';
import {react} from 'react'
import { useLocation } from "react-router-dom";
import PostCard from './PostCard';

const PostContainer = ({pages,userProfile,follow})=>{
    const {pathname} = useLocation();
    const user = Cookies.get('user')
    console.log(pages,'jk')
    return(
        <div>
            {
                <div>
                    
                    {
                        pages?.map(page=>{
                                // console.log('page '+ page)
                                return page?.posts.map(post=>{
                                // console.log(post,'for')
                                return(
                                    <PostCard
                                     follow={follow} 
                                    //  data={data}
                                    //  userProfile={pathname !== '/creator/posts'?data?.creator:
                                    //     {firstName:user?.firstName,lastName:user?.lastName,businessname:user?.businessName}} 
                                    userProfile={{firstName:'uthman',lastName:'fatai'}}
                                        post={post} key={post.id}
                                    
                                    />
                        )
                    })
                        })
            }
                </div>
            }

         </div>
    )
}

export default PostContainer