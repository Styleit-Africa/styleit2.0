import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../images/logo.png'

const Header = ()=>{
    // box-shadow: 0px 4px 4px 0px #FF617C33;

    return( 
        <header className=" shadow-[2px_0px_10px_#ccc]  py-5 px-3 md:px-0 font-[400] font-[helvetica]">
                <div className="flex md:gap-12 md:px-3 xl:px-0 justify-center xl:justify-between items-center container">

                <ul className="flex basis-[63.6%] font-bold lg:font-[400] text-[1rem] lg:text-[1.27rem]  borgder justify-between  text-[#000000] text-[20px] items-center">
                    <li>
                        <NavLink>Home</NavLink> 
                    </li>
                    <li>
                        <NavLink>Fashion designers</NavLink>
                    </li>
                    <li>
                        <NavLink>Trending</NavLink>
                    </li>
                    <li>
                        <img src={logo} alt="" className="w-[115px]" />
                    </li>
                    <li>
                        <NavLink>Blog</NavLink>
                    </li>
                    </ul>
           <div className="flex gap-7 ">
                <button className="border border-primary text-[1.16rem]  w-[110px] text-[1.5rem] lg:w-[190px] font-bold lg:font-[400]   py-2.5 rounded-lg">Login</button>
                <button className="text-white bg-primary text-[1.16rem] shadow-[0px_4px_4px_0px_#FF617C33]  w-[110px] text-[1.5rem] lg:w-[190px] font-bold lg:font-[400] py-2.5 rounded-[0.65rem]">Sign up</button>
           </div>
                </div>
        </header>
    )
}

export default Header

