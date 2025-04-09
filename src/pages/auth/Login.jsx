import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import young from '../../images/young.png'
import redLady from '../../images/redLady.png'
import { loginSchema } from '@/validations/authValidation'
import { useAuthService } from '../../store/useAuthService'
import LoginForm from '@/components/auth/LoginForm'
import { reasons } from '@/static/data'
import ToggleAuthPage from '@/components/global/ToggleAuthPage'


const Login = ()=> {
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

    <section data-testid="login-page"  className='pb-16'>
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