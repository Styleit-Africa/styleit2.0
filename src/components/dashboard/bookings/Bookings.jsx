import React from 'react'
import BookingCard from './BookingCard'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import PostListLoader from '@/components/global/loaders/PostListLoader'
import { Link } from 'react-router-dom'

const Bookings = () => {

   const getBookings = async()=>{
    return axios.get('https://styleitafrica.pythonanywhere.com/api/designer/profile',{
       headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
              'Content-Type': 'application/json',
              Accept: 'application/json'
            }
    })
  }

  const {data,isLoading,error} = useQuery({
        queryKey:['bookings'],
        queryFn:getBookings,
        staleTime:5
  })

 console.log(data)
  return (
   <div className="container font-lato  px-4 xl:px-0 pb-16">
       <h1 className='text-center text-xl font-[700] capitalize my-9'>appointment list</h1>
        <div>
          {
            isLoading ? <PostListLoader/>:
            <div>
              {
                data?.data.bookings.length ===0 ?<div className='text-center border border-gray-200 py-16 rounded-md'>
              <h1 className='text-2xl text-gray-500'> You've have currently not been booked by any client</h1>
              <p className='text-gray-500 mt-3 text-md'>  <Link to='/creator/posts' className='text-primary'>Create</Link> more posts to attract clients</p>
          </div>:<div className='flex flex-col md:flex-row justify-center  xl:justify-start md:flex-wrap gap-6  '>
      
      {data?.data.bookings.map(appointment=>{
        return(
            <BookingCard key={appointment.id} appointment={appointment} page="bookings"/>
        )
      })}

    </div>
              }
            </div>
            
          }

        </div>
   </div>
  )
}

export default Bookings