import { creators } from '@/static/adminData'
import { Eye, MoreHorizontal, Trash2, UserX } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userPicture from '@/images/profile_i.png'
import Image from '@/components/global/Image'
import FashionDesignerCard from '../creator/fashionDesigners/FashionDesignerCard'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'

const SearchedCreators = ({creators}) => {
  
  return (
   
    <div>
         {
        creators?.length === 0 ? <div>
          <h1 className='text-center mt-6 text-xl'>No creator found</h1>
        </div>:
         <div className="flex flex-wrap justify-center gap-6 mb-12">
            {creators.map((designer) => (
            <FashionDesignerCard key={designer.id} designer={designer}/>
            ))}
        </div>
       }
    </div>
  )
}

export default SearchedCreators