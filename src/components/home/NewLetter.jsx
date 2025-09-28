import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Loader, X } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form';
import newsLetterSchema from '@/validations/newsLetterValidation';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const NewLetter = () => {
  const [isLoading,setIsLoading] = useState(false)
   const form = useForm({
      resolver:zodResolver(newsLetterSchema),
      defaultValues:{
          email:'',
          name:''
      }
    })

  const subscribe = async(data)=>{
    console.log(data)

      // return await axios.post('https://styleitafrica.pythonanywhere.com/api/newsletter/',data,{
      const response =  await axios.post('https://styleitafrica.pythonanywhere.com/api/newsletter/',data,{
        headers: {
               Authorization: `Bearer ${Cookies.get('token')}`,
               'Content-Type': 'application/json'
      }
    })
    console.log(response)
     if(response?.status == 201 ){
             toast("You have successfully subscribed to our newsletter", {
                action: {
                label: <X size={16} />,
              },
            })
      }
    if(response?.status === 200 ){
             toast("You have already subscribed to our newsletter", {
                action: {
                label: <X size={16} />,
              },
            })
      }
  }

  //   const {mutate,data,error} = useMutation({
  //     mutationFn:subscribe,
     
  // })
    // console.log(data)
    // console.log(error)

  const handleSubmit = async(values)=>{
    await subscribe(values)
    // mutate(values)

    // if(data?.status == 201 ){
    //          toast("You have successfully subscribed to our newsletter", {
    //             action: {
    //             label: <X size={16} />,
    //           },
    //         })
    //   }
    // if(data?.status === 200 ){
    //          toast("You have already subscribed to our newsletter", {
    //             action: {
    //             label: <X size={16} />,
    //           },
    //         })
    //   }
     

    
  }
  return (
    <section className="px-5 md:px-0 bg-secondary py-8 md:py-16 font-lato ">
        <h1 className="capitalize text-center text-2xl md:text-4xl text-primary mb-12">Subscribe to our newsletter</h1>
        <Form {...form} className=' max-w-[650px] mx-auto' data-testid="login-form">
                <form onSubmit={form.handleSubmit(handleSubmit)} className=' max-w-[650px] mx-auto' >
                   <div>
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input type="text" 
                                   className="w-full pl-8 py-9 bg-white md:py-10 rounded-[1.1rem] placeholder:text-2xl placeholder-secondary"{...field} 
                     placeholder="Full name"  />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                            />
                  </div>
                  <div className='mt-7'>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input type="email" placeholder="Email" 
                                   className="w-full pl-8 py-9 bg-white md:py-10 rounded-[1.1rem] placeholder:text-2xl placeholder-secondary"{...field} />
                                </FormControl>
                                <FormMessage className="text-red-500" />
                                </FormItem>
                            )}
                            />
                  </div>
                    <Button type="submit" disabled={isLoading} className="w-full mx-auto mt-9 md:mt-12 bg-primary  py-9 text-white
                      text-[1.4rem] md:font-[700] font-lato  rounded-[1.1rem] ">Subscribe
                        </Button>
                </form>
            </Form>
        {/* <form className="max-w-[650px] mx-auto" onSubmit={handleSubmit}>
                <div>
                    <input 
                    className="w-full pl-8 py-6  md:py-8 rounded-[1.1rem] placeholder:text-2xl placeholder-secondary" placeholder="Full name" type="text" name="name" />
                </div>
                <div className="mt-8">
                    <input className="w-full pl-8 py-6  md:py-8 rounded-[1.1rem] placeholder:text-2xl placeholder-secondary" placeholder="Email" type="email" name="email" />
                </div>
                <button className="w-full mx-auto mt-9 md:mt-12 bg-primary py-4 md:py-6 text-white
                      text-[1.4rem] md:font-[700] font-lato  rounded-[1.1rem] ">
                        {isLoading?<Loader className='animate-spin mx-auto' />:'Subscribe'} 
                        </button>
        </form> */}
    </section>
  )
}

export default NewLetter