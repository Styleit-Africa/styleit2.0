import { Button } from '@/components/ui/button'
import React from 'react'

const numerals = ['one','two','three','four','five']

const StarTabs = () => {
  return (
    <div className='flex gap-4 mb-5'>
            
         {
           [...Array(5)].map((_,index)=>{
                return(
                    <Button className='px-6 md:px-12 py-6 shadow-none capitalize text-md md:text-lg 
                    text-lightGray 
                     bg-sidebar' >{numerals[index]} {index>1 ? 'stars':'star'}</Button>
                )
            })
         }
        </div>
  )
}

export default StarTabs