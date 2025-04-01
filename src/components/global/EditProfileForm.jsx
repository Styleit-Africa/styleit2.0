import Profile from '@/components/dashboard/profile/Profile'
import Image from '@/components/global/Image'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { loginSchema } from '@/validations/authValidation'
import { zodResolver } from '@hookform/resolvers/zod'
import profileImage from '@/images/profile_i.png'

import React from 'react'
import { useForm } from 'react-hook-form'
import Indicator from '@/components/global/Indicator'

const EditProfileForm = ({isEditable,title}) => {

   const form = useForm({
      resolver:zodResolver(loginSchema),
      defaultValues:{
        firstName:'Michael',
        lastName:'Moses',
        email:'michaelmoses@gmail.com',
        lga:'Ifako-ijaye',
        mobile:'09066778876',
        bank:'Guarantee trust Bank',
        bank_acc:'00192207800',
        address:'181,Fola Azeez Cresent,Akulo',
      }
    })
  
  
    const onSubmit = (values)=>{
      console.log(values)
    }
  return (
      <Form {...form} className='' data-testid="edit-creator-profile-form ">
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-6 md:mt-10 mb-20 px-4 xl:px-0">
                       <div className='flex  flex-col md:flex-row justify-between gap-10 md:mb-10'>
                          <div className='flex-[0.48]'>
                          <div className=' relative  flex gap-3 items-center md:gap-9 md:items-end'>
                          <Indicator className='h-1.5 w-1.5  absolute top-1 left-8 rounded-full md:hidden bg-red-600 '/>
                          <label htmlFor="upload" data-testid='upload'>
                          <Image src={profileImage}  className=" w-[40px] md:w-[120px]"/>
                           <Input type='file'  className='hidden' id="upload"/>
                          
                        </label>
                          <h1 className='text-lg  md:text-2xl  md:hidden font-[700] '>{title}</h1>

                           <div className='relative flex-[1] hidden md:block'>
                              <h1 className='text-2xl  mb-10 font-[700]'>{title}</h1>
                              <FormField
                                  control={form.control}
                                  name="firstName"
                                  render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                        <Input type="text" className='text-lg  shadow-none pl-4 block h-12 text-gray-500
                                          focus-visible:ring-0' {...field} />
                                        </FormControl>
                                        <FormLabel htmlFor="namse" 
                                        className='absolute left-3 top-[3.5rem]  transition-all duration-300 
                                         bg-white font-[700]'>First Name</FormLabel>
                                      <FormMessage className="text-red-500" />
                                      </FormItem>
                                  )}
                                  />
                           </div>
                           </div>

                           <div className='flex gap-5 mt-8 md:hidden'>
                              <div className='relative flex-[0.5]'>
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                              <FormControl>
                                              <Input type="text" className='text-lg shadow-none pl-4 block h-12 text-gray-500
                                                focus-visible:ring-0' {...field} />
                                              </FormControl>
                                              <FormLabel htmlFor="namse" 
                                              className='absolute left-3 -top-4  transition-all duration-300 
                                              bg-white font-[700]'>First Name</FormLabel>
                                            <FormMessage className="text-red-500" />
                                            </FormItem>
                                        )}
                                        />

                                </div>

                                <div className='relative  flex-[0.5] md:mt-[4.5rem] '>
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                              <FormControl>
                                              <Input type="text" className='text-lg shadow-none pl-4 block h-12 text-gray-500
                                                focus-visible:ring-0' {...field} />
                                              </FormControl>
                                              <FormLabel htmlFor="namse" 
                                              className='absolute left-3 -top-4  transition-all duration-300 
                                              bg-white font-[700]'>Last Name</FormLabel>
                                            <FormMessage className="text-red-500" />
                                            </FormItem>
                                        )}
                                        />
                              </div>
                         </div>
                             <div className='relative mt-8 md:mt-10'>
                              <FormField
                                  control={form.control}
                                  name="email"
                                  render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                        <Input type="email" className='text-lg shadow-none pl-4 block h-12 text-gray-500
                                          focus-visible:ring-0' {...field} />
                                        </FormControl>
                                        <FormLabel htmlFor="namse" 
                                        className='absolute left-3 -top-4  transition-all duration-300 
                                         bg-white font-[700]'>Email</FormLabel>
                                      <FormMessage className="text-red-500" />
                                      </FormItem>
                                  )}
                                  />
                        </div>
                         <div className='relative mt-8 md:mt-10'>
                              <FormField
                                  control={form.control}
                                  name="address"
                                  render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                        <Input type="text" className='text-lg shadow-none pl-4 block h-12 text-gray-500
                                          focus-visible:ring-0' {...field} />
                                        </FormControl>
                                        <FormLabel htmlFor="namse" 
                                        className='absolute left-3 -top-4  transition-all duration-300 
                                         bg-white font-[700]'>Address</FormLabel>
                                      <FormMessage className="text-red-500" />
                                      </FormItem>
                                  )}
                                  />
                        </div>
                     
                         <div className='relative mt-8 md:mt-10'>
                              <FormField
                                  control={form.control}
                                  name="bank"
                                  render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                        <Input type="text" className='text-lg shadow-none pl-4 block h-12 text-gray-500
                                          focus-visible:ring-0' {...field} />
                                        </FormControl>
                                        <FormLabel htmlFor="namse" 
                                        className='absolute left-3 -top-4  transition-all duration-300 
                                         bg-white font-[700]'>Bank Name</FormLabel>
                                      <FormMessage className="text-red-500" />
                                      </FormItem>
                                  )}
                                  />
                        </div>

                          </div>
                          <div className='flex-[0.48] -mt-3.5 md:mt-0 mb-8 md:mb-0'>
                             <div className='relative md:mt-[4.5rem] hidden md:block'>
                              <FormField
                                  control={form.control}
                                  name="lastName"
                                  render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                        <Input type="text" className='text-lg shadow-none pl-4 block h-12 text-gray-500
                                          focus-visible:ring-0' {...field} />
                                        </FormControl>
                                        <FormLabel htmlFor="namse" 
                                        className='absolute left-3 -top-4  transition-all duration-300 
                                         bg-white font-[700]'>Last Name</FormLabel>
                                      <FormMessage className="text-red-500" />
                                      </FormItem>
                                  )}
                                  />
                        </div>
                       <div className="flex mt-1f gap-5 md:block">
                        
                       <div className='relative  flex-[0.5]  md:mt-10'>
                              <FormField
                                  control={form.control}
                                  name="mobile"
                                  render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                        <Input type="tel"  className='text-lg shadow-none pl-4 block h-12 text-gray-500
                                          focus-visible:ring-0' {...field} />
                                        </FormControl>
                                        <FormLabel htmlFor="namse" 
                                        className='absolute left-3 -top-4  transition-all duration-300 
                                         bg-white font-[700]'>Mobile No</FormLabel>
                                      <FormMessage className="text-red-500" />
                                      </FormItem>
                                  )}
                                  />
                        </div>
                         <div className='relative  flex-[0.5] md:mt-10'>
                              <FormField
                                  control={form.control}
                                  name="lga"
                                  render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                        <Input type="text" className='text-lg shadow-none pl-4 block h-12 text-gray-500
                                          focus-visible:ring-0' {...field} />
                                        </FormControl>
                                        <FormLabel htmlFor="namse" 
                                        className='absolute left-3 -top-4  transition-all duration-300 
                                         bg-white font-[700]'>L.G.A</FormLabel>
                                      <FormMessage className="text-red-500" />
                                      </FormItem>
                                  )}
                                  />
                        </div>
                       </div>

                        <div className='relative mt-8 md:mt-10'>
                              <FormField
                                  control={form.control}
                                  name="bank_acc"

                                  render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                        <Input type="text" className='text-lg shadow-none pl-4 block h-12 text-gray-500
                                          focus-visible:ring-0' 
                                          
                                          {...field} />
                                        </FormControl>
                                        <FormLabel htmlFor="namse" 
                                        className='absolute left-3 -top-4  transition-all duration-300 
                                         bg-white font-[700]'>Bank Account Number</FormLabel>
                                      <FormMessage className="text-red-500" />
                                      </FormItem>
                                  )}
                                  />
                        </div>

                          </div>
                       </div>
                                
                        {
                            isEditable&&<div className='md:w-[400px] mx-auto '>
                            <Button className=" border border-primary w-full rounded-xl hover:text-white  font-[700] text-md bg-white py-6">Update</Button>
                          
                          </div>
                        }
                        
      
                      </form>
                  </Form>
    
  )
}

export default EditProfileForm