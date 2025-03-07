import React,{useState} from "react";
import Trending from "../components/home/Trending";
import Designer from "../components/home/Designer";
import mark from '../images/mark.png'
import bobby from '../images/bobby.png'
import { happyClients } from "@/static/data";
import { Button } from "@/components/ui/button"
import NewLetter from "@/components/home/NewLetter";
import HappyClient from "@/components/home/HappyClient";


const Home =()=>{
    return(
        <>
            <Designer/>
            <Trending/>
           <section className="container">
                <h3 className="text-center text-3xl md:text-4xl mt-36 mb-5 md:mb-14 text-primary font-lato font-[700]">Benefits of working with us</h3>
                    <article className="flex flex-col md:flex-row justify-center gap-9 md:gap-5">
                        <div className="flex-[0.5] shadow-[1px_1px_6px_#ccc] rounded-2xl">
                            <div className="pt-12  px-10 border-b pb-14 font-lato font-[400]">
                                <h4 className="text-primary font-[700] text-center md:text-left text-2xl md:text-3xl pb-7">What you get as a fashion designer</h4>
                                <h5 className=" font-lato font-[400] text-lg md:text-2xl">Features you will get if you register as a creator</h5>
                                <ul className=" ">
                                    <li className="flex items-center gap-4 mt-4 text-lg  md:text-[1.4rem]"> <img src={mark} alt="mark" className="w-[23px]"/> <p> Direct contact with Clients </p> </li>
                                    <li className="flex items-center gap-4 mt-4 text-lg  md:text-[1.4rem]"> <img src={mark} alt="mark" className="w-[23px]"/> <p> Products showcase on trending</p> </li>
                                    <li className="flex items-center gap-4 mt-4 text-lg  md:text-[1.4rem]"> <img src={mark} alt="mark" className="w-[23px]"/> <p> Secure payments mode </p> </li>
                                </ul>
                            </div>
                                <div className="px-10 mt-8 mb-6">
                                    <button className="w-full bg-primary py-6 text-white
                                     text-[1.4rem] font-[700] font-lato capitalize rounded-2xl ">get started</button>
                                </div>
                        </div>
                        <div className="flex-[0.5] shadow-[1px_1px_6px_#ccc] rounded-2xl font-lato font-[400]">
                            <div className="pt-12  px-10 pb-2 border-b ">
                                <h4 className="text-primary font-[700] text-center md:text-left text-2xl md:text-3xl pb-7">What you get as a Client</h4>
                                <h5 className=" text-lg md:text-2xl">Features you will get as a Client</h5>
                                <ul className=" ">
                                    <li className="flex items-center gap-4 mt-5 text-lg md:text-[1.4rem] ">
                                         <img src={mark} alt="mark" className="w-[23px]"/> <p> Direct contact with Clients </p> </li>
                                    <li className="flex items-center gap-4 mt-4 text-lg  md:text-[1.4rem] ">
                                         <img src={mark} alt="mark" className="w-[23px] "/> <p> Get the best professional for your next outfits</p> </li>
                                    <li className="flex items-center gap-4 mt-4 text-lg  md:text-[1.4rem] ">
                                         <img src={mark} alt="mark" className="w-[23px]"/> <p> Book the service of a fashion designer </p> </li>
                                    <li className="flex items-center gap-4 mt-4 text-lg  md:text-[1.4rem] ">
                                        
                                         <img src={mark} alt="mark" className="w-[23px]"/> <p> Prompt and secure service quality </p> </li>
                                </ul>
                            </div>
                                <div className="px-10 mt-8 mb-6">
                                    <button className="w-full bg-primary py-6 text-white
                                     text-[1.4rem] font-[700] font-lato capitalize rounded-2xl ">get started</button>
                                </div>
                        </div>
                    </article>

           </section>

          
        <HappyClient/>

        <section className=" px-5 pb-10 md:pb-32">
            <article className="px-5 md:px-0  max-w-[1000px] mx-auto text-center shadow-[1px_1px_6px_#ccc] pt-12 md:pt-16 pb-6 md:pb-24 rounded-3xl font-[700] font-lato">
                <h6 className="capitalize text-primary text-xl sm:text-4xl">Become one of our representative today</h6>
                <button className="w-full md:w-[500px] mx-auto mt-5 md:mt-16 bg-primary py-4 md:py-6 text-white
                                     text-[1.4rem] font-[700] font-lato  rounded-2xl ">Join us</button>
            </article>
        </section>
        
           <NewLetter/>
        </>
    )
}

export default Home;