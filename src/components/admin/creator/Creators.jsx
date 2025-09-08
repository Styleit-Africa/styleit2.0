import Image from '@/components/global/Image'
import { Eye,MoreHorizontal, Trash2, UserX } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userPicture from '@/images/profile_i.png'
import { creators as creatorsData } from '@/static/adminData'
import { useCreatorStore } from '@/store/useCreator'
import { useGlobalStore } from '@/store/global/useGlobal'
// creators

const Creators = () => {
    const [id,setId] = useState(null)
    const {setCreators,creators} = useCreatorStore(state=>state);
    const {searchData} = useGlobalStore(state=>state);
    console.log(creators,'cc')
        
    // console.log(creators)
     const searchItem = searchData.trim()
    const filterCreators = ()=>{
        const filteredItems = creators.filter(creator=>
            creator.name.toLowerCase().includes(searchItem)||
            creator.email.toLowerCase().includes(searchItem)||
            creator.gender.toLowerCase().includes(searchItem)||
            creator.status.toLowerCase().includes(searchItem)
        )
            if(searchItem == ''){
                setCreators(creatorsData)
            }else{
                setCreators(filteredItems)
            }
        }
    
    useEffect(()=>{
        filterCreators()
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
                creators.map(creator=>{
                    return(
                        <li className="relative" data-role="creators">
                            <div className={`${creator.status=='approved'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-green-500'}
                             ${creator.status=='banned'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-red-500'}
                             ${creator.status=='pending'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-yellow-500'}
                              ${creator.status=='suspended'&&'border-y-[3px] md:border-y-0 md:border-x-[3px] border-black'}
                             flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center mt-5 shadow-md capitalize p-5 rounded-md relative`}>
                              
                                <div className='flex items-end md:items-center justify-between  w-full md:w-auto md:basis-[15%]'>
                                <p className='font-[700] capitalize md:hidden'>name:</p>
                                <div className='flex items-center gap-3 '>
                                <Image src={userPicture} className="w-[50px] h-[50px] rounded-full"/>
                               <p data-testid={`name-${creator.id}`}  >{creator.name}</p>
                               </div>
                                </div>
                                <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                                <p className='font-[700] capitalize md:hidden'>email:</p>
                                <p data-testid={`email-${creator.id}`} >{creator.email}</p>
                                </div>
                                <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                                <p className='font-[700] capitalize md:hidden'>gender:</p>
                                <p data-testid={`gender-${creator.id}`} className='basis-[15%]'>{creator.gender}</p>
                                </div>
                                <div className='flex justify-between  w-full md:w-auto md:basis-[15%]'>
                                <p className='font-[700] capitalize md:hidden'>status:</p>
                                <p data-testid={`status-${creator.id}`} className={`basis-[15%]  ${creator.status=='pending'&&' md:border-y-0  text-yellow-500'}  ${creator.status=='approved'&&' md:border-y-0  text-green-500'} ${creator.status=='banned'&&' md:border-y-0  text-red-500'} ${creator.status=='suspended'&&' md:border-y-0  text-black'} `}>{creator.status}</p>
                                </div>
                                <p className='basis-[15%]' data-testid={`actionButton-${creator.id}`} ><MoreHorizontal className='cursor-pointer'
                                 onClick={()=>handleOptions(creator.id)}/> </p>
                            </div>

                            {id === creator.id&& <div data-testid={`menu-${creator.id}`} className='shadow-lg flex gap-3  py-5 z-30 px-4 bg-white rounded-md w-[max-content] absolute top-6 right-0'>
                                <Link to={`${creator.id}/profile/ct`}><Eye  className='text-green-500 text-lg'/></Link>
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

export default Creators