import Avatar from '@/components/global/Avatar';
import { Input } from '@/components/ui/input';
import { Send } from 'lucide-react';
import React from 'react'

const Complaints = ({currentMessages}) => {
    
  return (
    <div className='pb-56 font-lato '>
        <div className='flex gap-3 max-w-[600px] '>
<div className=' mt-3 border border-gray-300 p-5 pb-2 rounded-lg'>
                            <div className="flex justify-between">
                   <div className='flex gap-4 items-center'>
                   <Avatar data={{complaint:currentMessages,section:1}}/>
                   <h3 className='font-[700] capitalize'>{currentMessages.name}</h3>
                    </div>
                    <p data-testid='time'>3:15am</p>
                   </div>
                   <p data-testid='complaint' className='mt-3'> <span className='text-blue-500 cursor-pointer'>@Fatai Ahmad</span>
                   {currentMessages.message}</p>                            </div>
        </div>
        {
            currentMessages.replies.map(reply=>{
                return(
                    <div className='flex gap-3 max-w-[600px]  mt-5 ml-12  md:ml-auto'>
                            <div className='bg-sidebar text-white mt-3  border border-gray-300 p-5  rounded-lg'>
                            <div className="flex justify-between">
                   <div className='flex gap-4 items-center'>
                    <Avatar data={{complaint:reply,section:2}}/>
                    <h3  data-testid={`replyName-${reply.id}`} className='font-[700] capitalize'>{reply.name}</h3>
                    </div>
                    <p  data-testid={`replyTime-${reply.id}`}>3:15am</p>
                   </div>
                            <p  data-testid={`replyMessage-${reply.id}`} className='mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia numquam totam illo incidunt dicta saepe quam quasi voluptatibus. Quasi quia iste atque minus laboriosam aliquam ipsum placeat temporibus cupiditate aut.</p>
                            </div>
                </div>
                )
            })
        }

        
<div className='fixed bottom-0 right-3 left-[3%] md:left-[35%] lg:left-[50%]  z-40 backdrop-blur-[0.2rem] bg-white/20  py-5'>
            <Input className='shadow-lg w-full py-8 block rounded-[2rem] outline-none'/>
              <div className='bg-sidebar p-2 rounded-full absolute right-5 top-8 z-20 w-[max-content]'>
              <Send className='text-white' />

              </div>
          </div>
     
    </div>
  )
}

export default Complaints