import Image from '@/components/global/Image'
import { ChevronRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import userPicture from '@/images/profile_i.png'
import { bookings, bookings as creatorsData } from '@/static/adminData'
import { useGlobalStore } from '@/store/global/useGlobal'
import { useClientStore } from '@/store/useClient'

const SingleBooking = () => {
    const [bookingId,setBookingId] = useState(null)
    const {id} = useParams()
    const {setBookings,bookings} = useClientStore(state=>state);
    const {searchData} = useGlobalStore(state=>state);
    const filterBookings = ()=>{
        const filteredItems = bookings.filter(booking=> 
            booking.name.toLowerCase().includes(searchData)||
            booking.status.toLowerCase().includes(searchData)||
            booking.bookingDate.toLowerCase().includes(searchData)||
            booking.receiver.toLowerCase().includes(searchData)||
            booking.collectionDate.toLowerCase().includes(searchData)

        )
            if(searchData == ''){
                setBookings(creatorsData)
            }else{
                setBookings(filteredItems)
            }
        }
    
    useEffect(()=>{
        filterBookings()
    },[searchData])

      
    const handleAction = (_bookingId)=>{
    if(bookingId === _bookingId){
            setBookingId(null)
        }else{
            setBookingId(_bookingId)
        }
    }
    const handleOptions = (creatorId)=>{
        if(id === creatorId){
            setId(null)
        }else{
            setId(creatorId)
        }
      }
  return (
    <div className='font-lato  w-full'>
  <div className='flex items-center gap-3 capitalize text-xl mb-4'>
            <Image src={userPicture} className=" w-[50px]  rounded-full"/>
            <p>{bookings[Number(id)-1].name}</p>
        </div>

        <ul className=' hidden md:flex flex-row justify-between capitalize w-full font-[700] p-3 '>
            <li className='basis-[16%]'>receiver</li>
            <li className='basis-[16%]'>collection date</li>
            <li className='basis-[16%]'>booking date</li>
            <li className='basis-[16%]'>status</li>
            <li className='basis-[10%]'>action</li>
        </ul>
        <ul>
            {
                bookings.map(booking=>{
                    return(
                        <li key={booking.id} className="relative mt-10 md:mt-0">
                            <div  className={`${booking.status=='accepted'&&' shadow-sm shadow-green-300 '} 
                        ${booking.status=='declined'&&' shadow-sm shadow-red-300'}
                        ${booking.status=='pending'&&' shadow-sm shadow-yellow-300'}
                          mt-5 shadow-md capitalize p-5 rounded-md relative`}>
                              
                              <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center'>
                                <div className='flex items-end md:items-center justify-between  w-full md:w-auto md:basis-[20%]'>
                                <p className='font-[700] capitalize md:hidden'>receiver:</p>
                               <p data-testid={`name-${booking.id}`}  >{booking.receiver}</p>
                                </div>
                              
                                <div className='flex justify-between md:-indent-12 w-full md:w-auto  md:basis-[16%]'>
                                <p className='font-[700] capitalize md:hidden'>collection date:</p>
                                <p data-testid={`collectionDate-${booking.id}`} className='text-left ' >{booking.collectionDate}</p>
                                </div>
                             
                                <div className='flex justify-between md:-indent-10  w-full md:w-auto md:basis-[16%]'>
                                <p className='font-[700] capitalize md:hidden'>booking date:</p>
                                <p data-testid={`bookingDate-${booking.id}`} >{booking.bookingDate}</p>
                                </div>
                                <div className='flex justify-between md:-indent-2 text-right md:text-left w-full  md:w-auto md:basis-[16%]'>
                                <p className='font-[700] capitalize md:hidden'>status:</p>
                                <p data-testid={`status-${booking.id}`} className={`basis-[16%] ${booking.status=='accepted'&&' md:border-r-0  text-green-500'}
                                 ${booking.status=='declined'&&' md:border-r-0  text-red-500'} ${booking.status=='pending'&&' md:border-r-0  text-yellow-500'} `}>{booking.status}</p>
                                </div>
                                <p className='basis-[10%] hidden md:block' ><ChevronRight className={`transition-all duration-300 ${bookingId === booking.id&& 'rotate-90'} cursor-pointer`}
                               onClick={()=>handleAction(booking.id)}/> </p>
                            </div>

                          {bookingId === booking.id&& <div className='mt-8 md:max-w-[800px]'>
                            <ul className=' hidden md:flex flex-row justify-between capitalize w-full font-[700] p-3 '>
                            <li className='basis-[25%]'>collection time</li> 
                            <li className='basis-[25%]'>booking time</li>
                        </ul>
                           
                              <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center '>
                              
                              
                                <div className='flex justify-between  w-full md:w-auto md:basis-[25%] '>
                                <p className='font-[700] capitalize md:hidden md:basis-[25%]'>collection time:</p>
                                <p data-testid={`collectionTime-${booking.id}`} className=' md:ml-4'>{booking.collectionTime}</p>
                                </div>
                                <div className='flex justify-between  w-full md:w-auto md:basis-[25%]'>
                                <p className='font-[700] capitalize md:hidden'>booking time:</p>
                                <p data-testid={`bookingTime-${booking.id}`} className='basis-[16%]'>{booking.bookingTime}</p>
                                </div>
                                
                      
                            </div>
                            
                          </div>
                               }

                               <div className='mt-3 md:max-w-[800px] md:hidden '>
                            <ul className=' hidden md:flex flex-row justify-between capitalize w-full font-[700] p-3 '>
                            <li className='basis-[25%]'>collection time</li> 
                            <li className='basis-[20%]'>booking time</li>
                        </ul>
                           
                              <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center '>
                              
                                <div className='flex justify-between  w-full md:w-auto md:basis-[25%]'>
                                <p className='font-[700] capitalize md:hidden'>collection time:</p>
                                <p data-testid={`collectionTime-${booking.id}`} className='md:basis-[25%]'>{booking.collectionTime}</p>
                                </div>
                                <div className='flex justify-between  w-full md:w-auto md:basis-[25%]'>
                                <p className='font-[700] capitalize md:hidden'>booking time:</p>
                                <p data-testid={`bookingTime-${booking.id}`} className='md:basis-[25%]'>{booking.bookingTime}</p>
                                </div>
                                
                      
                            </div>
                            
                           
                          </div>
                            </div>
                           
                        </li>
                       
                    )

                })
            }
        </ul>
    </div>
  )
}

export default SingleBooking