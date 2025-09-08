import React from 'react'

const CreatorSubscrptionHeader = ({full}) => {
  return (
   <>
      {
        full ?  
        <ul data-testis="full-header" className=' hidden md:flex flex-row justify-between capitalize w-full font-[700] p-3 '>
              <li className='basis-[15%]'>name</li>
              <li className='basis-[15%]'>plan</li>
              <li className='basis-[15%]'>type</li>
              <li className='basis-[15%]'>from</li>
              <li className='basis-[15%]'>to</li>
              <li className='basis-[15%]'>status</li>
              <li className='basis-[15%]'>action</li>
        </ul>:
              <ul  data-testis="half-header" className=' hidden md:flex flex-row justify-between capitalize w-full font-[700] p-3 '>
              <li className='basis-[15%]'>plan</li>
              <li className='basis-[15%]'>type</li>
              <li className='basis-[15%]'>from</li>
              <li className='basis-[15%]'>to</li>
              <li className='basis-[15%]'>status</li>
        </ul>
      }
   </>
  )
}

export default CreatorSubscrptionHeader