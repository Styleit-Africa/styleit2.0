import { userProfile } from '@/static/data'
import React, { useState } from 'react'
import userEdit from '../../../../images/user-edit.png'
import editUser from '../../../../images/user-edit_2.png'
import profileImage from '../../../../images/profile_i.png'
import Profile from '../Profile'
import Image from '@/components/global/Image'
import Indicator from '@/components/global/Indicator'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import UserProfileLoader from '@/components/global/loaders/ProfileLoaders'
const CreatorDetails = ({creatorDetails}) => {
    const {creator,isLoading} = creatorDetails
    const [isMore,setIsMore] = useState(false)
    console.log(creatorDetails)



  return (
    <div>
        {
            isLoading ?
            (
                <UserProfileLoader/>
            ):
                <div className='flexs justisfy-between'>
          <div className='md:basis-[45%] lg:basis-[45%] xl:basis-[50%]'>
            <div  className='flex justify-between '>
        <div className='flex gap-7 items-center flex-[0.5] md:flex-[0.53]'>
            <div className='hidden md:block w-[120px]  h-[120px] '>
                <Image src={profileImage} />
            </div>
            <div className='shadow py-3 pl-3 pr-4 md:pr-0 w-[max-content]  rounded-xl md:w-[75%]'>
                <p className='text-gray-500'><span className='mr-3 md:mr-0 text-black  font-[700] capitalize '>first name:</span>{creator?.firstName}</p>
                <p className='text-gray-500 mt-2'><span className='mr-3 md:mr-0 text-black  font-[700] capitalize '>last name:</span>{creator?.lastName}</p>
            </div>
        </div>
        <div className=' self-center md:self-start  shadow flex flex-row-reverse md:flex-row gap-3 py-3 md:py-4 px-10 md:mt-7 rounded-xl text-gray-500 capitalize md:ml-auto w-[max-content] '>
        <h1>available</h1>

        <Indicator className='h-3 w-3 mt-1.5 md:mt-0 rounded-full bg-green-300 outline outline-1 outline-green-300 outline-offset-2'/>
    </div>
            </div> 
            <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between  mt-7">

    <div className="md:flex-[0.48] lg:flex-[0.45] shadow pl-4 rounded-xl pt-5 pb-5 pr-5">
            <div className="flex justify-between mb-4 items-center">
                <h1 className='capitalize  text-lg  '>profile description</h1>
                <Image src={userEdit}/>
            </div>
            <p className='text-gray-500 text-md pr-6'>{isMore?userProfile.description:userProfile.description.slice(0,350)+'...' }</p>
            {
                userProfile.description.length > 400 && <button onClick={()=>setIsMore(!isMore)} className='text-primary block ml-auto mr-8 text-lg'>{isMore ? 'see less':'see more'}</button>
            }
         </div>
    
    <div className='md:flex-[0.48] lg:flex-[0.45] shadow py-3  rounded-xl pt-7 pb-16 pl-4 '>
        <p className='text-gray-500'><span className='font-[700] text-black capitalize '>Email</span>:{creator?.email}</p>
        <p className='text-gray-500 mt-4'><span className='font-[700] text-black capitalize '>L.G.A</span>:{creator?.lga[0].name}</p>
        <p className='text-gray-500 mt-4'><span className='font-[700] text-black capitalize '>mobile number</span>:{creator?.phone}</p>
        <p className='text-gray-500 mt-4'><span className='font-[700] text-black capitalize '>address</span>:{creator?.address}</p>
    </div>
    </div>
    </div>

    <Link to='/creator/profile/edit' className="block w-[max-content] ml-auto mt-5">

    <div className="flex gap-2 bg-primary text-white rounded-xl px-4 py-3  ">
        <Image src={editUser} className="w-6 h-6"  />
            Edit
    </div>
    </Link> 
   
  </div>
                    
        }
    </div>
  
  )
}

export default CreatorDetails
























