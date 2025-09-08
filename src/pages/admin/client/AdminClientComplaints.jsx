import Complainants from '@/components/admin/client/complaint/Complainants';
import Complaints from '@/components/admin/client/complaint/Complaints';
import send from '@/images/send.png'

import { Input } from '@/components/ui/input';
import React, { useEffect, useRef, useState } from 'react'
import Image from '@/components/global/Image';
import { Send } from 'lucide-react';
import { useClientStore } from '@/store/useClient';

const AdminClientComplaints = () => {
  const [isOver,setIsOver] = useState(false)
  const [isOverMessage,setIsOverMessage] = useState(false);
  const {currentMessages} = useClientStore(state=>state);


  
  return (
    <section   className='w-full font-lato' data-testid="admin-creator-profile">
      <div className='flex gap-4'>
        <div className={` flex-1 md:flex-[0.35]  overflow-x-hidden h-auto md:h-[800px] md:shadow-md  ${isOver?'md:overflow-y-hidden':'md:overflow-y-scroll'}`}
         onMouseEnter={()=>setIsOver(false)}
         onMouseLeave={()=>setIsOver(true)}> 
          <Complainants/>
        </div>
       <div className={`relative md:flex-[0.65]    h-[800px] hidden md:block ${isOverMessage?'overflow-y-hidden':'overflow-y-scroll pr-2'}`}
         onMouseEnter={()=>setIsOverMessage(false)}
         onMouseLeave={()=>setIsOverMessage(true)}> 
          <Complaints currentMessages={currentMessages}/>

       </div>
      </div>
    </section>
  )
}

export default AdminClientComplaints