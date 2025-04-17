import React from 'react'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { taskPaymentValidation } from '@/validations/paymentValidation'

const TaskPayment = () => {
   const form = useForm({
      resolver:zodResolver(taskPaymentValidation),
      defaultValues:{
        fullnName:'',
        businessName:'',
        amount:'',
        total:'',
        vat:'' 
      }
    })
  
  
    const onSubmit = (values)=>{
      console.log(values)
    }
  return (
      <Form {...form} data-testid="task-payment-form ">
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-6 md:mt-11 mb-20 px-4 xl:px-0">
                    <div className='flex  flex-col md:flex-row justify-between gap-8 md:gap-10 mb-8 md:mb-10'>

                             <div className='relative  flex-[0.48]'>
                              <FormField
                                  control={form.control}
                                  name="fullName"
                                  render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                        <Input type="text"className='text-lg shadow-none pl-4 block h-12 text-gray-500
                                          focus-visible:ring-0' {...field} data-testid="fullName"/>
                                        </FormControl>
                                        <FormLabel 
                                        className='absolute left-3 -top-4  transition-all duration-300 
                                         bg-white font-[700]'>Full Name </FormLabel>
                                      <FormMessage className="text-red-500" />
                                      </FormItem>
                                  )}
                                  />
                        </div>
                        
                         <div className='relative  flex-[0.48]'>
                              <FormField
                                  control={form.control}
                                  name="businessName"
                                  render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                        <Input type="text" className='text-lg shadow-none pl-4 block h-12 text-gray-500
                                          focus-visible:ring-0' {...field} data-testid="businessName" />
                                        </FormControl>
                                        <FormLabel 
                                        className='absolute left-3 -top-4  transition-all duration-300 
                                         bg-white font-[700]'>Business Name</FormLabel>
                                      <FormMessage className="text-red-500" />
                                      </FormItem>
                                  )}
                                  />
                        </div>

                          </div>
                          <div className='relative'>
                              <FormField
                                  control={form.control}
                                  name="amount"
                                  render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                        <Input type="text" className='text-lg shadow-none pl-4 block h-12 text-gray-500
                                          focus-visible:ring-0' {...field} data-testid="amount"/>
                                        </FormControl>
                                        <FormLabel 
                                        className='absolute left-3 -top-4  transition-all duration-300 
                                         bg-white font-[700]'>Amount</FormLabel>
                                      <FormMessage className="text-red-500" />
                                      </FormItem>
                                  )}
                                  />
                        </div> 
                        <div className='flex  flex-col md:flex-row justify-between  gap-8 md:gap-10   md:mb-10'>
                            
                          <div className='relative mt-3.5  md:mt-6 flex-[0.48]'>
                                <FormField
                                    control={form.control}
                                    name="vat"
                                    render={({ field }) => (
                                        <FormItem>
                                          <FormControl>
                                          <Input type="text" className='text-lg shadow-none pl-4 block h-12 text-gray-500
                                            focus-visible:ring-0' {...field} data-testid="vat" />
                                          </FormControl>
                                          <FormLabel 
                                          className='absolute left-3 -top-4  transition-all duration-300 
                                          bg-white font-[700]'>12%VAT</FormLabel>
                                        <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                    />
                          </div>
                          
                        <div className='relative mt-3.5 md:mt-6 flex-[0.48] '>
                                <FormField
                                    control={form.control}
                                    name="total"
                                    render={({ field }) => (
                                        <FormItem>
                                          <FormControl>
                                          <Input type="text" className='text-lg shadow-none pl-4 block h-12 text-gray-500
                                            focus-visible:ring-0' {...field} data-testid="total"/>
                                          </FormControl>
                                          <FormLabel 
                                          className='absolute left-3 -top-4  transition-all duration-300 
                                          bg-white font-[700]'>Total</FormLabel>
                                        <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                    />
                          </div>
                        
                       </div>
                            <div className='md:w-[500px] mx-auto pt-9 '>
                              <Button type="submit" data-testid="paymentBtn" className="bg-primary border text-white capitalize border-primary w-full rounded-xl hover:text-primary 
                               font-[700] text-md hover:bg-white py-7"> 
                                make payment
                                </Button>
                            </div>
      
                      </form>
                  </Form>
    
  )
}

export default TaskPayment