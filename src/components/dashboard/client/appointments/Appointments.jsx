import { appointments } from '@/static/data'
import React from 'react'
import AppointmentCard from './appointmentCard'
import axios from 'axios'
import { useQuery,  } from '@tanstack/react-query'
import Cookies from 'js-cookie'
import PostListLoader from '@/components/global/loaders/PostListLoader'
import { Link } from 'react-router-dom'

const Appointments = () => {

  const getAppointments = async()=>{
    return axios.get('https://styleitafrica.pythonanywhere.com/api/customer/profile',{
       headers: {
              Authorization: `Bearer ${Cookies.get('token')}`,
              'Content-Type': 'application/json',
              Accept: 'application/json'
            }
    })
  }

  const {data,isLoading,error} = useQuery({
        queryKey:['appointment'],
        queryFn:getAppointments,
        staleTime:5
  })

  console.log(data)
  console.log(error)
  return (
    <section className='container  px-4 xl:px-0'>
       <h1 className='text-center text-xl font-[700] capitalize my-9'>appointment details</h1>
       {
        isLoading?<PostListLoader/>: <div>
          {
              data?.data.appointments.length === 0 ?<div className='text-center border border-gray-200 py-16 rounded-md'>
                                                  <h1 className='text-2xl text-gray-600'> You currently have no appointment</h1>
                                                  <p className='text-gray-500 mt-3 text-md'> get started by   <Link to='/client/bookAppointment' className='text-primary'>booking an appointment</Link>  with a designer</p>
                                              </div>:
            <div className='flex flex-col md:flex-row justify-start md:justify-center lg:justify-start items-start md:flex-wrap gap-3  '>
            {
               data?.data.appointments.map(appointment=>{
                return (
                    <AppointmentCard key={appointment.id}  appointment={appointment}   />
                )
            })
            }
        </div>
          }
        </div>
      
       }
    </section>

  )
}

export default Appointments