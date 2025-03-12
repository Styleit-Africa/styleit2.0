import React from 'react'
import profileImage from '../../images/profile_i.png'
import notification from '../../images/Notication.png'
import glass from '../../images/search-normal.png';

import Image from './Image'
import SearchBar from './SearchBar'

const SearchContainer = () => {
  return (
    <div className="container mb-2  md:hidden">
        <div className='flex justify-between items-center'>
        <SearchBar 
            placeholder='search anything here'
            imageIcon={glass}
            styles={{
            img:'absolute top-4 left-3  w-[20px]',
            input:'pl-10 w-full border placeholder-gray-400 border-green-500 outline-none  rounded-lg h-12'
        }} />        
        <div>
        <Image src={profileImage} className="w-[60px] border" />
        </div>
    </div>
    </div>
  )
}

export default SearchContainer