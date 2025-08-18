import Image from '@/components/global/Image'
import Indicator from '@/components/global/Indicator'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { X } from 'lucide-react'
import React, { useRef, useState } from 'react'
import gallery from '@/images/gallery-add.png'
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios'
import Cookies from 'js-cookie'
import { useGlobalStore } from '@/store/global/useGlobal'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

const Report = ({setShowReport}) => {

  return (
    <div className='px-5 font-lato py-6  flex justify-center  gap-3 bg-[rgba(0,0,0,0.1)]  items-center z-[999]  fixed top-0  bottom-0 left-0 right-0  overflow-hidden transition-all duration-300 '>
    
       <div className="bg-white  shadow-md rounded-md relative z-50">
            <div className="border-b-[1px] border-gray-300 pdy-1 px-4">
                   <div className='max-w-[400px] ml-auto  flex items-center justify-between'>
                      <h1 className='font-bold text-xl'>Report Uthman's Post</h1>
                <X 
                className='cursor-pointer h-16 w-16 scale-[0.5] transition-all duration-300 hover:scale-[0.7]' 
                onClick={()=>setShowReport(false)}
                />
                  </div>
                 </div>
         <div className='   overflow-y-auto  shadow-md rounded-md w-[600px] p-7 py-4'>
     <div className='relative'>
        <Textarea placeholder="What is your report!" className='h-[200px] placeholder:text-xl  shadow-md mt-5 focus-visible:ring-0 '/>
        </div>
                <Button className='bg-primary text-white w-full mt-8 py-4 font-[700] capitalize'>kindly report </Button>
        
     
    </div>
       </div>
    </div>
  )
}

export default Report