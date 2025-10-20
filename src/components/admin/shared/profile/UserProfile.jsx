import Image from '@/components/global/Image';
import { creators } from '@/static/adminData'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import userPicture from '@/images/profile_i.png'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button';
import UserProfileCard from './UserProfileCard';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useMutation, useQuery } from '@tanstack/react-query';
import SingleLoader from '@/components/global/loaders/SIngleLoader';

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
      const {pathname} = useLocation();
      const [section,setSection] = useState({
      businessName:true,
      personalInfo:true,
      address:true, 
    })
    const {id} = useParams();

      const getClient = async()=> {
        const response = await axios.get(`https://styleitafrica.pythonanywhere.com/api/customers/${id}/`,{
            headers:{
              Authorization:`Bearer ${Cookies.get('token')}`,
              'Content-Type': 'application/json',
              Accept:'application/json'
            }
          })
          return response?.data
    }
    const {data,isLoading,error} = useQuery({
        queryKey:['single-client',id],
        queryFn:getClient,
        staleTime: 1000 * 60 * 10,
        refetchOnWindowFocus: false
        })
        console.log(data?.client,'ones')
        console.log(error,'ones')
    
    const [currentId,setCurrentId] = useState(null)
    // const user = creators.find(creator=>creator.id==id)
      const form = useForm({
          resolver:zodResolver(),
          defaultValues:{
            firstName:'',
            lastName:'',
            email:'',
            phoneNumber:'',
            gender:'',
            businessName:''||'no business name key',
            country:'',
            state:'',
            street:'',
            lga:'',
            username:'',
            picture:'',
          }
         
        })


         useEffect(() => {
           
                 const formValues = {
                        firstName:data?.client?.firstname,
                        lastName:data?.client?.lastname,
                        email:data?.client?.email,
                        phoneNumber:data?.client?.phone,
                        gender:data?.client?.gender,
                        businessName:data?.client?.businessName||'no business name key',
                        country:data?.client?.country,
                        state:data?.client?.state,
                        street:data?.client?.street,
                        lga:data?.client?.lga,
                        username:data?.client?.username,
                        picture:data?.client?.profilePicture,
                }
        
              
              form.reset(formValues)
          }, [data, form])
        
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
    const handleActivation =  async()=> {
        const response = await axios.post(`https://styleitafrica.pythonanywhere.com/api/activat/`,{cus_id:id},{
            headers:{
              Authorization:`Bearer ${Cookies.get('token')}`,
              'Content-Type': 'application/json',
              Accept:'application/json'
            }
          })
          return response?.data
    }

    const {data:activation,mutate:accountActivation} = useMutation({
        mutationFn:handleActivation
        
    })
    console.log(activation)

    
    const handleDeactivation =  async()=> {
        const response = await axios.post(`https://styleitafrica.pythonanywhere.com/api/activat/`,{cus_id:id},{
            headers:{
              Authorization:`Bearer ${Cookies.get('token')}`,
              'Content-Type': 'application/json',
              Accept:'application/json'
            }
          })
          return response?.data
    }

    const {data:deactivation,mutate:accountDeactivation} = useMutation({
        mutationFn:handleDeactivation
        
    })
    console.log(activation)

    const handleAccount = (value)=>{
      if(value === 'activate'){
        accountActivation();
      }else{
        accountDeactivation();

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
                          title:data?.client.username,currentId,handleEdit}}  >

                            <div className='flex items-center gap-4 p-6'>
                            <div>
                              
                                      {
                                        isLoading ? <SingleLoader name='circle'/>:
                                        // <Image src={data?.client.profilePicture} className="w-[120px] h-[120px]" />
                                        <Image src={userPicture} className="w-[120px] h-[120px] rounded-full" />
                                      }
                            </div>
                            <div>
                                    <p className='text-lg font-[700] capitalize'>{user.name}</p>
                                    <p className='font-[500] capitalize'>{pathname.includes('clients')?'client':'creator'}</p>
                                    <p className='text-sm text-green-500 capitalize'>{data?.client.status}</p>
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
                                                      {
                                                          isLoading ? <SingleLoader/>:<Input type="text" id="firstName"  disabled={ section.personalInfo?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem]  cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                          focus-visible:ring-0' {...field} data-testid="firstName"/>
                                                      }
                                                    
                                                         
                                                  
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

                                                        {
                                                          isLoading ? <SingleLoader/>:
                                                   
                                                   <Input type="text" id="lastName"  disabled={ section.personalInfo?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem]  cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                          focus-visible:ring-0' {...field} data-testid="lastName"/>
                                                      }
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
                                                       {
                                                          isLoading ? <SingleLoader/>:
                                                   
                                                       <Input type="text" id="email"  disabled={ section.personalInfo?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem]  cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                          focus-visible:ring-0' {...field} data-testid="email"/>
                                                      }
                                                  
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
                                                  {
                                                          isLoading ? <SingleLoader/>:
                                                  <Input type="text" id="phoneNumber"  disabled={ section.personalInfo?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem] cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                            focus-visible:ring-0'  {...field} data-testid="phoneNumber" />
                                                      }
                                                   
                                                          
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
                                                        {
                                                          isLoading ? <SingleLoader/>:
                                                        <Input type="text" id="businessName" disabled={ section.personalInfo?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem]  cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                            focus-visible:ring-0' {...field} data-testid="businessName"/>
                                                      }
                                                   
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
                                                      {
                                                          isLoading ? <SingleLoader/>:
                                                      <Input type="text" id="gender" disabled={ section.personalInfo?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem]  cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                            focus-visible:ring-0' {...field} data-testid="gender"/>
                                                      }
                                                   
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
                                                                   {
                                                          isLoading ? <SingleLoader/>:
                                                                      <Input type="text" id="country"  disabled={ section.address?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem]  cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                                        focus-visible:ring-0' {...field} data-testid="country"/>
                                                      }
                                                   
                                                                
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
                                                                   {
                                                          isLoading ? <SingleLoader/>:
                                                                  <Input type="text" id="state"  disabled={ section.address?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem] cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                                    focus-visible:ring-0'  {...field} data-testid="state" />
                                                      }
                                                   
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
                                                                   {
                                                          isLoading ? <SingleLoader/>:
                                                                      <Input type="text" id="street" disabled={ section.address?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem]  cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                                        focus-visible:ring-0' {...field} data-testid="street"/>
                                                      }
                                                   
                                                                
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
                                                                   {
                                                          isLoading ? <SingleLoader/>:
                                                   
                                                                  <Input type="text" id="lga"  disabled={ section.address?true:false} className='capitalize disabled:bg-white disabled:text-gray-900 placeholder-gray-400 placeholder:text-[1.07rem] cursor-pointer text-lg shadow-none pl-3 block h-12 text-white
                                                                    focus-visible:ring-0'  {...field} data-testid="lga" />
                                                      }
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
                    <Button className="bg-sidebar hover:bg-sidebar capitalize text-lightGray px-8 py-6" onClick={()=>handleAccount('activate')}>activate</Button>
                    <Button className="bg-sidebar hover:bg-sidebar capitalize text-lightGray px-8 py-6" onClick={()=>handleAccount('deactivate')}>deactivate</Button>
                    <Button className="bg-sidebar hover:bg-sidebar text-lightGray px-8 py-6">Submit all</Button>
                    <Button className="bg-sidebar hover:bg-sidebar text-lightGray px-8 py-6"  data-id='all' onClick={(e)=>handleEdit(e)}>Edit all</Button>
                  </div>
                                  </form>
                              </Form>
    </div>
  )
}

export default UserProfile