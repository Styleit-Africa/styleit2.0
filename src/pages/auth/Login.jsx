import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import young from '../../images/young.png'
import redLady from '../../images/redLady.png'
import logo from '../../images/logo.png'
import google from '../../images/devicon_google.png'
import emailIcon from '../../images/mdi-light_email.png' 
import passwordIcon from '../../images/mdi_password-outline.png' 

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { loginSchema } from '@/validations/authValidation'
import Reasons from '@/components/auth/Reasons'
import { Link } from 'react-router-dom'
import { useAuthService } from '../../store/useAuthService'
import Join from '@/components/auth/Join'
import LoginForm from '@/components/auth/LoginForm'
import { reasons } from '@/static/data'
import ToggleAuthPage from '@/components/global/ToggleAuthPage'


const Login = ()=> {
    // const [isLoginForm,setIsLoginForm] = useState(false)
  const form = useForm({
    resolver:zodResolver(loginSchema),
    defaultValues:{
        email:'',
        password:''
    }
  })

  const {isLoginForm,role,setIsLoginForm} = useAuthService((state)=>state)
  console.log(role)

  const onSubmit = (values)=>{
    console.log(values)
  }

  return (

    <section className='pb-16'>
        {
            role == 'Fashion' ?
             <LoginForm 
            reasons={reasons.clientLogin} image={young} 
            header="Ready to find your next client ? let's go"/>:   
            <LoginForm  
            reasons={reasons.fashionLogin} image={redLady} 
            header="Ignite your style with styleit africa"/>
        }

        {
            isLoginForm && <ToggleAuthPage role={role} page='login'/>
        }
      
    </section>

  )
}



export default Login