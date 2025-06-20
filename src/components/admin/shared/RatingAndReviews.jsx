import React from 'react'
import Review from '../creator/ratingAndReview/Review'
import RatingAnalysis from '../creator/ratingAndReview/RatingAnalysis'

const RatingAndReviews = () => {
  return (
    <div className='flex flex-col gap-4 font-lato'>
      <div className='flex-[0.4]'>
          <RatingAnalysis/>
      </div>
      <div className='flex-[0.6]'>
        <Review/>

      </div>
    </div>
  )
}

export default RatingAndReviews