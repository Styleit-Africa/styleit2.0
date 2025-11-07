import Image from '@/components/global/Image'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import profileImage from '@/images/icon_n1.png'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Indicator from '@/components/global/Indicator'
import { Link, useLocation } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie' 
import { designerEditFormSchema } from '@/validations/designerEditFormValidation'
import { clientEditFormSchema } from '@/validations/clientEditFormValidation'
import UserProfileLoader from './loaders/ProfileLoaders'
import { toast } from 'sonner'
import { X } from 'lucide-react'
import { useAuth } from '@/store/useAuth'

const EditProfileForm = ({ isEditable, title }) => {
  const { pathname } = useLocation();
  const {user} = useAuth();

  const { data, isLoading } = useQuery({
    queryKey: ['editProfile'],
    queryFn: async () => await axios.get(`https://styleitafrica.pythonanywhere.com/api/${user.role==='designer'?'designer':'customer'}/profile`, {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
  })


  const validation =  user?.role === 'designer'?designerEditFormSchema:clientEditFormSchema

  const form = useForm({
    resolver: zodResolver(validation),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      lga: '',
      mobile: '',
      bank: '',
      bank_acc: '',
      address: '',
      image:''
    }
  })

  useEffect(() => {
    let formValues;
    if (data?.data) {
        if(user?.role === 'designer'){
          formValues = {
           firstName: data.data.creator?.firstName || '',
           lastName: data.data.creator?.lastName || '',
           email: data.data.creator?.email || '',
           lga: data.data.creator?.lga?.[0]?.name || '',
           mobile: data.data.creator?.phone || '',
           bank: data.data.bank?.[0]?.bankName || '',
           bank_acc: data.data.bank?.[0]?.accountNo || '', 
           address: data.data.creator?.address || '',
           image: data.data.creator?.profile_pic || profileImage,
         }

        }else{

          formValues = {
               firstName: data.data.customer?.fname || '',
               lastName: data.data.customer?.lname || '',
               email: data.data.customer?.email || '',
               lga: data.data.customer?.lga?.[0]?.name || '',
               mobile: data.data.customer?.phone || '',
               bank: data.data.bank?.[0]?.bankName || '',
               bank_acc: data.data.bank?.[0]?.accountNo || '', 
               address: data.data.customer?.address || '',
               image: data.data.customer?.profile_pic || profileImage,
         }
        }

      
      form.reset(formValues)
    } 
  }, [data, form])

  const updateProfile = async(data)=>{
    return  await axios.put(`https://styleitafrica.pythonanywhere.com/api/${user?.role==='designer'?'designer':'customer'}/profile`,data,{
     headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
   })
  }

  const {mutate} = useMutation({
    mutationFn:updateProfile,
    onSuccess:(response)=>{
      if(response.status === 200){
         toast("Profile updated successfully", {
            action: {
            label: <X size={16} />,
          },
        })
      }
    }
  })

  const handleSubmit = async(e,values) => {
    e.preventDefault();
    const data = {fname:values.firstName,email:values.email,lname:values.lastName,profile_pic:values.image,
      phone:values.mobile,address:values.address,bankName:values.bank,accountNo:values.bank_acc}
      mutate(data)
   
  }
  
  return (
    <div>
      {
        isLoading ? (
         <div className="mt-6">
           <UserProfileLoader/>
         </div>
        ):(

      <Form {...form} className='' data-testid="edit-profile-form">
        <form className="space-y-5 mt-6 md:mt-10 mb-20 px-4 xl:px-0">
          <div className='flex flex-col md:flex-row justify-between gap-10 md:mb-10'>
            <div className='flex-[0.48]'>
              <div className='relative flex gap-3 items-center md:gap-9 md:items-end'>
                <Indicator className='h-1.5 w-1.5 absolute top-1 left-8 rounded-full md:hidden bg-red-600' />
                <label htmlFor="upload">
                  <Image src={profileImage} data-testid="image" className="w-[40px] md:w-[120px]" />
                  <Input type='file' className='hidden' name="image"  id="upload" />
                </label>
                <h1 className='text-lg md:text-2xl md:hidden font-[700]'>{title}</h1>

                <div className='relative flex-[1] hidden md:block'>
                  <h1 className='text-2xl mb-10 font-[700]'>{title}</h1>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            type="text" 
                            className='text-lg shadow-none pl-4 block h-12 text-gray-500 focus-visible:ring-0' 
                            {...field} 
                            data-testid="firstName"
                          />
                        </FormControl>
                        <FormLabel className='absolute left-3 top-[3.5rem] transition-all duration-300 bg-white font-[700]'>
                          First Name
                        </FormLabel>
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
                          <Input 
                            type="text" 
                            className='text-lg shadow-none pl-4 block h-12 text-gray-500 focus-visible:ring-0' 
                            {...field} 
                            data-testid="firstName"
                          />
                        </FormControl>
                        <FormLabel className='absolute left-3 -top-4 transition-all duration-300 bg-white font-[700]'>
                          First Name
                        </FormLabel>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='relative flex-[0.5] md:mt-[4.5rem]'>
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            type="text" 
                            className='text-lg shadow-none pl-4 block h-12 text-gray-500 focus-visible:ring-0' 
                            {...field} 
                            data-testid="lastName" 
                          />
                        </FormControl>
                        <FormLabel className='absolute left-3 -top-4 transition-all duration-300 bg-white font-[700]'>
                          Last Name
                        </FormLabel>
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
                        <Input 
                          type="email" 
                          className='text-lg shadow-none pl-4 block h-12 text-gray-500 focus-visible:ring-0' 
                          {...field} 
                          data-testid="email"
                        />
                      </FormControl>
                      <FormLabel className='absolute left-3 -top-4 transition-all duration-300 bg-white font-[700]'>
                        Email
                      </FormLabel>
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
                        <Input 
                          type="text" 
                          className='text-lg shadow-none pl-4 block h-12 text-gray-500 focus-visible:ring-0' 
                          {...field} 
                          data-testid="address" 
                        />
                      </FormControl>
                      <FormLabel className='absolute left-3 -top-4 transition-all duration-300 bg-white font-[700]'>
                        Address
                      </FormLabel>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              {
                user?.role === 'designer'&& <div className='relative mt-8 md:mt-10'>
                <FormField
                  control={form.control}
                  name="bank"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          type="text" 
                          className='text-lg shadow-none pl-4 block h-12 text-gray-500 focus-visible:ring-0' 
                          {...field} 
                          data-testid="bank" 
                        />
                      </FormControl>
                      <FormLabel className='absolute left-3 -top-4 transition-all duration-300 bg-white font-[700]'>
                        Bank Name
                      </FormLabel>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div> 
              }
            </div>

            <div className='flex-[0.48] -mt-3.5 md:mt-0 mb-8 md:mb-0'>
              <div className='relative md:mt-[4.5rem] hidden md:block'>
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          type="text" 
                          className='text-lg shadow-none pl-4 block h-12 text-gray-500 focus-visible:ring-0' 
                          {...field} 
                          data-testid="lastName"
                        />
                      </FormControl>
                      <FormLabel className='absolute left-3 -top-4 transition-all duration-300 bg-white font-[700]'>
                        Last Name
                      </FormLabel>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex mt-1f gap-5 md:block">
                <div className='relative flex-[0.5] md:mt-10'>
                  <FormField
                    control={form.control}
                    name="mobile"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            type="tel" 
                            className='text-lg shadow-none pl-4 block h-12 text-gray-500 focus-visible:ring-0' 
                            {...field} 
                            data-testid="mobile"
                          />
                        </FormControl>
                        <FormLabel className='absolute left-3 -top-4 transition-all duration-300 bg-white font-[700]'>
                          Mobile No
                        </FormLabel>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className='relative flex-[0.5] md:mt-10'>
                  <FormField
                    control={form.control}
                    name="lga"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            type="text" 
                            className='text-lg shadow-none pl-4 block h-12 text-gray-500 focus-visible:ring-0' 
                            {...field} 
                            data-testid="lga" 
                          />
                        </FormControl>
                        <FormLabel className='absolute left-3 -top-4 transition-all duration-300 bg-white font-[700]'>
                          L.G.A
                        </FormLabel>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {
                 user?.role === 'designer'&& <div className='relative mt-8 md:mt-10'>
                <FormField
                  control={form.control}
                  name="bank_acc"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          type="text" 
                          className='text-lg shadow-none pl-4 block h-12 text-gray-500 focus-visible:ring-0' 
                          {...field} 
                          data-testid="bank_acc" 
                        />
                      </FormControl>
                      <FormLabel className='absolute left-3 -top-4 transition-all duration-300 bg-white font-[700]'>
                        Bank Account Number
                      </FormLabel>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              }

            </div>
          </div>

          {isEditable && (
            <div className='md:w-[400px] mx-auto'>
              <Button 
                onClick={(e)=>handleSubmit(e,form.getValues())}
                data-testid="update-btn" 
                className="border border-primary w-full rounded-xl hover:text-white font-[700] text-md bg-white py-6"
              >
                Update
              </Button>
            </div>
          )}

          {pathname.endsWith('/client/profile') && (
            <div className='md:w-[400px] mx-auto'>
              <Button 
                data-testid="edit-btn" 
                className="border border-primary w-full rounded-xl hover:text-white font-[700] text-md bg-white py-6"
              > 
                <Link to='/client/profile/edit' className="w-full">Edit Profile</Link> 
              </Button>
            </div>
          )}
        </form>
      </Form>

        )
      }
      
    </div>
  )
}

export default EditProfileForm
