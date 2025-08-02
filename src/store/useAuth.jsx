import {create} from 'zustand';
import Cookies from 'js-cookie';
import axios from 'axios';


export const useAuth = create((set,get)=>({
    token:Cookies.get('token')||null,
    user:Cookies.get('user')?JSON.parse(Cookies.get('user')):null,
    // user:null,
    error:null,
    isLoading:false,
    login:async(data)=>{
                set({isLoading:true})
        try{
           const response = await axios.post('https://styleitafrica.pythonanywhere.com/api/designer/login',data)
            if(response.status == 200){
                Cookies.set('token',response.data.token)
                Cookies.set('user',JSON.stringify(response.data.creator))
                set({token:response.data.token,error:null,user:response.data.creator})
            }
       }catch(e){
        if(e.status === 400){
                set({isLoading:false,error:e.response.data.error})
       }
       }
    }, 
    signUp:async(data)=>{
                set({isLoading:true})
        try{
            const response = await axios.post('https://styleitafrica.pythonanywhere.com/api/designer/signup',data,
                  {
               headers: {
                 'Content-Type': 'multipart/form-data',
               },
               withCredentials: false, // Important for CORS
             }
               )
            if(response.status == 200){
                Cookies.set('token',response.data.token)
                set({token:response.data.token,error:null})
            }
       }catch(e){
        if(e.status === 400){
                set({isLoading:false,error:e.response.data.error})
            }
       }
    },
    logout:async()=>{
        Cookies.remove('token')
        set({token:null,isLoading:false})
    }
}))
// yunusabdullateef95@gmail.com