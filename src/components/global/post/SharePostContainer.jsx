import { Copy, Facebook, Instagram, Twitter, X } from 'lucide-react'
import React from 'react'
import { toast } from 'sonner'
import mobileLogo from '@/images/m_logo.png'
// import mobileLogo from '@/images/logo.png'
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { useLocation } from 'react-router-dom';
import Image from '../Image';

const SharePostContainer = ({setIsShared,post}) => {

  const link = window.location.origin+'/trending/'+post.id

  const handleCopy = ()=>{
    navigator.clipboard.writeText(link)
    toast("Link copied", {
                action: {
                label: <X size={16} />,
              },
            })
  }
  return (
     <div  className={`py-6  px-4 flex justify-center items-center bg-[rgba(0,0,0,0.1)]   z-[999]  fixed top-0  overflow-hidden  transition-all duration-300 bottom-0  right-0 w-full `}>
        <div className='bg-white w-full md:w-[700px] relative  shadow-lg rounded-lg pt-5 pb-10 px-5'>
       <div className='flex justify-between items-center px-5 my-3'>
        <div>
            <Image src={mobileLogo}/>
        </div>
         <div>
          <X className='cursor-pointer h-16 w-16 scale-[0.5] transition-all duration-300 hover:scale-[0.7]' onClick={()=>setIsShared(false)}/>
        </div>
       </div>
            <h1 className='text-center text-xl font-bold text-primary mb-2'>Share it and style it!</h1>

           <div className=' grid grid-cols-3 md:flex items-center justify-center gap-3 px-3 md:px-0'>
             <div className=' cursor-pointer group shadow-md  rounded-full px-5 pt-4 pb-3 transition-all scale-[0.95] duration-300 hover:scale-[1]'>
                <div className='w-[max-content] mx-auto'>
                 
                 <FacebookShareButton quate="share this post" url={'https://www.pinterest.com/pin/207587864045695702/'}>
                 {/* <FacebookShareButton quate="share this post" url={link}> */}
                  <FacebookIcon className='rounded-full w-10 h-10 group-hover:text-primary'/>
                 </FacebookShareButton>
                 </div>
                </div>
             <div className=' cursor-pointer group shadow-md  rounded-full px-5 pt-4 pb-3 transition-all scale-[0.95] duration-300 hover:scale-[1]'>
                 {/* <TwitterShareButton quate="share this post" url={'https://www.pinterest.com/pin/207587864045695702/'}> */}
                <div className='w-[max-content] mx-auto'>
                     <TwitterShareButton quate="share this post" url={link}>
                  <TwitterIcon className='rounded-full w-10 h-10  group-hover:text-primary'/>
                 </TwitterShareButton>
                </div>
                </div>
             <div className=' cursor-pointer group shadow-md  rounded-full px-5 pt-4 pb-3 transition-all scale-[0.95] duration-300 hover:scale-[1]'>
                 {/* <WhatsappShareButton quate="share this post" url={'https://www.pinterest.com/pin/207587864045695702/'}> */}
                <div className='w-[max-content] mx-auto'>
                 <WhatsappShareButton quate="share this post" url={link}>
                  <WhatsappIcon className='rounded-full w-10 h-10 group-hover:text-primary'/>
                 </WhatsappShareButton>
                </div>
                </div>
             <div className=' cursor-pointer group shadow-md  rounded-full px-5 pt-4 pb-3 transition-all scale-[0.95] duration-300 hover:scale-[1]'>
                <div className='w-[max-content] mx-auto'>
                 
                 <LinkedinShareButton quate="share this post" url={'https://www.pinterest.com/pin/207587864045695702/'}>
                 {/* <LinkedinShareButton quate="share this post" url={link}> */}
                  <LinkedinIcon className='rounded-full w-10 h-10 group-hover:text-primary'/>
                 </LinkedinShareButton>
                </div>
                </div>
             <div className=' cursor-pointer group shadow-md  rounded-full px-5 pt-4 pb-3 transition-all scale-[0.95] duration-300 hover:scale-[1]'>
                <div className='w-[max-content] mx-auto'>
                 
                 {/* <TelegramShareButton quate="share this post" url={'https://www.pinterest.com/pin/207587864045695702/'}> */}
                 <TelegramShareButton quate="share this post" url={link}>
                  <TelegramIcon className='rounded-full w-10 h-10 group-hover:text-primary'/>
                 </TelegramShareButton>
                </div>
                </div>
        
   <div>
                <div className=' cursor-pointer group shadow-md  rounded-full  px-5 pt-4 pb-3 transition-all scale-[0.95] duration-300 hover:scale-[1]'>
                <div className='w-[max-content] mx-auto'>
             
             <Copy onClick={handleCopy}  className='group-hover:text-primary w-10 h-10'/>
            </div>
            </div>
              </div>
           </div>
        </div>
        
    </div>
  )
}

export default SharePostContainer