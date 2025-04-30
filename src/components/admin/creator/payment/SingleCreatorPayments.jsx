import Image from '@/components/global/Image'
import React, { useEffect} from 'react'
import userPicture from '@/images/profile_i.png'
import { useGlobalStore } from '@/store/global/useGlobal'
import { creatorPayments, creatorSubscriptions as subscriptionData } from '@/static/adminData'
import { useParams } from 'react-router-dom'

const SingleCreatorPayments = () => {
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
      const singleCreator = creatorPayments[Number(id)-1]
    
  return (
    <div className='font-lato  w-full'>

<div className='flex items-center md:items-center justify-between mt-5 md:mt-0 w-full md:w-auto md:basis-[15%]'>
                <div className='flex items-center gap-3 capitalize text-xl '>
                <Image src={userPicture} className=" w-[50px] h-[5s0px] rounded-full"/>
                <p>{singleCreator.name}</p>
                </div>
        </div>

            
        <ul className=' hidden md:flex flex-row justify-between capitalize w-full font-[700] p-3 '>
            <li className='basis-[15%]'>date</li>
            <li className='basis-[15%]'>amount</li>
            <li className='basis-[15%]'>reference no</li>
            <li className='basis-[15%]'>status</li>
        </ul>
        <ul>
        {
                creatorPayments.map(payment=>{

                    return(
                        <li key={payment.id} className="relative mt-12 md:mt-0">
                            <div className={`${payment.status=='pending'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-yellow-500'} ${payment.status=='declined'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-red-500'} ${payment.status=='successful'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-green-500'} mt-5 shadow-md capitalize p-7 md:p-5 rounded-md relative`}>
                            <div className={`flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center capitalize rounded-md relative`}>
                              
                            
                              <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>date:</p>
                              <p>{payment.date}</p>
                              </div>
                              <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>amount:</p>
                              <p className='md:basis-[15%]'>{payment.amount}</p>
                              </div>
                              <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>ref:</p>
                              <p className='md:basis-[15%]'>{payment.ref}</p>
                              </div>
                              <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>status:</p>
                              <p className={` md:basis-[15%] ${payment.status == 'pending' &&' text-yellow-500'} ${payment.status == 'declined' &&' text-red-500'} ${payment.status=='successful'  &&' text-green-500 '} `}>{payment.status}</p>
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

export default SingleCreatorPayments


