import { postImages } from '@/static/data'
import React from 'react'
import Image from '../Image'

const RenderImageSize = () => {

    switch(postImages.length){
        case 1:
            <div>
                {
                    postImages.map((image,index)=>{
                        return (
                           <div className=' h-52 flex-1'>
                                <Image src={image} className='w-full h-full '/>
                            </div>
                        )
                    })
                }
            </div>
        break
        case 2:
            <div>
                {
                    postImages.map((image,index)=>{
                        return (
                           <div className=' h-52 flex-[0.5]'>
                                <Image src={image} className='w-full h-full '/>
                            </div>
                        )
                    })
                }
            </div>
        break


    }
  return (
    <div>
        
    </div>
  )
}

export default RenderImageSize