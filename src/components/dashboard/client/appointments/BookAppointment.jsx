import React, { useEffect, useState } from 'react'
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
import axios from 'axios'
import Cookies from 'js-cookie'
import { useMutation, useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import { X } from 'lucide-react'
import profile from '@/images/profile_i.png'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Indicator from '@/components/global/Indicator'
import CreatorLoader from '@/components/global/loaders/CreatorLoader'
import ImageGallery from '../../../global/imageGallery/ImageGallery'

const BookAppointment = () => {

  const [searchData,setSearchData] = useState('')
  const [isSelected,setIsSelected] = useState(false)
  const [designers,setDesigners] = useState([
    {
      creator:'uthman Sulaimnan',
      creator_id:333,
      state:'Kwara'
    },
    {
      creator:'saheed Olanrewaju',
      state:'Kano',
      creator_id:363,

    }
  ])
   const form = useForm({
      resolver:zodResolver(bookAppointmentSchema),
      defaultValues:{
        collectionTime:'12:00',
        fullName:'',
        collectionDate:undefined,
        bookingDate:undefined,
        bookingTime:'01:00',
      }
    })

    const makeAppointment = async(data)=>{
      console.log(data)
        return await axios.post('https://styleitafrica.pythonanywhere.com/api/bookappointment',data,{
          headers:{
            Authorization:`Bearer ${Cookies.get('token')}`,
            Accept:'application/json'
          }
        })
      }
      const {mutate,data,error} = useMutation({
        mutationFn:makeAppointment
      })
    console.log(data)
    console.log(error)

    const onSubmit = (values)=>{

      // console.log(values,'here')
      const selectedDesigner = values.fullName.split(' ')
      const BookingData = {
        // dsignername:selectedDesigner[selectedDesigner.length-1],
        dsignername:'12',
        collectiondate:new Date(values.collectionDate).toLocaleDateString('en-CA'),
        bookingdate:new Date(values.bookingDate).toLocaleDateString('en-CA'),
        bookingtime:values.bookingTime,
        collectiontime:values.collectionTime
      };
      mutate(BookingData)
      console.log(data,'ddd')
     if(data?.status === 200){
       toast("Appointment created successfully", {
            action: {
            label: <X size={16} />,
          },
        })
     }
      
    }

    const handleDesignerSelection = (id)=>{
      form.setValue('fullName',id)
      console.log(form.formState.defaultValues.fullName)
      console.log(id)
    }

    const getDesigners = async()=>{
          return await axios.get('https://styleitafrica.pythonanywhere.com/api/designers',{
          headers:{
            Authorization:`Bearer ${Cookies.get('token')}`,
            Accept:'application/json'
          }
        })

    }

  const {data:designerData,isLoading,error:err} = useQuery({
        queryKey:['designers'],
        queryFn:getDesigners,
        staleTime:1000*10*60
  })

  const filterDesigners = ()=>{
    const _designers = designerData?.data?.designers.filter(designer=>
      designer.creator.toLowerCase().startsWith(searchData.toLowerCase())||
      designer.state.toLowerCase().startsWith(searchData.toLowerCase())||
      designer.lga.toLowerCase().startsWith(searchData.toLowerCase())
    )
    return _designers
  }

  console.log(designerData,'her')

  const getfilteredDesigners = filterDesigners()


  return (
    
    
    <div>
{/* 
      <ImageGallery/> */}
        <Form {...form} className='' data-testid="edit-profile-form ">
                      <form onSubmit={form.handleSubmit(onSubmit)}  className="space-y-5 mt-6 md:mt-11 mb-20 px-4 xl:px-0">
                 
                      <div className='relative'>
             

<FormField
  control={form.control}
  name="fullName"
  render={({ field }) => (
    <FormItem>
      <FormControl>
        <Select onValueChange={(value) => {
          field.onChange(value); // Update form state
        }} value={field.value}>
          <SelectTrigger className={`text-lg shadow-none pl-3 ${isSelected?'h-20':'h-12'} text-gray-500 focus-visible:ring-0`}>
            <SelectValue placeholder="Select a designer" />
          </SelectTrigger>
          <SelectContent className='z-50 bg-white p-4'>
            <div className='mb-8'>
              <input 
                type='text' 
                value={searchData} 
                onChange={(e) => setSearchData(e.target.value)}
                placeholder='Search for designers'
                className='focus:shadow-sm placeholder-gray-400 outline-none placeholder:text-[1.07rem] text-lg border-[2px] w-full rounded-md border-gray-500 pl-3 block py-4 text-gray-500 focus-visible:ring-0'
              />
            </div>
            {isLoading ? <CreatorLoader/> : (
              <div>
                {getfilteredDesigners.map((designer,index) => (
                  <SelectItem 
                    key={designer.creator_id} 
                    value={designer.creator+' '+designer.creator_id} // Use designer name as value
                    // value={designer.creator_id} // Use designer name as value
                    className='p-3 relative border shadow-md mt-3 rounded-md'
                    onClick={()=>handleDesignerSelection(designer.creator_id)} 
                  >
                    <div className='flex justify-between items-center'>
                      <div className='flex items-center gap-3'>
                        <div>
                          <Image src={designer.profile_pic} className='w-10 h-10 rounded-full'/>
                        </div>
                        <div>
                          <h3 className='capitalize font-[500]'>{designer.creator}</h3>
                          <p className='capitalize'>{designer.state} state</p>
                        </div>
                      </div>  
                      <div>
                        <Indicator className='absolute top-4 left-12 h-2 w-2 mt-1.5 md:mt-0 rounded-full bg-green-300 outline outline-1 outline-green-300 outline-offset-2'/>
                      </div>    
                    </div>
                  </SelectItem>
                ))}
              </div>
            )}
          </SelectContent>
        </Select>
      </FormControl>
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
    </div>
    
  )
}



export default BookAppointment

