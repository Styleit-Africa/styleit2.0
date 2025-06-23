import Avatar from '@/components/global/Avatar'
import Stars from '@/components/global/Stars'
import { Button } from '@/components/ui/button'
import { reviews as reviewData } from '@/static/adminData'
import { format } from 'date-fns'
import React, { useState } from 'react'
import StarTabs from './StarTabs'

const Review = () => {
    const [reviews,setReviews] = useState(reviewData)
    const [currentIndex,setCurrentIndex] = useState('all')
    const handleStarTabs =rating=>{

        setCurrentIndex(rating-1)
        if(rating === 'all'){
            setReviews(reviewData)
            setCurrentIndex('all')
        }else{
            const currentTabReview = reviewData.filter(review=>review.rating == rating)
            setReviews(currentTabReview)
            console.log(currentTabReview)
        }
    }

  return (
    <div>
       <StarTabs currentIndex={currentIndex} handleStarTabs={handleStarTabs}/>
        {
            reviews.map(review=>{
                return(
                    <div className='shadow-lg p-8 rounded-lg mb-5 bg-gradient-to-tr from-primary to-sidebar to-[35%] text-lightGray'>
                        <div className='flex justify-between '>
                            <div className='flex gap-2  items-center '>
                            <Avatar data={{complaint:review,section:3,
                                style:'w-[40px] md:w-[60px] h-[40px] md:h-[60px] rounded-full'}} />
                            <div>
                                <h2 className=' capitalize font-[700] text-sm md:text-lg'>{review.name}</h2>
                                <p className='capitalize texd-xs md:text-lg'>{format(new Date(review.date),'MMMM do, yyyy')}</p>
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