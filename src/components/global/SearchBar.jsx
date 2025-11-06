import { useGlobalStore } from "@/store/global/useGlobal"
import Image from "./Image"
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { Search, X } from "lucide-react"
import SearchedCreators from "../dashboard/searchItems/SearchedCreators"
import SearchedPosts from "../dashboard/searchItems/SearchedPosts"
import m_logo from '../../images/m_logo.png'
import Cookies from "js-cookie"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import SearchModal from "./imageGallery/SearchModal"

const results = {
  posts:[
    {
      title:'post one'
    },
    {
      title:'post two'
    }
  ],
  designers:[
    {
      name:'uthman'
    },
    {
      name:'ibrahim'
    }
  ]
}


const SearchBar = ({styles:{img,input,parent=''},imageIcon})=>{
  const {pathname} = useLocation();
  const {userDashboardSearchData,searchPosts,searchCreators} = useGlobalStore()
 

  useEffect(()=>{
      searchCreators();
      searchPosts();
  },[userDashboardSearchData])
  
  const {setSearchData,searchModal,setSearchModal} = useGlobalStore();
  const handleSearch = (e)=>{
    setSearchData(e.target.value)
  }
  
const filterItems = ()=>{
  const posts = results?.posts?.filter(result=>result.title ==='post one')
  const designers = results.designers.filter(result=>result.name ==='uthmans')
  return {posts,designers}
}

// useEffect(()=>{
//   console.log(filterItems(),'filter')
// },[])
    return(
         <div className={`relative ${!pathname.includes('admin')&&'ml-3'} md:ml-0 flex-[0.7] ${parent}`}>
            <div className={`${input} cursor-pointer`} onClick={()=>setSearchModal(true)}>
                <p className="mt-3">Search...</p>
            </div>
            
            <Image src={imageIcon} className={img} alt="" />

       
          </div>
    )
}
 
export default SearchBar