import FrequentlyAskedQuestions from '@/components/global/FrequentlyAskedQuestions'
import React from 'react'

const FrequentlyAskedQuestionsPage = () => {
  return (
    <div className="py-20 px-4  font-lato bg-gradient-to-bl to-pink-50  to-[50%] from-[50%] md:to-[54.2%] from-gray-50 md:from-[54.7%] ">
        <h1 className='text-2xl font-lato font-bold text-center text-primary mb-7 capitalize'>frequently asked questions</h1>
        <FrequentlyAskedQuestions/>
    </div>
  )
}

export default FrequentlyAskedQuestionsPage