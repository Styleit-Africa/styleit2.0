import axios from 'axios';
import Cookies from 'js-cookie';
import {create} from 'zustand';

export const usePost = create((set,get)=>({
    isCommentOpened:false,
    setIsCommentOpened:()=>{
        const {isCommentOpened} = get()
        set({isCommentOpened:!isCommentOpened})
    },
    isShared:false,
    setIsShared:(value)=>{
        set({isShared:value})
    },
    comment:'',
    setComment:(value)=>{
        set({comment:value})
    },
    showReport:false,
    setShowReport:(value)=>{
        set({showReport:value})
    },
     storePost:async(data)=>{
      console.log(data,'store')
        const response =  await axios.post('https://styleitafrica.pythonanywhere.com/api/posting',data,{
          headers: {
                 Authorization: `Bearer ${Cookies.get('token')}`,
                 'Content-Type': 'multipart/form-data'
        }
      })
      return response.data;
    },
    deletePost:async(postid)=>{
             try{
                  const response = await axios.post(`https://styleitafrica.pythonanywhere.com/api/trashit/`,{postid},{
              headers: {
                     Authorization: `Bearer ${Cookies.get('token')}`,
                     'Content-Type': 'application/json',
                     Accept:'application/json'
    
            }
          })
            return response
             }catch(e){
                console.log(e)
             }
    },    
    likePost:async(id)=>await axios.post(`https://styleitafrica.pythonanywhere.com/api/like/${id}/`,{},{
              headers: {
                    Authorization: `Bearer ${Cookies.get('token')}`,
                    'Content-Type': 'application/json',
                      Accept:'application/json',
            }
          })

}))