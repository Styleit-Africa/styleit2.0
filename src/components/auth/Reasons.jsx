import React from 'react'
import check from '../../images/check.png'
const Reasons = ({header,image,isSignUp}) => {
  return (
    <div className='relative font-lato font-[500] bg-primary text-white flex-[0.45] px-12 pt-12 hidden md:block'>
        <h1 className=' capitalize text-xl'>{header}</h1>
        <ul>
            <li className="flex  items-center gap-4 mt-3"><div> <img src={check} className='w-[20px] ' alt="check" /></div> <p>Direct contact with Clients</p></li>
            <li className="flex  items-center gap-4 mt-3"><div> <img src={check} className='w-[20px] ' alt="check" /></div> <p>Product showcase on trending</p></li>
            <li className="flex  items-center gap-4 mt-3"><div> <img src={check} className='w-[20px] ' alt="check" /></div> <p>Secure payment mode</p></li>
        </ul>
        <img src={image} className={` ${isSignUp ? 'h-[560px]  absolute bottom-0 right-1':' h-[350px] -mt-8 w-[330px]'}`} alt="image" />
    </div>
  )
}

export default Reasons