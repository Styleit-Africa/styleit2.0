import Image from '@/components/global/Image'
import { ChevronRight} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userPicture from '@/images/profile_i.png'
import { creatorPayments as creatorPaymentData } from '@/static/adminData'
import CreatorLastPayments from './CreatorLastPayments'
import { useCreatorStore } from '@/store/useCreator'
import { useGlobalStore } from '@/store/global/useGlobal'
import CreatorPaymentHeader from './CreatorPaymentHeader'

const CreatorPayments = () => {
    const [id,setId] = useState(null)
    const {setCreatorPayments,creatorPayments} = useCreatorStore(state=>state);
    const {searchData} = useGlobalStore(state=>state);

    const searchItem = searchData.trim();
    const filterCreatorPayments = ()=>{  
        const filteredItems = creatorPayments.filter(payment=>{
            return payment.name.toLowerCase().includes(searchItem)||
            payment.date.toLowerCase().includes(searchItem)||
            payment.email.toLowerCase().includes(searchItem)||
            payment.status.toLowerCase().includes(searchItem)||
            payment.ref.toLowerCase().includes(searchItem)
        })
            if(searchItem == ''){
                setCreatorPayments(creatorPaymentData)
            }else{
                setCreatorPayments(filteredItems)
            }
        }
    
    useEffect(()=>{
        filterCreatorPayments()
    },[searchItem])
      
    const handleAction = (creatorId)=>{
        if(id === creatorId){
            setId(null)
        }else{
            setId(creatorId)
        }
      }
return (
    <div className='font-lato  w-full'>
       <CreatorPaymentHeader full={true}/>
        <ul>
            {
                creatorPayments.map(payment=>{

                    return(
                        <li key={payment.id} className="relative mt-12 md:mt-0" data-testid="creatorPayments">
                            <div className={`${payment.status=='pending'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-yellow-500'} ${payment.status=='declined'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-red-500'} ${payment.status=='successful'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-green-500'} mt-5 shadow-md capitalize p-7 md:p-5 rounded-md relative`}>
                            <div className={`flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center capitalize rounded-md relative`}>
                              
                              <div className='flex items-center md:items-center justify-between mt-5 md:mt-0 w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>name:</p>
                              <div className='flex items-center gap-3 '>
                              <Image src={userPicture} className="w-[50px] h-[50px] rounded-full"/>
                             <p data-testid={`name-${payment.id}`} >{payment.name}</p>
                             </div>
                              </div>
                              <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>date:</p>
                              <p data-testid={`date-${payment.id}`} >{payment.date}</p>
                              </div>
                              <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>amount:</p>
                              <p data-testid={`amount-${payment.id}`} className='md:basis-[15%]'>{payment.amount}</p>
                              </div>
                              <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>ref:</p>
                              <p data-testid={`ref-${payment.id}`}  className='md:basis-[15%]'>{payment.ref}</p>
                              </div>
                              <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                              <p className='font-[700] capitalize md:hidden'>status:</p>
                              <p data-testid={`status-${payment.id}`}  className={` md:basis-[15%] ${payment.status == 'pending' &&' text-yellow-500'} ${payment.status == 'declined' &&' text-red-500'} ${payment.status=='successful'  &&' text-green-500 '} `}>{payment.status}</p>
                              </div>
                              <p className='basis-[15%] ' data-testid={`actionButton-${payment.id}`} ><ChevronRight className={`transition-all duration-300 ${id === payment.id&& 'rotate-90'} cursor-pointer`}
                               onClick={()=>handleAction(payment.id)}/> </p>
                          </div>
                          {id === payment.id&& <div data-testid={`last-payments-${payment.id}`}>
                                                      
                          {payment.lastPayments.map(lastPayment=>{
                              return <CreatorLastPayments key={lastPayment.id} payment={lastPayment} data-testid="creatorLastPayment" />
                          })}
                             <Link to={`${payment.id}/p`} className='text-center capitalize  block text-primary mt-7 animate-bounce'>view all</Link>
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


