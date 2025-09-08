import { useGlobalStore } from "@/store/global/useGlobal"
import Image from "./Image"
import React from 'react'
import { useLocation } from "react-router-dom"


const SearchBar = ({styles:{img,input,parent=''},placeholder,imageIcon})=>{
  const {pathname} = useLocation();
  
  const {setSearchData} = useGlobalStore(state=>state);
  const handleSearch = (e)=>{
    setSearchData(e.target.value)
  }
    return(
         <div className={`relative ${!pathname.includes('admin')&&'ml-3'} md:ml-0 flex-[0.7] ${parent}`}>
            <input type="text" onChange={(e)=>handleSearch(e)} placeholder={placeholder} className={input}/>
            <Image src={imageIcon} className={img} alt="" />
          </div>
    )
}
 
export default SearchBar