import React from 'react'
import Image from './Image'
import Indicator from './Indicator'


const User = ({userProps}) => {
    const {image,indicator,name,container} = userProps
    console.log(name,'nn')
  return (
    <div className={container}>
    <div className=' relative '>
        <Image src={image.profileImage} className={image.styles} />
       {indicator.isIndicator && <Indicator className={indicator.styles}/>}
    </div>
    {
        name.fullName ? 
        <p className={name.styles}>{name.userProfile.fname} {name.userProfile.lname}</p>
        :<p className={name.styles}>{name.userProfile.fname} </p>
    }
</div>
  )
}

export default User