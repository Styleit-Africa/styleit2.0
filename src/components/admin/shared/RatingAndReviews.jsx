import React, { useState } from 'react'
import Review from '../creator/ratingAndReview/Review'
import RatingAnalysis from '../creator/ratingAndReview/RatingAnalysis'

const RatingAndReviews = () => {
  const [currentTab,setCurrentTab] = useState(false)

  const updateTab =tabId=>{
    if(tabId === 'feedback'){
      setCurrentTab(false)
    }else{
      setCurrentTab(true)
    }
  }
  return (
   <div className='font-lato'>
    <div className='flex '>
        <button className={`flex-[0.5] capitalize font-[700] ${!currentTab ? 'border-b-4  text-primary border-primary':'border-b-4 text-sidebar border-sidebar'}  mb-9 py-3 rounded-bl-lg`} onClick={()=>updateTab('feedback')} > customers feedback</button>
        <button className={`flex-[0.5] capitalize font-[700] ${currentTab ? 'border-b-4  text-primary border-primary':'border-b-4 text-sidebar border-sidebar'}  mb-9 py-3 rounded-br-lg`}  onClick={()=>updateTab('rating')}>rating analysis</button>
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