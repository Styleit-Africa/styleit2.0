import Avatar from '@/components/global/Avatar'
import Stars from '@/components/global/Stars'
import { reviews } from '@/static/adminData'
import { format } from 'date-fns'
import { Star, StarIcon, StarOff } from 'lucide-react'
import React from 'react'

const Review = () => {
  return (
    <div>
        {
            reviews.map(review=>{
                return(
                    // <div className='shadow-lg p-5 rounded-lg mb-5 '>
                    <div className='shadow-lg p-8 rounded-lg mb-5 bg-gradient-to-tr from-primary to-sidebar to-[35%] text-lightGray'>
                        <div className='flex justify-between '>
                            <div className='flex gap-2  items-center '>
                            <Avatar data={{complaint:review,section:3,
                                style:'w-[60px] h-[60px] rounded-full'}} />
                            <div>
                                <h2 className=' capitalize font-[700]'>{review.name}</h2>
                                <p className='capitalize'>{format(new Date(review.date),'MMMM do, yyyy')}</p>
                            </div>
                        </div>
                        <Stars rating={review.rating}/>
                        {/* <Star className='text-yellow-400'/> */}
                        </div>
                        <p className='mt-3'>{review.comment}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Review