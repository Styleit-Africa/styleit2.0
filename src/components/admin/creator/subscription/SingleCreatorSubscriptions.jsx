import Image from '@/components/global/Image'
import React, { useEffect } from 'react'
import userPicture from '@/images/profile_i.png'
import { useGlobalStore } from '@/store/global/useGlobal'
import { creatorSubscriptions as subscriptionData } from '@/static/adminData'
import { useParams } from 'react-router-dom'

const SingleCreatorSubscriptions = () => {
    const {id} = useParams();
    const {searchData,setCreatorSubscriptions,creatorSubscriptions} = useGlobalStore(state=>state);
    const filterCreatorSubscriptions = ()=>{
        const filteredItems = creatorSubscriptions.filter(subscription=>{
            return subscription.name.toLocaleLowerCase().includes(searchData)||
            subscription.status.toLocaleLowerCase().includes(searchData)||
            subscription.from.toLocaleLowerCase().includes(searchData)||
            subscription.to.toLocaleLowerCase().includes(searchData)
        })
            if(searchData == ''){
                setCreatorSubscriptions(subscriptionData)
            }else{
                setCreatorSubscriptions(filteredItems)
            }
        }
    
    useEffect(()=>{
        filterCreatorSubscriptions()
    },[searchData])
      
    
  return (
    <div className='font-lato  w-full'>
         <div className='flex items-center md:items-center justify-between mt-5 md:mt-0 w-full md:w-auto md:basis-[15%]'>
                <div className='flex items-center gap-3 capitalize text-xl '>
                <Image src={userPicture} className=" w-[50px] h-[5s0px] rounded-full"/>
                <p>{creatorSubscriptions[Number(id)-1].name}</p>
                </div>
        </div>
        <ul className=' hidden md:flex flex-row justify-between capitalize w-full font-[700] p-3 '>
            <li className='basis-[15%]'>plan</li>
            <li className='basis-[15%]'>from</li>
            <li className='basis-[15%]'>to</li>
            <li className='basis-[15%]'>status</li>
        </ul>
        <ul>
            {
                creatorSubscriptions.map(sub=>{

                    return(
                       
                        <li key={sub.id} className="relative mt-9 md:mt-0">
                            <div className={`flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center mt-5 shadow-md capitalize p-7 md:p-5 rounded-md
                                  ${sub.status=='active'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-green-500'} 
                                  ${sub.status=='expired'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-red-500'} 
                                  mt-5 shadow-md capitalize p-7 md:p-5 rounded-md relative`}>
                              
                             
                              <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>plan:</p>
                              <p>{sub.plan}</p>
                              </div>
                              <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>from:</p>
                              <p className='md:basis-[15%]'>{sub.from}</p>
                              </div>
                              <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>to:</p>
                              <p className='md:basis-[15%]'>{sub.to}</p>
                              </div>
                              <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>status:</p>
                              <p className={` md:basis-[15%] ${sub.status == 'expired' &&' text-red-500'} ${sub.status=='active'  &&' text-green-500 '} `}>{sub.status}</p>
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

export default SingleCreatorSubscriptions