// import { userProfile } from '@/static/data'
// import React, { useState } from 'react'
// import userEdit from '../../../../images/user-edit.png'
// import editUser from '../../../../images/user-edit_2.png'
// import profileImage from '../../../../images/profile_i.png'
// import Profile from '../Profile'
// import Image from '@/components/global/Image'
// import Indicator from '@/components/global/Indicator'
// import { Button } from '@/components/ui/button'
// import { Link } from 'react-router-dom'
// import { useQuery } from '@tanstack/react-query'
// const CreatorDetails = () => {
//     const [isMore,setIsMore] = useState(false)

//       const {data,isLoading,isError,error,isFetching} = useQuery({
//       queryKey:['profile'],
//       queryFn:async()=>await axios.get('https://styleitafrica.pythonanywhere.com/api/designer/profile',{
//           headers:{
//             Authorization:`Bearer ${Cookies.get('token')}`,
//             'Content-Type': 'application/json',
//             Accept:'application/json'
//           }
//         })
//       })
//       console.log(data)


//   return (
//   <div className='flexs justisfy-between'>
//           <div className='md:basis-[45%] lg:basis-[45%] xl:basis-[50%]'>
//             <div  className='flex justify-between '>
//         <div className='flex gap-7 items-center flex-[0.5] md:flex-[0.53]'>
//             <div className='hidden md:block w-[120px]  h-[120px] '>
//                 <Image src={profileImage} />
//             </div>
//             <div className='shadow py-3 pl-3 pr-4 md:pr-0 w-[max-content]  rounded-xl md:w-[75%]'>
//                 <p className='text-gray-500'><span className='mr-3 md:mr-0 text-black  font-[700] capitalize '>first name:</span>{userProfile.firstName}</p>
//                 <p className='text-gray-500 mt-2'><span className='mr-3 md:mr-0 text-black  font-[700] capitalize '>last name:</span>{userProfile.lastName}</p>
//             </div>
//         </div>
//         <div className=' self-center md:self-start  shadow flex flex-row-reverse md:flex-row gap-3 py-3 md:py-4 px-10 md:mt-7 rounded-xl text-gray-500 capitalize md:ml-auto w-[max-content] '>
//         <h1>available</h1>

        
//     </div>
//             </div> 
//             <div className="flex flex-col gap-5 md:gap-0 md:flex-row justify-between  mt-7">

//     <div className="md:flex-[0.48] lg:flex-[0.45] shadow pl-4 rounded-xl pt-5 pb-5 pr-5">
//             <div className="flex justify-between mb-4 items-center">
//                 <h1 className='capitalize  text-lg  '>profile description</h1>
//                 <Image src={userEdit}/>
//             </div>
//             <p className='text-gray-500 text-md pr-6'>{isMore?userProfile.description:userProfile.description.slice(0,350)+'...' }</p>
//             {
//                 userProfile.description.length > 400 && <button onClick={()=>setIsMore(!isMore)} className='text-primary block ml-auto mr-8 text-lg'>{isMore ? 'see less':'see more'}</button>
//             }
//          </div>
    
//     <div className='md:flex-[0.48] lg:flex-[0.45] shadow py-3  rounded-xl pt-7 pb-16 pl-4 '>
//         <p className='text-gray-500'><span className='font-[700] text-black capitalize '>Email</span>:{userProfile.email}</p>
//         <p className='text-gray-500 mt-4'><span className='font-[700] text-black capitalize '>L.G.A</span>:{userProfile.lga}</p>
//         <p className='text-gray-500 mt-4'><span className='font-[700] text-black capitalize '>mobile number</span>:{userProfile.mobile}</p>
//         <p className='text-gray-500 mt-4'><span className='font-[700] text-black capitalize '>address</span>:{userProfile.address}</p>
//     </div>
//     </div>
//     </div>

//     <Link to='/creator/profile/edit' className="block w-[max-content] ml-auto mt-5">

//     <div className="flex gap-2 bg-primary text-white rounded-xl px-4 py-3  ">
//         <Image src={editUser} className="w-6 h-6"  />
//             Edit
//     </div>
//     </Link> 
   
//   </div>
//   )
// }

// export default CreatorDetails