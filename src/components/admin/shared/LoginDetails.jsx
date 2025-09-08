import { loginDetails } from '@/static/adminData'
import { ActivitySquareIcon } from 'lucide-react'
import React from 'react'

const LoginDetails  = () => {
  
  return (
    <div className='flex flex-col md:flex-row gap-4 font-lato'>

      {
        loginDetails.map(detail=>{
            return (
                <div key={detail.id} className={`basis-[30%] lg:basis-[40%] xl:basis-[30%]   bg-gradient-to-tr from-primary to-sidebar to-[35%]  p-6 rounded-lg` }  >
                    <div className=' justify-between text-white capitalize  text-lg'>
                        <div className='flex justify-between '>
                            <p data-testid={`name-${detail.id}`} className='text-sm md:text-lg'> {detail.name}</p> 
                            <p data-testid={`value-${detail.id}`} className='text-sm md:text-lg'>{detail.value}</p>                  
                        </div>
                <ActivitySquareIcon data-testid={`icon-${detail.id}`} className='mx-auto mt-4 md:w-[60px] w-[40px] md:h-[60px] h-[40] text-4xl'/>
                    </div>  
                </div>
            )
        })
      }
    </div>
  )
}

export default LoginDetails 