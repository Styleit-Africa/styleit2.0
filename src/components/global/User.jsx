import React from 'react'
import Image from './Image'
import Indicator from './Indicator'
import { useAuth } from '@/store/useAuth'
import { useLocation } from 'react-router-dom'


const User = ({userProps}) => {
    const {image,indicator,name,container} = userProps
    const {user} = useAuth();
    const{pathname} = useLocation()
  return (
    <div className={container}>
    <div className=' relative '>
        <Image src={image.profileImage} className={image.styles} />
       {indicator.isIndicator && <Indicator className={indicator.styles}/>}
    </div>
    {
        // name.fullName ? 
        // <p className={name.styles}>{name.userProfile?.fname} {name.userProfile?.lname}</p>
        // :<p className={name.styles}>{name.userProfile?.lname} </p>
        name.fullName ? 
        <p className={name.styles}>{name.userProfile?.firstName} {name.userProfile?.lastName}</p>
        :<p className={name.styles}>{name.userProfile?.lastName} </p>
       
    }

</div>
  )
}

export default User