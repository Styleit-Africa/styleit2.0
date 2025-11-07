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
import { useAuth } from '@/store/useAuth'


const Login = ()=> {

  const {isLoginForm} = useAuthService((state)=>state)
  const {role} = useAuth();

  return (

    <section data-testid="login-page"  className='pb-16'>
        {
            role == 'designer' ?
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