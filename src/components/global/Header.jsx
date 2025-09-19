import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../images/logo.png'
import m_logo from '../../images/m_logo.png'
import hamburger from '../../images/hamburger.png'
import arrow from '../../images/arrow-down.png'
import notification from '../../images/Notication.png'
import profileImage from '../../images/profile_i.png'
import profileImage2 from '../../images/icon_n1.png'
import User from "./User";
import { userProfile } from "@/static/data";
import Image from "./Image";
import { useGlobalStore } from "@/store/global/useGlobal";
import { useAuth } from "@/store/useAuth";

const Header = ()=>{
    
    const {user} = useAuth()
    const {setIsSidebarOpened,isSidebarOpened,setIsAdminOpened} = useGlobalStore()
    return( 
        <header  className="relative z-20 shadow-[2px_0px_10px_#ccc]  py-5 px-5 md:px-0 font-[400] font-[helvetica]">
          {
            user?.role !== 'admin' ?
            (
        <div>

<div className="flex justify-between md:hidden">
                <div>
                <img src={m_logo} alt="logo"  />
                </div>
                <div>
                <img src={hamburger} alt="" />
                </div>
            </div>
                <div className="md:flex md:gap-12 hidden  md:px-3 xl:px-0 justify-center xl:justify-between items-center container">


                
                <ul className="flex basis-[63.6%]  font-bold lg:font-[400] md:text-sm lg:text-[1.27rem]  borgder justify-between  text-[#000000] text-[20px] items-center">
                    <li>
                        <NavLink to="/" className={({isActive})=>isActive ? 'relative after:content-[" "] after:w-2/3 after:block  after:mx-auto after:mt-0.5 after:h-0.5 rounded-lg after:bg-primary ':''}>Home</NavLink> 
                    </li>
                    <li>
                        <NavLink to="/fashionDesigners" data-testid="fashion-designer" className={({isActive})=>isActive ? 'relative after:content-[" "] after:w-2/3 after:block  after:mx-auto after:mt-0.5 after:h-0.5 rounded-lg after:bg-primary ':''}>Fashion designers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/trending"  data-testid="trending" className={({isActive})=>isActive ? 'relative after:content-[" "] after:w-2/3 after:block  after:mx-auto after:mt-0.5 after:h-0.5 rounded-lg after:bg-primary ':''}>Trending</NavLink>
                    </li>
                    <li>
                        <img src={logo} alt="" className="w-[90px] lg:w-[115px]" />
                    </li>
                    <li>
                        <NavLink to="/blogs"  data-testid="blogs" className={({isActive})=>isActive ? 'relative after:content-[" "] after:w-2/3 after:block  after:mx-auto after:mt-0.5 after:h-0.5 rounded-lg after:bg-primary ':''}>Blog</NavLink>
                    </li>
                    </ul>

                    <div>
                        {
                            !user ? (<div className="flex gap-7 ">
                                <Link to='/login'   data-testid="login" className="border border-primary text-center cursor-pointer  w-[110px] text-sm lg:text-[1.5rem] lg:w-[190px] font-bold lg:font-[400]   py-4 rounded-lg">Login</Link>
                                <Link to='/signUp'  data-testid="signUp"  className="text-white bg-primary text-center cursor-pointer  shadow-[0px_4px_4px_0px_#FF617C33]  w-[110px] text-sm  lg:text-[1.5rem] lg:w-[190px] font-bold lg:font-[400] py-4 rounded-[0.65rem]">Sign up</Link>
                           </div>):(
                            <div data-testid="sidebar-button"  className="flex items-center gap-4 cursor-pointer
                            " onClick={()=>setIsSidebarOpened()}>
                                    <div  className="flex gap-2.5 items-center">
                                        <Image src={notification}  className="w-6 h-6 "/>
                                        <Image src={arrow}  className={`w-4 h-4 transition-all duration-300 ${isSidebarOpened ? "rotate-180":"rotate-0"} `}/>
                                    </div>
                                    <User
                                userProps={{
                                        name:{userProfile:user,styles:'text-black'},
                                        indicator:{styles:'h-2 w-2 absolute bottom-2 right-0 rounded-full bg-green-300',isIndicator:false},
                                        image:{profileImage:user.role === 'designer'?profileImage:profileImage2,fullname:false,styles:'w-[50px] h-[50px]'},
                                        container:' flex items-center gap-1 flex-row-reverse font-lato'
                                }}/>

                            </div>
                           )
                        }
                    </div>
           
                </div>
          </div>
            ):
            (
                <div>
                    <button onClick={()=>setIsAdminOpened()}>open</button>
                </div>
            )
            
          }
        </header>
    )
}

export default Header

