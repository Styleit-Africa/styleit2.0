import {create} from 'zustand';
import Cookies from 'js-cookie';
import axios from 'axios';


export const useAuth = create((set,get)=>({
    token:Cookies.get('token')||null,
    user:Cookies.get('user')?JSON.parse(Cookies.get('user')):null,
    status:null,
    error:null,
    role:null,
    isLoading:false,
    setRole:(role)=>{
        set({role})
    },
    login:async(data)=>{
        const {role} = get()
        console.log(role,'role')
        set({isLoading:true})
        try{
           const response = await axios.post(`https://styleitafrica.pythonanywhere.com/api/${role==='designer'?'designer':'user/customer'}/login`,data)
            if(response.status == 200){
                console.log(response?.data?.customer)
                const getToken = role==='designer'?response.data.token:response.data.access_token
                const getUser = role==='designer'?{...response?.data?.creator,role:'designer'}:
                {...response?.data?.customer,role:'client'}
                Cookies.set('token',getToken)
                Cookies.set('user',JSON.stringify(getUser))
                set({
                    token:getToken,
                    isLoading:false,error:null,user:getUser})
                    console.log(response)
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
        const {role} = get()
        set({isLoading:true})
        try{
            const response = await axios.post(`https://styleitafrica.pythonanywhere.com/api/${role==='designer'?'designer/':'customer/'}/signup`,data,
                  {
               headers: {
                 'Content-Type': 'multipart/form-data',
               },
               withCredentials: false, 
             }
               )
            if(response.status === 201 || response.status === 200){
                Cookies.set('token',response.data.access_token)
                Cookies.set('user',JSON.stringify(role==='designer'?{...response?.data?.creator,role:'designer'}:
                    {...response?.data.customer,role:'client'}))
                set({token:role==='designer'? response.data.token:response.data.access_token,isLoading:true,
                    user:role==='designer'?{...response?.data?.creator,role:'designer'}:
                    {...response?.data.customer,role:'client'},error:null})
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
        set({token:null,user:null,isLoading:false})
        
    }
}))