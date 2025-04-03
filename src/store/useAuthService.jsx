import {create} from 'zustand'

export const useAuthService = create((set)=>({
    user:{name:'uthman',role:'creator'},
    isLoginForm:false,
    isSignUpForm:false,
    role:'Fashion',
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