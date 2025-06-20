import Avatar from '@/components/global/Avatar';
import { complaints as complaintData } from '@/static/adminData';
import { useGlobalStore } from '@/store/global/useGlobal';
import { useClientStore } from '@/store/useClient';
import logo from '@/images/logo.png'

import React, { memo, useEffect, useState } from 'react'
import Image from '@/components/global/Image';
import { Link } from 'react-router-dom';
const Complainants = () => {
    const {complaints,setCurrentMessages,setComplaints} = useClientStore(state=>state);
    const {searchData} = useGlobalStore(state=>state);
    const [currentIndex,setCurrentIndex] = useState(0)
    const filterComplaints = ()=>{
        const filteredItems = complaints.filter(complaint=>
            complaint.name.toLowerCase().includes(searchData)
        )
        if(searchData == ''){
            setComplaints(complaintData)
        }else{
            setComplaints(filteredItems)
        }
        }
    
    useEffect(()=>{
        filterComplaints()
    },[searchData])
    const updateMessage =index=> {
        setCurrentMessages(index)
        setCurrentIndex(index)
    }
  return (
    <ul>
        {complaints.map((complaint,index)=>{
            return(
                
                    <li key={complaint.id} className={`transition-all hover:scale-[1.1] cursor-pointer md:cursor-auto shadow-md md:shadow-none md:border-b border-gray-300  p-4 ${currentIndex === index&&'bg-sidebar text-white'} `} onClick={()=>updateMessage(index)}>
                        <div className='hidden md:flex items-center  gap-4'>
                        <Avatar data={{complaint,section:3}}/>
                            
                            <div className='w-full'>
                                <div className='flex justify-between items-center'>
                                <h1 className='text-md font-[700] capitalize' data-testid={`name-${complaint.id}`}>{complaint.name}</h1>
                                <p  data-testid={`time-${complaint.id}`}>3hrs ago</p>
                                </div>
                                <p className='hidden md:block mt-2' data-testid={`message-${complaint.id}`}>{complaint.message.substring(0,30)}...</p>
                                <p className='md:hidden mt-2 ' data-testid={`message-${complaint.id}`}>{complaint.message.substring(0,80)}...</p>

                            </div>
                            </div>
                        <Link to={`${complaint.id}`} className=' flex md:hidden items-center  gap-4'>
                        <Avatar data={{complaint,section:3}}/>
                            
                            <div className='w-full'>
                                <div className='flex justify-between items-center'>
                                <h1  data-testid='name' className='text-md font-[700] capitalize'>{complaint.name}</h1>
                                <p  data-testid={`time-${complaint.id}`}>3hrs ago</p>
                                </div>
                                <p  data-testid={`message-${complaint.id}`} className='hidden md:block mt-2'>{complaint.message.substring(0,30)}...</p>
                                <p  data-testid={`message-${complaint.id}`} className='md:hidden mt-2'>{complaint.message.substring(0,80)}...</p>

                            </div>
                    </Link> 
                      </li>
                
            )
        })}

     <div className='hidden md:flex justify-between my-2  '>
            <Image src={logo} className="h-[40px] w-[230px] mx-auto mt-2 transition-all hover:scale-[1.7]" />
     </div>
    </ul>
  )
}

export default memo(Complainants)