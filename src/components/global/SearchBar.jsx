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

 {/* search modal */}

  {/* <SearchModal page='user-dashboard' creators={creators}/> */}
      {/* {
        isSearchModal&& <div className='px-5 font-lato py-6  flex justify-center  gap-3 bg-[rgba(0,0,0,0.1)]   z-[999]  fixed top-0  bottom-0 left-0 right-0  overflow-hidden transition-all duration-300 '>
    
    <div className="overflow-hidden  bg-white w-[1200px] shadow-md rounded-md relative z-50 p-6">
        <div className="flex justify-between items-center mb-3">
          <div>
              <Image src={m_logo} />
          </div>
          <X className="h-8 w-8 scale-[0.8] transition-all duration-300 hover:scale-[1.5] cursor-pointer" onClick={()=>setIsSearchModal(false)}/>
        </div>
                <div className="relative ">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="text"
                            placeholder="search..."
                            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg outline-none"
                          />
                        </div>

            <div className="flex gap-3 mt-4 font-lato font-[500]">
                <button type='button' onClick={()=>setTabValue('designers')} className={`basis-[15%] shadow-md py-4 rounded-md capitalize transition-all duration-300   ${tabValue === 'designers'?'bg-white text-black hover:bg-primary hover:text-white':'text-white hover:bg-white bg-primary'} hover:text-black text-md`}>designers</button>
                <button type='button' onClick={()=>setTabValue('posts')} className={`basis-[15%] shadow-md py-4 rounded-md capitalize transition-all duration-300   ${tabValue === 'posts'?'bg-white text-black hover:bg-primary hover:text-white':'text-white hover:bg-white bg-primary'}  hover:text-black text-md`}>posts</button>
            </div>
           

          <div className="h-[400px] overflow-y-scroll py-4 mt-4">
            {
              tabValue === 'designers'&& <SearchedCreators/>
            }
            {
              tabValue === 'posts'&&  <SearchedPosts/>
            }
          
          </div>
       </div>
    </div> 
      } */}
       
          </div>
    )
}
 
export default SearchBar