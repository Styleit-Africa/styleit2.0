import React from 'react'
import check from '../../images/check.png'
const Reasons = ({reasons,header,image,isSignUp,isClient=true}) => {
  console.log(reasons,'here')
  return (
    // <div role="reasons" className='relative font-lato font-[500] bg-primary text-white flex-[0.45] px-12 pt-12 hidden md:block'>
    <div data-testid="reasons" className='relative font-lato font-[500] bg-primary text-white flex-[0.45] px-12 pt-12 hidden md:block'>
        <h1 className=' capitalize text-xl'>{header}</h1>
        <ul>
          {
            reasons.map(reason=>{
              return(
                
                <li key={reason} className="flex  items-center gap-4 mt-3"><div> <img src={check} className='w-[20px] ' alt="check" /></div> <p>{reason}</p></li>
              )
            })
          }
           
        </ul>
        {
          isSignUp 
          ?
            <img src={image} className={` ${isSignUp ? 'h-[560px]  absolute bottom-0 right-1':' h-[350px] -mt-8 w-[330px]'}`} alt="image" />
          :
            
            <img src={image} className={` ${isClient ? ' h-[320px] -mr-20 mt-4 w-[360px]':' h-[350px] -mt-8 w-[330px]'}`} alt="image" />
          

        }

    </div>
  )
}

export default Reasons