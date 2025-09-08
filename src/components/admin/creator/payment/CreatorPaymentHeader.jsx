import React from 'react'

const CreatorPaymentHeader = ({full}) => {
  return (
    <>
        {
        full ?  
        <ul data-testid="full-header" className=' hidden md:flex flex-row justify-between capitalize w-full font-[700] p-3 '>
            <li className='basis-[15%]'>name</li>
            <li className='basis-[15%]'>date</li>
            <li className='basis-[15%]'>amount</li>
            <li className='basis-[15%]'>reference no</li>
            <li className='basis-[15%]'>status</li>
            <li className='basis-[15%]'>action</li>
    </ul>:
    <ul data-testid="half-header" className=' hidden md:flex flex-row justify-between capitalize w-full font-[700] p-3 '>
               <li className='basis-[15%]'>email</li>
               <li className='basis-[15%]'>date</li>
               <li className='basis-[15%]'>amount</li>
               <li className='basis-[15%]'>reference no</li> 
               <li className='basis-[15%]'>status</li>
     </ul>
      }
    </>
    
  )
}

export default CreatorPaymentHeader