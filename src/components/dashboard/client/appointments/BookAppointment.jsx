import React from 'react'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { PopoverTrigger,Popover, PopoverContent } from '@/components/ui/popover'
import { useForm } from 'react-hook-form'
import { Calendar } from '@/components/ui/calendar'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import Image from '@/components/global/Image'
import calendarImage from '@/images/calendar-2.png'
import clock from '@/images/clock.png'
import { bookAppointmentSchema } from '@/validations/appointmentValidation'

const BookAppointment = () => {
   const form = useForm({
      resolver:zodResolver(bookAppointmentSchema),
      defaultValues:{
        collectionTime:'',
        fullName:'',
        time:'',
        collectionDate:undefined,
        bookingDate:undefined,
        bookingTime:'',
      }
    })

    const onSubmit = (values)=>{

      console.log(values)
    }
  return (
      <Form {...form} className='' data-testid="edit-profile-form ">
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-6 md:mt-11 mb-20 px-4 xl:px-0">
                 
                      <div className='relative'>
                              <FormField
                                  control={form.control}
                                  name="fullName"
                                  render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                        <Input type="text" className='text-lg shadow-none pl-3 block h-12 text-gray-500
                                          focus-visible:ring-0' {...field} data-testid="fullName"/>
                                        </FormControl>
                                        <FormLabel 
                                        className='absolute left-3 -top-4  transition-all duration-300 
                                         bg-white font-[700]'>Full Name</FormLabel>
                                      <FormMessage className="text-red-500" />
                                      </FormItem>
                                  )}
                                  />
                        </div>
                 
                    
                       <div className='flex  flex-col md:flex-row justify-between gap-6 md:gap-10  md:mb-10'>
                          <div className='flex-[0.48]'>

                             <div className='relative mt-1 md:mt-5'>
                        

                      <FormField
                            control={form.control}
                            name="bookingDate"
                            render={({ field }) => (
                                <FormItem>
                                  <FormLabel 
                                        className='absolute left-3  transition-all duration-300 
                                         bg-white font-[700]'>Booking Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>

                              <Button 
                                data-testid="bookingDate"

                              variant={"outline"}
                              className={cn(
                                "w-full justify-between text-left h-12"
                              )}> 
                              {
                                  field.value ? format(field.value, "PPP"):<span className='text-gray-400 uppercase'>mm/dd/yyy</span>
                                }
                                  <Image src={calendarImage} className=' h-5 w-5'/>
                              </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 text-whitve bg-white">
                              <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              initialFocus
                              
                              />
                            </PopoverContent>
                      </Popover>
                                      
                                      <FormMessage className="text-red-500" />
                                      </FormItem>
                                  )}
                                  />
                        </div>
                        
                         <div className='relative mt-8 md:mt-11'>
                              <FormField
                                  control={form.control}
                                  name="bookingTime"
                                  render={({ field }) => (
                                      <FormItem>
                                        <FormControl>
                                     <div>
                                      <FormLabel htmlFor='bookingTime' className={`${form?.formState?.errors?.bookingTime?.message?' bottom-10':' bottom-3.5'} block bg-white absolute   right-4 w-[max-content]  h-[max-content] `}>
                                        <Image src={clock} className=' h-5 w-5 cursor-pointer'/>
                                      </FormLabel>
                                     <FormLabel 
                                        className={`absolute left-3 -top-2  transition-all duration-300 
                                         bg-white font-[700]`}>Booking Time</FormLabel>
                                        <Input type="text" placeholder="00:00" id="bookingTime" className='placeholder-gray-400 placeholder:text-[1.07rem] cursor-pointer text-lg shadow-none pl-3 block h-12 text-gray-500
                                          focus-visible:ring-0'  {...field} data-testid="bookingTime" />
                                     </div>
                                        </FormControl>
                                      <FormMessage className="text-red-500" />
                                      </FormItem>
                                  )}
                                  />
                        </div>

                          </div>
                          <div className='flex-[0.48]  mb-6'>
                            
                          <div className='relative  md:mt-5'>
                        

                        <FormField
                              control={form.control}
                              name="collectionDate"
                              render={({ field }) => (
                                  <FormItem>
                                    <FormLabel 
                                          className='absolute left-3  transition-all duration-300 
                                           bg-white font-[700]'>Collection Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
  
                                <Button 
                                data-testid="collectionDate"
                                variant={"outline"}
                                className={cn(
                                  "w-full justify-between text-left h-12"
                                )}> 
                                {
                                  field.value ? format(field.value, "PPP"):<span className='text-gray-400 uppercase'>mm/dd/yyy</span>
                                }
                                  <Image src={calendarImage} className=' h-5 w-5'/>
                                </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0 text-whitve bg-white">
                                <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                initialFocus
                                
                                />
                              </PopoverContent>
                        </Popover>
                                        
                                        <FormMessage className="text-red-500" />
                                        </FormItem>
                                    )}
                                    />
                          </div>
                         
                       <div className="flex gap-5 md:block">
                        
                       <div className='relative w-full md:w-auto md:flex-[0.5] mt-8 md:mt-11 '>
                              <FormField
                                  control={form.control}
                                  name="collectionTime"
                                  render={({ field }) => (
                                      <FormItem >
                                        <FormControl>
                                          <div>
                                          <FormLabel htmlFor='collectionTime' className={`${form?.formState?.errors?.bookingTime?.message?' bottom-10':' bottom-3.5'} block bg-white absolute   right-4 w-[max-content]  h-[max-content] `}>
                                          <Image src={clock} className=' h-5 w-5 cursor-pointer'/>
                                            </FormLabel>
                                            <Input type="text" placeholder="00:00" id="collectionTime" className='placeholder-gray-400 placeholder:text-[1.07rem]  cursor-pointer text-lg shadow-none pl-3 block h-12 text-gray-500
                                              focus-visible:ring-0' {...field} data-testid="collectionTime"/>
                                          </div>
                                        </FormControl>
                                        <FormLabel 
                                        className='absolute left-3 -top-4  transition-all duration-300 
                                         bg-white font-[700]'>Collection Time</FormLabel>
                                      <FormMessage className="text-red-500" />
                                      </FormItem>
                                  )}
                                  />
                        </div>
                      
                       </div>

                       

                          </div>
                       </div>
                                
                     
                            <div className='md:w-[500px] mx-auto  '>
                              <Button type="submit" data-testid="appointmentBtn" className="bg-primary border text-white capitalize border-primary w-full rounded-xl hover:text-primary 
                               font-[700] text-md hover:bg-white py-7"> 
                                make appointment
                                </Button>
                            </div>
      
                      </form>
                  </Form>
    
  )
}



export default BookAppointment

