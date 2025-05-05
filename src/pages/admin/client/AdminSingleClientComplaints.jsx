import Complainants from '@/components/admin/client/complaint/Complainants';
import Complaints from '@/components/admin/client/complaint/Complaints';
import send from '@/images/send.png'

import { Input } from '@/components/ui/input';
import React, { useEffect, useRef, useState } from 'react'
import Image from '@/components/global/Image';
import { ArrowBigLeft, Send } from 'lucide-react';
import { useClientStore } from '@/store/useClient';
import { Link } from 'react-router-dom';

const AdminSingleClientComplaints = () => {
  const {currentMessages} = useClientStore(state=>state);
  
  return (
    <section   className='w-full font-lato' data-testid="admin-creator-profile">
      <Link to="/admin/clients/complaints & disputes" className='flex items-center gap-4 mb-5'> <ArrowBigLeft className='text-primary'/> <p className=' text-lg text-primary'>Complainants</p> </Link>
      <Complaints currentMessages={currentMessages}/>
    </section>
  )
}

export default AdminSingleClientComplaints