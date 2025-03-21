import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import african from '../../images/african.png'
import logo from '../../images/logo.png'
import emailIcon from '../../images/mdi-light_email.png' 
import passwordIcon from '../../images/mdi_password-outline.png' 
import upload from '../../images/upload.png' 

import {
  Form,FormControl,FormDescription,
  FormField,FormItem,FormLabel,FormMessage,
} from "@/components/ui/form"
import {
  Select,SelectContent,
  SelectItem,SelectTrigger,SelectValue,
} from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { registerSchema } from '@/validations/authValidation'
import Reasons from '@/components/auth/Reasons'
import { Link } from 'react-router-dom'
import { countries, reasons } from '@/static/data'
import Join from '@/components/auth/Join'
import { useAuthService } from '@/store/useAuthService'
import SignUpForm from '@/components/auth/SignUpForm'
import ToggleAuthPage from '@/components/global/ToggleAuthPage'
import useToggleAuthPage from '@/hooks/useToggleAuthPage'


const SignUp = ()=> {

    const {isSignUpForm,role} = useAuthService((state)=>state)
    const {togglePage} = useToggleAuthPage()
  
  const onSubmit = (role)=>{
    togglePage()
  }

  return (
    <section className='pb-16'>
           {
            role == 'Fashion' ?
             <SignUpForm 
            reasons={reasons.clientSignUp} image={african} 
            header="join as fashion designers and make your works known"/>:   
            <SignUpForm  
            reasons={reasons.fashionSignUp} image={african} 
            header="join as fashion designers and make your works known"/>
        }

        {
            isSignUpForm && <ToggleAuthPage page="signUp" role={role}/>

        }
    </section>
  )
}



export default SignUp