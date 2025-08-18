import {create} from 'zustand';
import Cookies from 'js-cookie';
import axios from 'axios';


export const useAuth = create((set,get)=>({
    token:Cookies.get('token')||null,
    user:Cookies.get('user')?JSON.parse(Cookies.get('user')):null,
    status:null,
    error:null,
    isLoading:false,
    login:async(data)=>{
                set({isLoading:true})
        try{
           const response = await axios.post('https://styleitafrica.pythonanywhere.com/api/designer/login',data)
            if(response.status == 200){
                Cookies.set('token',response.data.token)
                Cookies.set('user',JSON.stringify(response.data.creator))
                set({token:response.data.token,
                    isLoading:false,error:null,user:response.data.creator})
                    return response
            }
       }catch(e){
        console.log(e)
        if(e.status === 400){
                set({isLoading:false,status:e.status,error:e.response.data.error})
       }
       return e.response;
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
               withCredentials: false, 
             }
               )
            if(response.status === 201){
                Cookies.set('token',response.data.access_token)
                Cookies.set('user',JSON.stringify(response.data.creator))
                set({token:response.data.token,isLoading:true,user:response.data.creator,error:null})
                return response;
            }
            console.log(response)
       }catch(e){
        if(e.status === 400){
                set({isLoading:false,error:e.response.data.error})
        }
        console.log(e)
            return e.response
       }
    },
    logout:async()=>{
        Cookies.remove('token')
        Cookies.remove('user')
        Cookies.remove('creator')
        set({token:null,isLoading:false})
    }
}))
// yunusabdullateef95@gmail.com