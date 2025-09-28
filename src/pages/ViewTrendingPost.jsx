import TrendingContents from '@/components/dashboard/TrendingContents';
import Image from '@/components/global/Image';
import { MoreHorizontal, X } from 'lucide-react';
import React, { useState } from 'react'
import postImage from '@/images/post_i.png'
import profile from '@/images/profile_i.png'
import { useParams } from 'react-router-dom'
import like from '@/images/like.png'
import shareIcon  from '@/images/share.png'
import message from '@/images/message.png'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipProvider } from '@radix-ui/react-tooltip';

const ViewTrendingPost = () => {
    const {id} = useParams();
    const [showTrending,setShowTrending] = useState(true)
    const [isOver,setIsOver] = useState(false)
    const handleOverFlow = (value)=>{
      setIsOver(value)
      console.log(value)
    }
  return (
        <section data-testid="view-trending-post" className="py-24 px-4 md:px-0 font-lato">
        <TrendingContents/>
        {
            showTrending&& <div  className={` font-lato py-6  flex justify-center items-center bg-[rgba(0,0,0,0.1)]  z-40  fixed top-0  overflow-hidden  transition-all duration-300 bottom-0  right-0 w-full `}>
        <div className='bg-white w-[810px]  shadow-lg rounded-lg ' 
        onMouseEnter={()=>handleOverFlow(true)} onMouseLeave={()=>handleOverFlow(false)}>
          {/* header */}
           <div className="border-b-[1px] border-gray-300 pdy-1 px-4">
             <div className='max-w-[400px] ml-auto  flex items-center justify-between'>
                <h1 className='font-bold text-xl'>Uthman's Post</h1>
          <X className='cursor-pointer h-16 w-16 scale-[0.5] transition-all duration-300 hover:scale-[0.7]'
           onClick={()=>setShowTrending(false)}/>
            </div>
           </div>

          {/* body */}
          <div className={`${isOver ? 'p-5 pr-1':'p-5'}`}>
           <div className={`h-[400px] w-full ${isOver ? 'overflow-y-auto':'overflow-hidden'} `}>

             <div className="flex items-center justify-between">
             <div className='flex gap-2 items-center '>
            <div className='w-[45px] h-[45px] rounded-full border-[2px] p-0.5 border-primary'>
            <Image src={profile} className='rounded-full w-full h-full' />
           </div>

           <div>
            <h2 className='capitalize text-md font-bold'> Uthman Abiola</h2>
            <p className='text-md'>August 9 at 10:30 AM</p>
           </div>
           </div>
            
           <TooltipProvider >
                        <Tooltip className='z-50'>
            <TooltipTrigger asChild>
                    <MoreHorizontal className='cursor-pointer text-xl'/>
            </TooltipTrigger>
            <TooltipContent className='absolute left-[-120px]  bg-white shadow-lg max-w-[300px]'>
                <p className='capitalize cursor-pointer'>view profile</p>
            </TooltipContent>
            </Tooltip>
           </TooltipProvider>

           </div>
          
          <div className='mt-5'>
                <h3 className='text-md font-bold'>i love it</h3>
                <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolorem magni optio fugit iure soluta?</p>
                <Image src={postImage} className='w-full rounded-md'/>
          </div>

          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, numquam dolor, alias quibusdam distinctio, exercitationem nemo quaerat adipisci nam fugit placeat dolore unde doloribus facere sequi pariatur. Autem beatae voluptates commodi neque cum officia itaque eligendi, numquam delectus voluptatem, animi provident eius omnis aspernatur enim accusantium quae? Impedit totam fugiat ad molestias officia laborum atque iusto ducimus quas possimus adipisci vel esse quod aspernatur repudiandae, eius hic est dolores dolor! Illo cum quibusdam ipsum similique ex mollitia reiciendis asperiores. Rerum beatae maxime adipisci temporibus itaque architecto eius reprehenderit, est nihil ut sed maiores consequatur commodi, totam, consequuntur hic asperiores aliquid! */}


           </div>
          {/* footer */}
          <div className='flex justify-between text-primary my-3'>
        <div className='flex gap-[0.1rem] items-center hover:cursor-pointer'>
            <p className='text-xs'>20</p>
            <Image src={like} className='w-4 h-4'/>
        </div>
        <div  data-testid="toggle-comment-button" className='flex gap-[0.1rem] items-center hover:cursor-pointer' onClick={()=>(setIsCommentOpened(!isCommentOpened))}>
            <p className='text-xs'>15</p>
            <Image src={message} className='w-4 h-4'/>
        </div>
        <div className='flex gap-[0.1rem] items-center' >
            <p className='text-xs'>10</p>
            <Image src={shareIcon} className='w-3 h-2 hover:cursor-pointer'/>
        </div>
    </div>
          </div>
        </div>
        
    </div>
        }

    </section>
    

  )
}

export default ViewTrendingPost
