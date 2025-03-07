import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../images/logo.png'
import m_logo from '../images/m_logo.png'
import hamburger from '../images/hamburger.png'

const Header = ()=>{

    return( 
        <header className="relative z-50 shadow-[2px_0px_10px_#ccc]  py-5 px-5 md:px-0 font-[400] font-[helvetica]">
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
                        <NavLink className="relative inline-block after:block after:w-3/4 after:h-0.5 after:bg-primary after:mx-auto after:mt-1">Home</NavLink> 
                    </li>
                    <li>
                        <NavLink>Fashion designers</NavLink>
                    </li>
                    <li>
                        <NavLink>Trending</NavLink>
                    </li>
                    <li>
                        <img src={logo} alt="" className="w-[90px] lg:w-[115px]" />
                    </li>
                    <li>
                        <NavLink>Blog</NavLink>
                    </li>
                    </ul>
           <div className="flex gap-7 ">
                <Link to='/login' className="border border-primary text-center cursor-pointer  w-[110px] text-sm lg:text-[1.5rem] lg:w-[190px] font-bold lg:font-[400]   py-4 rounded-lg">Login</Link>
                <Link to='/signUp' className="text-white bg-primary text-center cursor-pointer  shadow-[0px_4px_4px_0px_#FF617C33]  w-[110px] text-sm  lg:text-[1.5rem] lg:w-[190px] font-bold lg:font-[400] py-4 rounded-[0.65rem]">Sign up</Link>
           </div>
                </div>
        </header>
    )
}

export default Header

