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
    setIsLoading:(isLoading)=>set({isLoading}),
    setRole:(role)=>{
        set({role})
    },
    login:async(data)=>{
        const {role} = get()
        set({isLoading:true})
        let response;
        try{

            switch(role){
                case 'designer':
                    response = await axios.post('https://styleitafrica.pythonanywhere.com/api/designer/login',data)
                        if(response.status == 200){
                        const getToken = response.data.token
                        const getUser = {...response?.data?.creator,role:'designer'}
                        Cookies.set('token',getToken)
                        Cookies.set('user',JSON.stringify(getUser))
                        set({
                            token:getToken,
                            isLoading:false,error:null,user:getUser})
                            return response
                    }
                        if(response.status == 401){
                            set({isLoading:false})
                        }
                break;
                case 'client':
                     response = await axios.post('https://styleitafrica.pythonanywhere.com/api/user/customer/login',data)
                      if(response.status == 200){
                    const getToken = response.data.access_token
                    const getUser = {...response?.data?.customer,role:'client'}
                    Cookies.set('token',getToken)
                    Cookies.set('user',JSON.stringify(getUser))
                    set({
                        token:getToken,
                        isLoading:false,error:null,user:getUser})
                        return response
                }
                if(response.status == 401){
                            set({isLoading:false})
                        }
                break;
                case 'admin':
                     response = await axios.post('https://styleitafrica.pythonanywhere.com/api/admin/login/',data)
                      if(response.status == 200){
                            const getToken = response.data.token
                            const getUser = {...response.data.admin,role:'admin'}
                            Cookies.set('token',getToken)
                            Cookies.set('user',JSON.stringify(getUser))
                            set({
                                token:getToken,isLoading:false,
                                error:null,user:getUser})
                                return response
                        }
                        if(response.status == 401){
                            set({isLoading:false})
                        }
                break;
            }
       }catch(e){
        console.log(e.message)
        if(e.status === 400||e.status === 401){
                set({isLoading:false,status:e.status,error:e.response?.data.error||e.message})
       }
       if(e.message == "Network Error"){
        console.log('yes')
        set({isLoading:false,status:e.status,error:e.response?.data.error||'You are offline'})

       }
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
       }catch(e){ 
        if(e.status === 400||e.status === 401||e.status===409){
                set({isLoading:false,error:e.response.data.error})
        } 
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