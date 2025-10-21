import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useGlobalStore } from '@/store/global/useGlobal';
import m_logo from '@/images/m_logo.png'
import Image from './Image';
import { NavLink, useNavigate } from 'react-router-dom';
import NavbarLinks from './NavbarLinks';
import User from './User';
import { useAuth } from '@/store/useAuth';
import profileImage from '../../images/profile_i.png'
import { dashboardLinks, navItems } from '@/static/data';


export default function Navbar() {
const {setIsNavbarOpened} = useGlobalStore();
const {user,logout} = useAuth();
const navigate = useNavigate()

const handleLogout = ()=>{
    setIsNavbarOpened()
    logout()

    if(user.role === 'admin'){
        navigate('/admin/login')
    }else{
        navigate('/login')

    }
}
 

  return (

        <div className='font-lato md:hidden'>
              <nav className='px-5 font-lato py-6  flex justify-center  gap-3 bg-[rgba(0,0,0,0.1)]   z-[999]  fixed top-0  bottom-0 left-0 right-0  overflow-hidden transition-all duration-300 '>
            
            {/* <div className="overflow-hidden  bg-white  w-[1200px] shadow-md rounded-md relative z-50 py-6"> */}
            <div className="overflow-hidden  bg-gradient-to-tl to-white font-lato to-[50%] from-[50%] md:to-[54.2%] from-pink-50 md:from-[54.7%]  text-white w-[1200px] shadow-md rounded-md relative z-50 py-6">
               {/* header */}
            <div className="flex justify-between items-center mb-3 border-b-2 pb-2 border-gray-200 px-5">
                  <div>
                      <Image src={m_logo} />
                  </div>
                  <div>
                  <X className="h-8 w-8 -mt-2 text-sidebar scale-[0.8] transition-all duration-300 hover:scale-[1.5] cursor-pointer"
                   onClick={()=>setIsNavbarOpened(false)}/>

                  </div>
            </div>

            {/* body */}
                <h1 className=' font-[700] text-xl text-sidebar px-5'>General</h1>


             <ul className=" px-5 md:text-sm lg:text-[1.27rem] mt-3  justify-between  text-[#000000] text-[20px] items-center">
               {
                    navItems.map(link=>(
                       <NavbarLinks link={link} key={link.name}/>
                    ))
               }
                </ul>

                {
                user&&  <div>
                            <div className='text-sidebar mt-10 px-5'>
                                <h1 className=' font-[700] text-xl'>Dashboard</h1>
            
                                    
            
                                    <ul className="text-[0.97rem] mt-3  justify-between  text-[#000000] items-center">
                                    {
                                            dashboardLinks.map(link=>(
                                            <NavbarLinks link={link} key={link.name}/>
                                            ))
                                    }
                                    <li className='mt-1.5  text-sidebar capitalize flex justify-between'>
                                        <p>following</p>
                                        <p className='text-primary'>12</p>
                                    </li>
                                    <li className='mt-1.5 text-sidebar capitalize flex justify-between'>
                                        <p>followers</p>
                                        <p className='text-primary'>1</p>
                                    </li>
                                        </ul>
                            </div>
            
                            {
                                <div className='w-full flex items-center justify-between absolute text-red-600 bottom-4 px-5'>
                                    <div>
                                    <User
                                    userProps={{
                                            name:{userProfile:user,fullName:true,styles:'text-sidebar text-sm font-[400] capitalize'},
                                            indicator:{isIndicator:true,styles:'h-2 w-2 absolute bottom-2 right-0 rounded-full bg-green-300 '},
                                            image:{profileImage,styles:'w-[35px] h-[35px]'},
                                            container:' flex items-center gap-2 font-[700] text-lg font-lato'
                                    }}/>
                                    </div>
                                    <div>
                                        <button onClick={handleLogout}>Log out</button>
                                    </div>
                            </div>
                            }

                </div>

                }
            </div>

            </nav>
        </div>
  );
}