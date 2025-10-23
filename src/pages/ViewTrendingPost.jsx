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
import ViewPostDetails from '@/components/global/post/ViewPostDetails';

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
            showTrending&& <ViewPostDetails/>
        }

    </section>
    

  )
}

export default ViewTrendingPost
