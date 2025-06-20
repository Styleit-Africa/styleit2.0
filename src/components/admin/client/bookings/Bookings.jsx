import Image from '@/components/global/Image'
import { ChevronRight, Eye,MoreHorizontal, Trash2, UserX } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userPicture from '@/images/profile_i.png'
import { bookings as bookingData } from '@/static/adminData'
import { useClientStore } from '@/store/useClient'
import { useGlobalStore } from '@/store/global/useGlobal'

const Bookings = () => {
    const [id,setId] = useState(null)
    const {bookings,setBookings} = useClientStore(state=>state);
   console.log(bookings)
    const {searchData} = useGlobalStore(state=>state);
    const filterBookings = ()=>{
        const filteredItems = bookings.filter(booking=> 
            booking.name.toLowerCase().includes(searchData)||
            booking.collectionDate.toLowerCase().includes(searchData)||
            booking.bookingDate.toLowerCase().includes(searchData)||
            booking.status.toLowerCase().includes(searchData)
        )
            if(searchData == ''){
                setBookings(bookingData)
            }else{
                setBookings(filteredItems)
            }
        }
    
    useEffect(()=>{
        filterBookings()
    },[searchData])

      
    const handleAction = (bookingId)=>{
    if(id === bookingId){
            setId(null)
        }else{
            setId(bookingId)
        }
    }
    
  return (
    <div className='font-lato  w-full'>
        <ul className=' hidden md:flex flex-row justify-between capitalize w-full font-[700] p-3 '>
            <li className='basis-[20%]'>name</li>
            <li className='basis-[16%]'>collection date</li>
            <li className='basis-[16%]'>booking date</li>
            <li className='basis-[16%]'>status</li>
            <li className='basis-[10%]'>action</li>
        </ul> 
        <ul>
            {
                bookings.map(booking=>{
                    return(
                        <li key={booking.id} className="relative mt-20 md:mt-0">
                            <div  className={`${booking.status=='accepted'&&' shadow-sm shadow-green-300 '} 
                        ${booking.status=='declined'&&' shadow-sm shadow-red-300'}
                        ${booking.status=='pending'&&' shadow-sm shadow-yellow-300'}
                          mt-5 shadow-md capitalize p-5 rounded-md relative`}>
                              
                              <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center'>
                                <div className='flex items-end md:items-center justify-between  w-full md:w-auto md:basis-[20%]'>
                                <p className='font-[700] capitalize md:hidden'>name:</p>
                                <div className='flex items-center gap-3 '>
                                <Image src={userPicture} className="w-[50px] h-[50px] rounded-full"/>
                               <p data-testid={`name-${booking.id}`}  >{booking.name}</p>
                               </div>
                                </div>
                              
                                <div className='flex justify-between  w-full md:w-auto md:basis-[16%]'>
                                <p className='font-[700] capitalize md:hidden'>collection date:</p>
                                <p data-testid={`collectionDate-${booking.id}`} >{booking.collectionDate}</p>
                                </div>
                             
                                <div className='flex justify-between  w-full md:w-auto md:basis-[16%]'>
                                <p className='font-[700] capitalize md:hidden'>booking date:</p>
                                <p data-testid={`bookingDate-${booking.id}`} >{booking.bookingDate}</p>
                                </div>
                                <div className='flex justify-between  w-full md:w-auto md:basis-[16%]'>
                                <p className='font-[700] capitalize md:hidden'>status:</p>
                                <p data-testid={`status-${booking.id}`} className={`basis-[16%] ${booking.status=='accepted'&&' md:border-r-0  text-green-500'}
                                 ${booking.status=='declined'&&' md:border-r-0  text-red-500'} ${booking.status=='pending'&&' md:border-r-0  text-yellow-500'} `}>{booking.status}</p>
                                </div>
                                <p data-testid={`actionButton-${booking.id}`} className='basis-[10%] hidden md:block' >
                                    <ChevronRight className={`transition-all duration-300 ${id === booking.id&& 'rotate-90'} cursor-pointer`}
                               onClick={()=>handleAction(booking.id)}/> </p>
                            </div>

                          {id === booking.id&& <div data-testid='otherColumns' className='mt-8 md:max-w-[800px]'>
                            <ul className=' hidden md:flex flex-row justify-between capitalize w-full font-[700] p-3 '>
                            <li className='basis-[16%]'>receiver</li>
                            <li className='basis-[25%]'>collection time</li> 
                            <li className='basis-[20%]'>booking time</li>
                        </ul>
                           
                              <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center '>
                                <div className='flex justify-between  w-full md:w-auto md:basis-[25%]'>
                                <p data-testid={`receiver-${booking.id}`} >{booking.receiver} </p>
                                </div>
                                <div className='flex justify-between  w-full md:w-auto md:basis-[25%]'>
                                <p className='font-[700] capitalize md:hidden'>collection time:</p>
                                <p data-testid={`collectionTime-${booking.id}`} className='basis-[16%]'>{booking.collectionTime}</p>
                                </div>
                                <div className='flex justify-between  w-full md:w-auto md:basis-[16%]'>
                                <p className='font-[700] capitalize md:hidden'>booking time:</p>
                                <p data-testid={`bookingTime-${booking.id}`} className='basis-[16%]'>{booking.bookingTime}</p>
                                </div>
                            </div>
                            
                            <Link to={`${booking.id}`} className='text-center capitalize  block text-primary mt-7 animate-bounce pr-4'>view all</Link>
                           
                          </div>
                               }

                               <div className='mt-3 md:max-w-[800px] md:hidden'>
                            <ul className=' hidden md:flex flex-row justify-between capitalize w-full font-[700] p-3 '>
                            <li className='basis-[16%]'>receiver</li>
                            <li className='basis-[25%]'>collection time</li> 
                            <li className='basis-[20%]'>booking time</li>
                        </ul>
                           
                              <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center '>
                              
                              
                                <div className='flex justify-between  w-full md:w-auto md:basis-[25%]'>
                                <p className='font-[700] capitalize md:hidden'>receiver:</p>
                                <p data-testid={`gender-${booking.id}`} >{booking.receiver} </p>
                                </div>
                                <div className='flex justify-between  w-full md:w-auto md:basis-[25%]'>
                                <p className='font-[700] capitalize md:hidden'>collection time:</p>
                                <p data-testid={`gender-${booking.id}`} className='basis-[16%]'>{booking.collectionTime}</p>
                                </div>
                                <div className='flex justify-between  w-full md:w-auto md:basis-[16%]'>
                                <p className='font-[700] capitalize md:hidden'>booking time:</p>
                                <p data-testid={`gender-${booking.id}`} className='basis-[16%]'>{booking.bookingTime}</p>
                                </div>
                            </div>
                            
                            <Link to={`${booking.id}`} className='text-center capitalize  block text-primary mt-7 animate-bounce pr-4'>view all</Link>
                                
                           
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

export default Bookings