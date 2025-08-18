import React, { useState } from 'react'

const PostDescription = ({description}) => {
    const [isOpened,setIsOpened] = useState(false);
    const slicedValue = description.slice(0,150)

    return(
        <p className={`${description.length > 152&&'cursor-pointer'}`} onClick={()=>setIsOpened(!isOpened)}>{isOpened?description: <span>{slicedValue} {description.length > 152&&'...'}</span> }</p>
    )
}



export default PostDescription