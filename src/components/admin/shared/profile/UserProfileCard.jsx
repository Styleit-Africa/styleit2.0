import { Button } from '@/components/ui/button';
import { Edit3 } from 'lucide-react'
import React from 'react'

const UserProfileCard = ({cardProps,children}) => {
    const {title,sectionId,currentId,handleEdit} = cardProps;
    console.log(sectionId)
   
  return (
    
      <div className=' border  border-gray-200 rounded-xl p-5 mt-6' >
      <div className='flex justify-between items-center'>
            <h1 style={sectionId=='businessName'?{ fontSize:'2rem',paddingBlock:'1rem', backgroundImage:'radial-gradient(#27213c,#fd57aa,black)',color:'transparent',backgroundClip:'text'}:{}} className='animate duration-200 capitalize font-[500] text-lg text-sidebar'>{title}</h1>
            <div data-id={sectionId} onClick={(e)=>handleEdit(e)} className='flex gap-2 items-center cursor-pointer bg-sidebar text-lightGray  bordder border-gray-200 py-3 px-5 w-[max-content] rounded-lg'>
                <p className='text-lg'>Edit</p>
                <Edit3 className='text-sm'/>
            </div>
        </div>
        {children}

        {
        currentId == sectionId &&
        <div className="w-[max-content] mx-auto mt-5">
         <Button className="bg-sidebar hover:bg-sidebar text-lightGray px-8 py-6">Submit</Button>
         </div>        
       } 
      

    </div>
  )
}

export default UserProfileCard