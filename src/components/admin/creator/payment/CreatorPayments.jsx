import Image from '@/components/global/Image'
import { ChevronRight} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userPicture from '@/images/profile_i.png'
import { useGlobalStore } from '@/store/global/useGlobal'
import { check, creatorPayments as creatorPaymentData } from '@/static/adminData'
import CreatorLastPayments from './CreatorLastPayments'
import { format } from 'date-fns'

const CreatorPayments = () => {
      const [id,setId] = useState(null)
    const {searchData,setCreatorPayments,creatorPayments} = useGlobalStore(state=>state);
    const filtercreatorPayments = ()=>{
        const filteredItems = creatorPayments.filter(payment=>{
            return payment.name.toLocaleLowerCase().includes(searchData)||
            payment.status.toLocaleLowerCase().includes(searchData)||
            payment.from.toLocaleLowerCase().includes(searchData)||
            payment.to.toLocaleLowerCase().includes(searchData)
        })
            if(searchData == ''){
                setCreatorPayments(creatorPaymentData)
            }else{
                setCreatorPayments(filteredItems)
            }
        }
    
    useEffect(()=>{
        filtercreatorPayments()
        check()
    },[searchData])
    console.log(format(new Date('2025-05-01'),'MMMM do, yyyy'))
      
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
            <li className='basis-[15%]'>date</li>
            <li className='basis-[15%]'>amount</li>
            <li className='basis-[15%]'>reference no</li>
            <li className='basis-[15%]'>status</li>
            <li className='basis-[15%]'>action</li>
        </ul>
        <ul>
            {
                creatorPayments.map(payment=>{

                    return(
                        <li key={payment.id} className="relative mt-12 md:mt-0">
                            <div className={`${payment.status=='pending'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-yellow-500'} ${payment.status=='declined'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-red-500'} ${payment.status=='successful'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-green-500'} mt-5 shadow-md capitalize p-7 md:p-5 rounded-md relative`}>
                            <div className={`flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center capitalize rounded-md relative`}>
                              
                              <div className='flex items-center md:items-center justify-between mt-5 md:mt-0 w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>name:</p>
                              <div className='flex items-center gap-3 '>
                              <Image src={userPicture} className="w-[50px] h-[50px] rounded-full"/>
                             <p>{payment.name}</p>
                             </div>
                              </div>
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
                              <p className='basis-[15%] ' ><ChevronRight className={`transition-all duration-300 ${id === payment.id&& 'rotate-90'} cursor-pointer`}
                               onClick={()=>handleAction(payment.id)}/> </p>
                          </div>
                          {id === payment.id&& <div>
                                                      
                          {payment.lastPayments.map(lastPayment=>{
                              return <CreatorLastPayments key={lastPayment.id} payment={lastPayment}/>
                          })}
                             <Link to={`${payment.id}`} className='text-center capitalize  block text-primary mt-7 animate-bounce'>view all</Link>
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

export default CreatorPayments


