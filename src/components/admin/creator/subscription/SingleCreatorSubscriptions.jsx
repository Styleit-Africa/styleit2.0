import Image from '@/components/global/Image'
import React, { useEffect } from 'react'
import userPicture from '@/images/profile_i.png'
import { creatorSubscriptions as subscriptionData } from '@/static/adminData'
import { useParams } from 'react-router-dom'
import { useCreatorStore } from '@/store/useCreator'
import { useGlobalStore } from '@/store/global/useGlobal'
import CreatorSubscrptionHeader from './CreatorSubscrptionHeader'

const SingleCreatorSubscriptions = () => {
    const {id} = useParams();
    const {setCreatorSubscriptions,creatorSubscriptions} = useCreatorStore(state=>state);
    const {searchData} = useGlobalStore(state=>state);

    const searchItem = searchData.trim();    
    const filterCreatorSubscriptions = ()=>{

        const filteredItems = creatorSubscriptions.filter(subscription=>{
            return subscription.name.toLowerCase().includes(searchItem)||
            subscription.status.toLowerCase().includes(searchItem)||
            subscription.from.toLowerCase().includes(searchItem)||
            subscription.to.toLowerCase().includes(searchItem)
        })
            if(searchItem == ''){
                setCreatorSubscriptions(subscriptionData)
            }else{
                setCreatorSubscriptions(filteredItems)
            }
        }
    
    useEffect(()=>{
        filterCreatorSubscriptions()
    },[searchItem])
      
    
  return (
    <div className=' font-lato '>

        <div className='flex items-center gap-3 capitalize text-xl '>
            <Image src={userPicture} className=" w-[50px] h-[5s0px] rounded-full"/>
            <p>{creatorSubscriptions[Number(id)-1].name}</p>
        </div>
       <CreatorSubscrptionHeader full={false} />
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
                              <p data-testid={`name-${sub.id}`} >{sub.plan}</p>
                              </div>
                              <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>from:</p>
                              <p data-testid={`from-${sub.id}`} className='md:basis-[15%]'>{sub.from}</p>
                              </div>
                              <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>to:</p>
                              <p data-testid={`to-${sub.id}`} className='md:basis-[15%]'>{sub.to}</p>
                              </div>
                              <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>status:</p>
                              <p data-testid={`status-${sub.id}`} className={` md:basis-[15%] ${sub.status == 'expired' &&' text-red-500'} ${sub.status=='active'  &&' text-green-500 '} `}>{sub.status}</p>
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


