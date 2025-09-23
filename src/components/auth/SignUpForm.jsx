import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import african from '../../images/african.png'
import logo from '../../images/logo.png'
import emailIcon from '../../images/mdi-light_email.png' 
import passwordIcon from '../../images/mdi_password-outline.png' 
import upload from '../../images/upload.png' 

import {
  Form,FormControl,
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
import { clientRegisterSchema, designerRegisterSchema } from '@/validations/authValidation'
import Reasons from '@/components/auth/Reasons'
import { Link, useNavigate } from 'react-router-dom'
import { countries } from '@/static/data'
import Join from '@/components/auth/Join'
import { useAuthService } from '@/store/useAuthService'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useAuth } from '@/store/useAuth'
import { Loader } from 'lucide-react'


const SignUpForm = ({reasons,header,image})=> {
  const [picture,setPicture] = useState(upload);
  const {role} = useAuth();
  console.log(role)
  const {signUp,isLoading} = useAuth();
  const navigate = useNavigate()
  const handleUpload = (e) => {
    const file = e.target.files[0] 
    if (!file) return ;
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = function(result) {
      setPicture(result.target.result)
    }
}
// check user validation schema
const validateUser = role ==='client'?clientRegisterSchema:designerRegisterSchema;

  const form = useForm({
    resolver:zodResolver(validateUser),
    defaultValues:{
        email:'abu19@gmail.com',
        password:'11111111',
        confirmPassword:'11111111',
        firstName:'aaa',
        lastName:'aaa',
        username:'',
        business:'aaaa',
        code:'0000',
        phone:'11111111111',
        check:false,
        gender:undefined,
        country:''
    },
    reValidateMode:'onChange'
  })

    const {isSignUpForm} = useAuthService((state)=>state)
  

    const onSubmit = async(values)=>{

    const formData = {
      fname:values.firstName,
      lname:values.lastName,
      busname:values.business,
      email:values.email,
      phone:values.phone,
      pwd:values.password,
      cpwd:values.confirmPassword,
      address:'45,sulaiman street Orile Iganmu Lagos',
      country:'161',
      gender:'female',
      state:'24',
      lga:'522',
      cities:'none',
      nin:'12345678912',
      // passport:'BA1234566',
      pic:values.image
    }
    const data = role === 'client'?{...formData,username:values.username}:formData
    console.log(data)
    const result = await signUp(data);

    if(result.status === 201||result.status === 200){
      Cookies.set('activationLink',result.data.activation_link)
      navigate('/verifyAccount')
    }
      if(result.status === 409){
         form.setError('email', {
        type: 'manual',
        message: 'This email is already registered'
      });
      }
    }


  return (
    <section className='md:pl-4 lg:pl-0'>
      {isSignUpForm || <Join page="signUp" header="Join us as"/>}
        {isSignUpForm &&<div className='flex flex-col md:flex-row md:max-w-[800px] mx-auto  pt-20 font-lato '>
        <Reasons reasons={reasons} isSignUp={true} image={african} header={header}/>
        <div className='md:flex-[0.55] px-3 py-4 '>
                  <img src={logo} className='block mx-auto w-24 ' alt="" />
          
  <h2 className='font-[700]  mt-7 mb-4 md:mb-2 text-center md:text-left text-xl'>create an account</h2>
                <p className="text-secondary mb-5 hidden md:block">Already have an account ? <Link to='/login' className='text-primary capitalize font-[500]'>login</Link></p>             
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4">
                  <div className="flex flex-col md:flex-row  gap-4 md:gap-2">
                  <div className=''>
                        <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input type="text" placeholder="First name" className="text-lg border border-secondary  placeholder-secondary pl-4 py-6 rounded-xl outline-[0]" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                            />
                  </div>
                  <div className=''>
                        <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input type="text" placeholder="Last name" className="text-lg border border-secondary  placeholder-secondary pl-4 py-6 rounded-xl outline-[0]" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                            />
                  </div>
                  </div>

                {/* display the username input when it is client signing up */}
                     {
                      role === 'client'&&   <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input type="text" placeholder="Enter Username" className="text-lg border border-secondary  placeholder-secondary pl-4 py-6 rounded-xl outline-[0]" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                            />
                     }
                  <div className='relative'>
                    <img src={emailIcon} className='absolute top-4 left-4 w-[20px] h-[20px]' alt="" />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input type="email" placeholder="Enter email" className="text-lg border border-secondary  placeholder-secondary pl-12 py-6 rounded-xl outline-[0]" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                            />
                  </div>
                  <div className="flex  flex-col md:flex-row gap-4 md:gap-2">
                  <div className='relative'>
                    <img src={passwordIcon} className='absolute top-4 left-4 w-[20px] h-[20px]' alt="" />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl> 
                                    <Input type="password" placeholder="Enter password" className="text-lg border border-secondary  placeholder-secondary pl-12 py-6 rounded-xl outline-[0]" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                            />
                  </div>
                 
                  <div className='relative'>
                    <img src={passwordIcon} className='absolute top-4 left-4 w-[20px] h-[20px]' alt="" />
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input type="password" placeholder="Confirm password" className="text-lg border border-secondary  placeholder-secondary pl-12 py-6 rounded-xl outline-[0]" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                            />
                  </div>
                  </div>
                  <div className="flex  flex-col md:flex-row gap-4 md:gap-2">

                  <div className=''>
                   
                        <FormField
                            control={form.control}
                            name="business"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input type="text" placeholder="Business name" className="text-lg border border-secondary  placeholder-secondary pl-4 py-6 rounded-xl outline-[0]" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                            />
                  </div>
                  <div className=''>
                   
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input type="tel" placeholder="Active phone number" className="text-lg border border-secondary  placeholder-secondary pl-4 py-6 rounded-xl outline-[0]" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                            />
                  </div>
                  </div>

                <div className='flex items-center flex-col-reverse md:flex-row gap-6'>
                   {/* select                     */}

                    {/* Radio */}
                  <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem className="space-y-3 mr-auto w-full ">
                          <FormControl>
                          <Select 
                   onValueChange={field.onChange} 
                   value={field.value}
                   defaultValue={field.value}
                 >
                      <SelectTrigger data-testid="country" className="w-full md:w-[182px] border border-secondary py-6 rounded-xl">
                        <SelectValue placeholder="Choose country" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        {countries.map(country=>{
                          return(
                          <SelectItem key={country.name} value={country.name} className="hover:bg-gray-300">{country.name}</SelectItem>

                          )
                        })}
                      
                      </SelectContent>
                      <FormMessage className="text-red-500" />

    </Select>
                          </FormControl>
                        </FormItem>
                      )}
            />

                  <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem className="space-y-3 mr-auto ">
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-fcol space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="Male" id="male" className='border-green-500'/>
                                </FormControl>
                                <FormLabel htmlFor="male" className="font-normal">
                                  Male
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="Female" id="female" className="border-green-500" />
                                </FormControl>
                                <FormLabel htmlFor="female"  className="font-normal">
                                  Female
                                </FormLabel>
                              </FormItem>
                             
                            </RadioGroup>
                          </FormControl>
                          <FormMessage className="text-red-500" />
                          </FormItem>
                      )}
            />
                </div>
                    

