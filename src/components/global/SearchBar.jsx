import Image from "./Image"


const SearchBar = ({styles:{img,input},placeholder,imageIcon})=>{
    return(
         <div className='relative ml-3 md:ml-0'>
            <input type="text" placeholder={placeholder} className={input}/>
            <Image src={imageIcon} className={img} alt="" />
          </div>
    )
}
 
export default SearchBar