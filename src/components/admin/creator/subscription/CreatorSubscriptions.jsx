import Image from '@/components/global/Image'
import { ChevronRight} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userPicture from '@/images/profile_i.png'
import { useGlobalStore } from '@/store/global/useGlobal'
import { creatorSubscriptions as subscriptionData } from '@/static/adminData'
import LastSubscriptions from './LastSubscriptions'

const CreatorSubscriptions = () => {
      const [id,setId] = useState(null)
    const {searchData,setCreatorSubscriptions,creatorSubscriptions} = useGlobalStore(state=>state);
    const filterCreatorSubscriptions = ()=>{
        const filteredItems = creatorSubscriptions.filter(subscription=>{
            return subscription.name.toLowerCase().includes(searchData)||
            subscription.status.toLowerCase().includes(searchData)||
            subscription.from.toLowerCase().includes(searchData)||
            subscription.to.toLowerCase().includes(searchData)
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
      
    const handleAction = (creatorId)=>{
        if(id === creatorId){
            setId(null)
        }else{
            setId(creatorId)
        }
      }
  return (
    <div className='font-lato  w-full'>
        <ul className=' hidden md:flex flex-row justify-between capitalize w-full font-[700] p-3 '>
            <li className='basis-[15%]'>name</li>
            <li className='basis-[15%]'>plan</li>
            <li className='basis-[15%]'>from</li>
            <li className='basis-[15%]'>to</li>
            <li className='basis-[15%]'>status</li>
            <li className='basis-[15%]'>action</li>
        </ul>
        <ul>
            {
                creatorSubscriptions.map(sub=>{

                    return(
                        <li key={sub.id} className="relative mt-12 md:mt-0">
                            <div className={`${sub.status=='active'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-green-500'} ${sub.status=='expired'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-red-500'} mt-5 shadow-md capitalize p-7 md:p-5 rounded-md relative`}>
                            <div className={`flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center capitalize rounded-md relative`}>
                              
                              <div className='flex items-center md:items-center justify-between mt-5 md:mt-0 w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>name:</p>
                              <div className='flex items-center gap-3 '>
                              <Image src={userPicture} className="w-[50px] h-[50px] rounded-full"/>
                             <p>{sub.name}</p>
                             </div>
                              </div>
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
                              <p className='basis-[15%] ' ><ChevronRight className={`transition-all duration-300 ${id === sub.id&& 'rotate-90'} cursor-pointer`}
                               onClick={()=>handleAction(sub.id)}/> </p>
                          </div>

                          {id === sub.id&& <div>
                            
                            {sub.lastSubscriptions.map(lastSub=>{
                                return <LastSubscriptions key={lastSub.id} sub={lastSub}/>
                            })}
                               <Link to={`${sub.id}`} className='text-center capitalize  block text-primary mt-7 animate-bounce'>view all</Link>
                          </div>
                               }
                            </div>
                           
                        </li>
                       
                    )
                })
            }
        </ul>
    </div>
  )
}

export default CreatorSubscriptions


