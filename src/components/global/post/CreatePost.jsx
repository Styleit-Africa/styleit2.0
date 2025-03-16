import React from 'react'
import profileImage from '../../../images/profile_i.png'
import gallery from '../../../images/gallery-add.png'
import Image from '../Image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Indicator from '../Indicator'

const CreatePost = () => {
  return (
    <div className='flex items-center relative border-b border-gray-100 h-16  max-w-[500px] mt-12 mx-auto md:mx-0'>
        <Image src={profileImage} className="w-12 h-12 block"/>
        <Indicator className='h-2 w-2 absolute top-2.5 left-9 md:hidden rounded-full bg-red-500'/>
        <Input type="text" placeholder="Create a post" className="h-full basis-[58%] border-none shadow-none  focus-visible:ring-0 placeholder-gray-400 placeholder:text-lg"/>
        <div className='flex  gap-12 items-center  '>
            <Image src={gallery} className="w-6 h-6"/>
            <Button className='text-white px-5 py-4 md:py-0 md:px-8 rounded-lg '>Post</Button>
        </div>
    </div>
  )
}

export default CreatePost