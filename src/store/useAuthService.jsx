import Cookies from 'js-cookie'
import {create} from 'zustand'

export const useAuthService = create((set)=>({
    user:Cookies.get('user')?JSON.parse(Cookies.get('user')):null,
    isLoginForm:false,
    isSignUpForm:false,
    role:'Client',
    setIsLoginForm:(isLoginForm)=>{

        set((state)=>({...state,isLoginForm}))
    },
    setIsSignUpForm:(isSignUpForm)=>{
        set((state)=>({...state,isSignUpForm}))
    },
    setRole:(role)=>{
        set((state)=>({...state,role}))
    },

}))