<FormField
        control={form.control}
        name="image" // Name should match the zod schema field
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <div className='flex items-center gap-3'>
                <label htmlFor="file" className='block'>
                  <img src={picture} alt="Upload Icon" className='w-[100px] h-[100px] rounded-full' />
                </label>
                <div>
                  <label>Profile image</label>
                  <p className='text-primary text-sm'>Supports only [jpg, gif, png]</p>
                </div>
                {/* Hidden file input */}
                <Input 
                  type="file"
                  id="file"
                  data-testid="file input"
                  className='hidden'
                  accept=".jpg,.jpeg,.gif,.png"
                  onChange={(e) => {
                    field.onChange(e.target.files);
                    handleUpload(e)
                  }}
                  onBlur={field.onBlur}
                  name={field.name}
                  ref={field.ref}
                />
              </div>
            </FormControl>
            {/* Show error message if validation fails */}
          <FormMessage className="text-red-500"/> 
          </FormItem>
        )}
      />


                        <FormField
                            control={form.control}
                            name="code"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input type="text" placeholder="Enter referral code" className="text-lg border border-secondary  placeholder-secondary pl-4 py-6 rounded-xl outline-[0]" {...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                            />
                        <FormField
                            control={form.control}
                            name="check"
                            render={({ field }) => (
                                <FormItem>
                                   <div className="flex items-start space-x-2">
                              <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              id="check" className="border-green-500 w-5 h-5" />
                              <label
                                htmlFor="terms2"
                                className="text-[0.8rem] "
                              >
                                By checking the box on the left,you agree to the website <Link className='text-primary'>terms and condition</Link>
                              </label>
                            </div>
                                <FormMessage className="text-red-500" />
                                </FormItem>
                            )}/>
                         
                    <Button type="submit" className='w-full md:w-3/4 md:ml-8  text-white rounded-xl text-lg py-6'>
                       {isLoading?<Loader className='animate-spin' />:'Sign Up'} </Button>
                    <p className="text-secondary mb-5 md:hidden text-center  block">Already have an account ? <Link to='/login' className='text-primary capitalize font-[500]'>login</Link></p>             
               
                </form>
            </Form>
       
         </div>
    </div>}
    </section>
  )
}



export default SignUpForm