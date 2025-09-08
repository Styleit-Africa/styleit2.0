import Image from '@/components/global/Image'
import { Eye,MoreHorizontal, Trash2, UserX } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userPicture from '@/images/profile_i.png'
import { creators as clientsData } from '@/static/adminData'
import { useGlobalStore } from '@/store/global/useGlobal'
import { useClientStore } from '@/store/useClient'

const Clients = () => {
    const [id,setId] = useState(null)
    const {setClients,clients} = useClientStore(state=>state);
    const {searchData} = useGlobalStore(state=>state);
        
     const searchItem = searchData.trim()
    const filterClients = ()=>{
        const filteredItems = clients.filter(client=>
            client.name.toLowerCase().includes(searchItem)||
            client.email.toLowerCase().includes(searchItem)||
            client.status.toLowerCase().includes(searchItem)
        )
            if(searchItem == ''){
                setClients(clientsData)
            }else{
                setClients(filteredItems)
            }
        }
    
    useEffect(()=>{
        filterClients()
    },[searchItem])

      
    const handleOptions = (creatorId)=>{
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
            <li className='basis-[15%]'>email</li>
            <li className='basis-[15%]'>gender</li>
            <li className='basis-[15%]'>status</li>
            <li className='basis-[15%]'>actions</li>
        </ul>
        <ul>
            {
                clients.map(client=>{
                    return(
                        <li className="relative" data-role="clients">
                            <div className={`${client.status=='approved'&&'border-r-[3px] md:border-r-0 md:border-x-[3px] border-green-500'} 
                            ${client.status=='banned'&&'border-r-[3px] md:border-r-0 md:border-x-[3px] border-red-500'}
                             ${client.status=='suspended'&&'border-r-[3px] md:border-r-0 md:border-x-[3px] border-black'}
                              flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center mt-5 shadow-md capitalize p-5 roundced-md relative`}>
                              
                                <div className='flex items-end md:items-center justify-between  w-full md:w-auto md:basis-[15%]'>
                                <p className='font-[700] capitalize md:hidden'>name:</p>
                                <div className='flex items-center gap-3 '>
                                <Image src={userPicture} className="w-[50px] h-[50px] rounded-full"/>
                               <p data-testid={`name-${client.id}`}  >{client.name}</p>
                               </div>
                                </div>
                                <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                                <p className='font-[700] capitalize md:hidden'>email:</p>
                                <p data-testid={`email-${client.id}`} >{client.email}</p>
                                </div>
                                <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                                <p className='font-[700] capitalize md:hidden'>gender:</p>
                                <p data-testid={`gender-${client.id}`} className='basis-[15%]'>{client.gender}</p>
                                </div>
                                <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                                <p className='font-[700] capitalize md:hidden'>status:</p>
                                <p data-testid={`status-${client.id}`} className={`basis-[15%] ${client.status=='approved'&&' md:border-r-0  text-green-500'}
                                 ${client.status=='banned'&&' md:border-r-0  text-red-500'} ${client.status=='suspended'&&' md:border-r-0  text-black'} `}>{client.status}</p>
                                </div>
                                <p className='basis-[15%]' data-testid={`actionButton-${client.id}`} ><MoreHorizontal className='cursor-pointer'
                                 onClick={()=>handleOptions(client.id)}/> </p>
                            </div>

                            {id === client.id&& <div data-testid={`menu-${client.id}`} className='shadow-lg flex gap-3  py-5 z-30 px-4 bg-white rounded-md w-[max-content] absolute top-6 right-0'>
                                <Link to={`${client.id}/profile/cn`}><Eye  className='text-green-500 text-lg'/></Link>
                                <Trash2 className='text-red-500 text-lg'/>
                                <UserX  className='text-red-500 text-lg'/>
                            </div> }
                           
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Clients