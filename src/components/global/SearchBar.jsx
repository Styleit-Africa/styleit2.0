import { useGlobalStore } from "@/store/global/useGlobal"
import Image from "./Image"
import React from 'react'


const SearchBar = ({styles:{img,input},placeholder,imageIcon})=>{
  const {setSearchData} = useGlobalStore(state=>state);
  const handleSearch = (e)=>{
    setSearchData(e.target.value)
  }
    return(
         <div className='relative ml-3 md:ml-0 flex-[0.7]'>
            <input type="text" onChange={(e)=>handleSearch(e)} placeholder={placeholder} className={input}/>
            <Image src={imageIcon} className={img} alt="" />
          </div>
    )
}
 
export default SearchBar