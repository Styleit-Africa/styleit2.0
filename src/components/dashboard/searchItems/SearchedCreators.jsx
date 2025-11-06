import React from 'react'
import FashionDesignerCard from '../creator/fashionDesigners/FashionDesignerCard'
import TrendingPostLoader from '@/components/global/loaders/TrendingPostLoader'

const SearchedCreators = ({isLoading,creators=[]}) => {
  return (
   
    <div>
      {
        isLoading?<TrendingPostLoader/>:<>
         {
        creators?.length === 0 ? <div>
          <h1 className='text-center mt-6 text-xl'>No creator found</h1>
        </div>:
         <div className="flex flex-wrap justify-center gap-6 mb-12 ">
            {creators.map((designer) => (
            <FashionDesignerCard key={designer.id} designer={designer}/>
            ))}
        </div>
       }</>
      }
        
    </div>
  )
}

export default SearchedCreators