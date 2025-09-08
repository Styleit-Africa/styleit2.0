import axios from 'axios';
import Cookies from 'js-cookie';
import {create} from 'zustand';

export const useComment = create((set,get)=>({
    isCommentOpened:false,
    setIsCommentOpened:()=>{
        const {isCommentOpened} = get()
        set({isCommentOpened:!isCommentOpened})
    },
    comment:'',
    setComment:(comment)=>{
        console.log(comment)
        set({comment})
    },
    storeComment: async(id)=>{
        const {comment} = get();
        console.log(comment,'comment')
       return await axios.post(`https://styleitafrica.pythonanywhere.com/api/comment/${id}/`,{comment},{
          headers: {
                 Authorization: `Bearer ${Cookies.get('token')}`,
                 'Content-Type': 'application/json',
                },

            })
    }

}))