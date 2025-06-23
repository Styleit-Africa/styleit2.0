import React, { useState } from 'react'
import Review from '../creator/ratingAndReview/Review'
import RatingAnalysis from '../creator/ratingAndReview/RatingAnalysis'

const RatingAndReviews = () => {
  const [currentTab,setCurrentTab] = useState(false)

  const updateTab = ()=>{
    setCurrentTab(!currentTab)
  }
  return (
   <div>
    <div className='flex '>
        <button className={`flex-[0.5] capitalize ${!currentTab ? 'border-b-4  text-primary border-primary':'border-b-4 text-sidebar border-sidebar'}  mb-9 py-3 rounded-bl-lg`} onClick={updateTab} > customers feedback</button>
        <button className={`flex-[0.5] capitalize ${currentTab ? 'border-b-4  text-primary border-primary':'border-b-4 text-sidebar border-sidebar'}  mb-9 py-3 rounded-br-lg`}  onClick={updateTab}>rating analysis</button>
    </div>

    {
      currentTab ? (
<div className='flex-[0.4]'>

          <RatingAnalysis/>
      </div>
      ):(
      <div className='flex-[0.6] mt-2'>
    
        <Review/>

      </div>
        
      )
    }
     
     {/* <div className='flex flex-col gap-4 font-lato'>
      <div className='flex-[0.4]'>

          <RatingAnalysis/>
      </div>
      <div className='flex-[0.6] mt-8'>
    
        <Review/>

      </div>
    </div> */}
   </div>
  )
}

export default RatingAndReviews