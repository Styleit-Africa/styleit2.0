import Image from '@/components/global/Image';
import { creators } from '@/static/adminData'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import userPicture from '@/images/profile_i.png'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button';
import UserProfileCard from './UserProfileCard';

const UserProfile = ({user={
        id:1,
        name:'uthman fatai',
        email:'u@gmail.com',
        status:'suspended',
        gender:'male',
        phoneNumber:'07040834109',
        businessName:'Noble stiches',
        street:'49,Suraju Orile Iganmu',
        state:'Lagos',
        lga:'Surulere',
        country:'Nigeria',
    }}) => {
    const [section,setSection] = useState({
        businessName:true,
        personalInfo:true,
        address:true, 
    })
    const [currentId,setCurrentId] = useState(null)
    const {id} = useParams();
    // const user = creators.find(creator=>creator.id==id)
      const form = useForm({
          resolver:zodResolver(),
          defaultValues:{
            firstName:user?.name?.split(' ')[0],
            lastName:user?.name?.split(' ')[1],
            email:user.email,
            phoneNumber:user.phoneNumber,
            gender:user.gender,
            businessName:user.businessName,
            country:user.country,
            state:user.state,
            street:user.street,
            lga:user.lga,
          }
        })
        const handelSection = (id,data)=>{
            setSection(data)
            setCurrentId(id)
        }
        
    const handleEdit = (e)=>{
        const id = e.currentTarget.dataset.id
        switch(id){
          case 'personal info':
            handelSection(id,{...section,personalInfo:false})
          break;
          case 'address':
            handelSection(id,{...section,address:false})
          break;
          default :
            handelSection(id,{personalInfo:false,address:false})
        }
    }
    const onSubmit = (values)=>{

        console.log(values)
      }
  return (
    <div>
        
             <Form {...form} data-testid="edit-profile-form ">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 px-4 xl:px-0">
                        <UserProfileCard name='ff' age={78} cardProps = {{sectionId:'businessName',
                          title:user?.businessName,currentId,handleEdit}}  >

                            <div className='flex items-center gap-4 p-6'>
                            <div>
                                    <Image src={userPicture} className="w-[120px] h-[120px]" />
                            </div>
                            <div>
                                    <p className='text-lg font-[700] capitalize'>{user.name}</p>
                                    <p className='font-[500]'>Creator</p>
                                    <p className='text-sm text-green-500 capitalize'>active</p>
                            </div>
                            </div> 
                            

                        </UserProfileCard>

                        {/* personal info */}

                        <UserProfileCard cardProps = {{sectionId:'personal info',title:'personal info',currentId,handleEdit}} >
                             
                               
                                   <div className='flex  flex-col md:flex-row justify-between gap-6 md:gap-10 '>
                                      <div className='flex-[0.48]'>
                                                     <div className='relative mt-1 md:mt-5'>
                                    
            
                                  <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                              <FormLabel 
                                                    className=' left-3  transition-all duration-300 
                                                      font-[700]'>First Name</FormLabel>
                                                         <Input type="text" id="firstName"  disabled={ section.personalInfo?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem]  cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                          focus-visible:ring-0' {...field} data-testid="firstName"/>
                                                  
                                                  <FormMessage className="text-red-500" />
                                                  </FormItem>
                                              )}
                                              />
                                    </div>
                                    
                                     <div className='relative mt-5 '>
                                          <FormField
                                              control={form.control}
                                              name="lastName"
                                              render={({ field }) => (
                                                  <FormItem>
                                                    <FormControl>
                                                 <div>
                                                  
                                                 <FormLabel 
                                                    className={` left-3 -top-2  transition-all duration-300 
                                                      font-[700]`}>Last Name</FormLabel>
                                                   
                                                   <Input type="text" id="lastName"  disabled={ section.personalInfo?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem]  cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                          focus-visible:ring-0' {...field} data-testid="lastName"/>
                                                 </div>
                                                    </FormControl>
                                                  <FormMessage className="text-red-500" />
                                                  </FormItem>
                                              )}
                                              />
                                    </div>
            
                                      </div>
                                    
                                      <div className='flex-[0.48]'>
            
                                         <div className='relative mt-1 md:mt-5'>
                                    
            
                                  <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                              <FormLabel 
                                                    className=' left-3  transition-all duration-300 
                                                      font-[700]'>Email</FormLabel>
                                                       
                                                       <Input type="text" id="email"  disabled={ section.personalInfo?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem]  cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                          focus-visible:ring-0' {...field} data-testid="email"/>
                                                  
                                                  <FormMessage className="text-red-500" />
                                                  </FormItem>
                                              )}
                                              />
                                    </div>
                                    
                                     <div className='relative mt-5 '>
                                          <FormField
                                              control={form.control}
                                              name="phoneNumber"
                                              render={({ field }) => (
                                                  <FormItem>
                                                    <FormControl>
                                                 <div>
                                                  <FormLabel htmlFor='phoneNumber' className={`${form?.formState?.errors?.lastName?.message?' bottom-10':' bottom-3.5'} block bg-white    w-[max-content]  h-[max-content] `}>
                                                  </FormLabel>
                                                 <FormLabel 
                                                    className={` left-3 -top-2  transition-all duration-300 
                                                      font-[700]`}>Phone number</FormLabel>
                                                  
                                                  <Input type="text" id="phoneNumber"  disabled={ section.personalInfo?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem] cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                            focus-visible:ring-0'  {...field} data-testid="phoneNumber" />
                                                          
                                                 </div>
                                                    </FormControl>
                                                  <FormMessage className="text-red-500" />
                                                  </FormItem>
                                              )}
                                              />
                                    </div>
            
                                      </div>
                                    
                                   </div>
                                   <div className='flex  flex-col md:flex-row justify-between gap-6 md:gap-10 '>
            
                                         <div className='flex-[0.48]  relative md:mt-5'>
                                    
            
                                  <FormField
                                        control={form.control}
                                        name="businessName"
                                        render={({ field }) => (
                                            <FormItem>
                                              <FormLabel 
                                                    className=' left-3  transition-all duration-300 flex-[0.48] 
                                                      font-[700]'>Business Name</FormLabel>
                                                        
                                                        <Input type="text" id="businessName" disabled={ section.personalInfo?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem]  cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                            focus-visible:ring-0' {...field} data-testid="businessName"/>
                                                  <FormMessage className="text-red-500" />
                                                  </FormItem>
                                              )}
                                              />
                                    </div>
                                         <div className='flex-[0.48]  relative md:mt-5'>
                                    
            
                                  <FormField
                                        control={form.control}
                                        name="gender"
                                        render={({ field }) => (
                                            <FormItem>
                                              <FormLabel 
                                                    className=' left-3  transition-all duration-300 flex-[0.48] 
                                                      font-[700]'> Gender</FormLabel>
                                                      <Input type="text" id="gender" disabled={ section.personalInfo?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem]  cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                            focus-visible:ring-0' {...field} data-testid="gender"/>
                                                  <FormMessage className="text-red-500" />
                                                  </FormItem>
                                              )}
                                              />
                                    </div>
                                      </div>
                        </UserProfileCard>

                      {/* address */}
                      <UserProfileCard cardProps = {{sectionId:'address',title:'address',currentId,handleEdit}} >
                                          
                                            
                                                <div className='flex  flex-col md:flex-row justify-between gap-6 md:gap-10 '>
                                                    <div className='flex-[0.48]'>
                          
                                                      <div className='relative mt-1 md:mt-5'>
                                                  
                          
                                                <FormField
                                                      control={form.control}
                                                      name="country"
                                                      render={({ field }) => (
                                                          <FormItem>
                                                            <FormLabel 
                                                                  className=' left-3  transition-all duration-300 
                                                                   font-[700]'>Country</FormLabel>
                                                                      <Input type="text" id="country"  disabled={ section.address?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem]  cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                                        focus-visible:ring-0' {...field} data-testid="country"/>
                                                                
                                                                <FormMessage className="text-red-500" />
                                                                </FormItem>
                                                            )}
                                                            />
                                                  </div>
                                                  
                                                  <div className='relative mt-5 '>
                                                        <FormField
                                                            control={form.control}
                                                            name="state"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                  <FormControl>
                                                              <div>
                                                              
                                                              <FormLabel 
                                                                  className={` left-3 -top-2  transition-all duration-300 
                                                                   font-[700]`}>City</FormLabel>
                                                                  <Input type="text" id="state"  disabled={ section.address?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem] cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                                    focus-visible:ring-0'  {...field} data-testid="state" />
                                                              </div>
                                                                  </FormControl>
                                                                <FormMessage className="text-red-500" />
                                                                </FormItem>
                                                            )}
                                                            />
                                                  </div>
                          
                                                    </div>
                                                  
                                                  
                                                    <div className='flex-[0.48]'>
                          
                                                      <div className='relative mt-1 md:mt-5'>
                                                  
                          
                                                <FormField
                                                      control={form.control}
                                                      name="street"
                                                      render={({ field }) => (
                                                          <FormItem>
                                                            <FormLabel 
                                                                  className=' left-3  transition-all duration-300 
                                                                   font-[700]'>Street</FormLabel>
                                                                      <Input type="text" id="street" disabled={ section.address?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem]  cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                                        focus-visible:ring-0' {...field} data-testid="street"/>
                                                                
                                                                <FormMessage className="text-red-500" />
                                                                </FormItem>
                                                            )}
                                                            />
                                                  </div>
                                                  
                                                  <div className='relative mt-5 '>
                                                        <FormField
                                                            control={form.control}
                                                            name="lga"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                  <FormControl>
                                                              <div>
                                                              
                                                              <FormLabel 
                                                                  className={` left-3 -top-2  transition-all duration-300 
                                                                   font-[700]`}>Local Government</FormLabel>
                                                                  <Input type="text" id="lga"  disabled={ section.address?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem] cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                                    focus-visible:ring-0'  {...field} data-testid="lga" />
                                                              </div>
                                                                  </FormControl>
                                                                <FormMessage className="text-red-500" />
                                                                </FormItem>
                                                            )}
                                                            />
                                                  </div>
                          
                                                    </div>
                                                </div>
                                            
                                                          
                                              
                      </UserProfileCard>
                  <div className='capitalize flex gap-4 w-[max-content] mx-auto mt-5'>
                    <Button className="bg-sidebar hover:bg-sidebar text-lightGray px-8 py-6">Submit all</Button>
                    <Button className="bg-sidebar hover:bg-sidebar text-lightGray px-8 py-6"  data-id='all' onClick={(e)=>handleEdit(e)}>Edit all</Button>
                  </div>
                                  </form>
                              </Form>
    </div>
  )
}

export default UserProfile