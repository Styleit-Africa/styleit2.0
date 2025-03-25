import Image from "./Image"
import React from 'react'


const SearchBar = ({styles:{img,input},placeholder,imageIcon})=>{
    return(
         <div className='relative ml-3 md:ml-0 flex-[0.7]'>
            <input type="text" placeholder={placeholder} className={input}/>
            <Image src={imageIcon} className={img} alt="" />
          </div>
    )
}
 
export default SearchBar