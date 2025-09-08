import React from 'react'
import postImage from '../../../images/post_i.png'
import Image from '../Image'
import { postImages, postTopImages } from '@/static/data'


const PostCardImages = () => {
  return (
    <div>
        {/* <div className='flex flex-row'> */}
        <div className={`${postTopImages.length > 1?'grid grid-cols-2': 'flex flex-row'}`}>
        {
            postTopImages.map((image,index)=>{
                return (
                     <div key={index} className={` h-52 ${postTopImages.length===1?'flex-1':''}`}>
                        <Image src={image} className='w-full h-full '/>
                    </div>
                )
            })
        }
         
        </div>
        {/* <div className='flex flex-row'>

         {
            postImages.slice(2,5).map((image,index)=>{
                return (
                     <div key={index} className=' h-40 flex-[0.5]'>
                        <Image src={image} className='w-full h-full '/>
                    </div>
                )
            })
        }

        </div> */}
          
    </div>
  )
}

export default PostCardImages