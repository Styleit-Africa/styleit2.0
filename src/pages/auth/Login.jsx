import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import young from '../../images/young.png'
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


const Login = ()=> {
  const form = useForm({
    resolver:zodResolver(loginSchema),
    defaultValues:{
        email:'',
        password:''
    }
  })

  const onSubmit = (values)=>{
    console.log(values)
  }

  return (
    <section className='flex flex-col md:flex-row max-w-[900px] mx-auto  pt-20'>
        <Reasons image={young} isSignUp={false} header="Ready to find your next client ? let's go"/>

        <div className='flex-[0.5]  px-12 flex flex-col md:flex-col'>
            <div className='text-center  md:hidden'>
                <img src={logo} className='block mx-auto' alt="" />
                <h2 className='font-[500] font-lato text-xl mt-8 mb-12'>Login to your account</h2>
            </div>
            <div className='font-lato  text-lg text-center md:text-left hidden md:block'>
                <img src={logo} className='block mx-auto' alt="" />
                <h2 className='font-[500] font-lato mt-8 mb-2'>Login to your account</h2>
                <p className="font-lato">Don't have an account ? <Link to='/signUp' className='text-primary capitalize font-[500]'>sign up</Link></p>
                <div className='flex justify-center items-center gap-2 py-3 rounded-md w-full mt-4 shadow-[0px_1px_2px_0px_#FF617C4D] px-7 '>
                    <img src={google} className='w-[30px]' alt="" />
                    <p>Continue with google</p>
                </div>
                    <span className='text-center my-4 block'>OR</span>
            </div>
             
                <Form {...form} className='flex-[0.5]'>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <div className='relative'>
                    <img src={emailIcon} className='absolute top-5 left-4 w-[20px] h-[20px]' alt="" />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input type="email" placeholder="Enter email" className="text-lg border border-secondary  placeholder:font-lato placeholder-secondary pl-12 py-7 rounded-xl outline-[0]" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                            />
                  </div>
                  <div className='relative'>
                    <img src={passwordIcon} className='absolute top-5 left-4 w-[20px] h-[20px]' alt="" />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input type="password" placeholder="Enter password" className="text-lg border border-secondary  placeholder:font-lato placeholder-secondary pl-12 py-7 rounded-xl outline-[0]" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                            />
                  </div>


                    <Button type="submit" className='w-full text-white rounded-xl text-lg py-6'>Login</Button>
                </form>
            </Form>
            <div className='text-center md:hidden'>
                    <span className='text-center my-4 block'>OR</span>
                <div className='flex justify-center items-center gap-2 py-3 rounded-md w-full mt-4 shadow-[0px_1px_2px_0px_#FF617C4D] px-7 '>
                    <img src={google} className='w-[30px]' alt="" />
                    <p>Continue with google</p>
                </div>
            <p className="font-lato mt-8">Don't have an account ? <Link to='/signUp' className='text-primary capitalize font-[500]'>sign up</Link></p>
            </div>
         </div>
    </section>
  )
}



export default Login