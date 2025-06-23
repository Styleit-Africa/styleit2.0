import { Star, StarHalf } from 'lucide-react'
import React from 'react'

const Stars = ({rating,className}) => {
  return (
    <div className={`flex gap-1 ${className}`}>
        {
            Array(5).fill(0).map((_,index)=>{
                console.log(index+1)
                return(
                    <div key={index}>
                          <Star className={`h-4 md:h-6 w-4 md:w-6 ${index+1<=rating?'text-yellow-400 text-sm':''}`}/>
                          {/* <StarHalf className={`${index+1<=rating?'text-yellow-400 text-sm':''}`}/> */}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Stars