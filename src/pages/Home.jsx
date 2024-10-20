import React,{useState} from "react";
import Trending from "../components/home/Trending";
import Designer from "../components/home/Designer";
import mark from '../images/mark.png'
import bobby from '../images/bobby.png'
// import { settings } from "../static/settings/happyClientSetting";


const Home =()=>{

    return(
        <section>
       
            <Designer/>
            <Trending/>
           <section className="container">
                <h3 className="text-center text-4xl mt-36 mb-14 text-primary font-lato font-[700]">Benefits of working with us</h3>
                    <article className="flex justify-center gap-5">
                        <div className="flex-[0.5] shadow-[1px_1px_6px_#ccc] rounded-2xl">
                            <div className="pt-12  px-10 border-b pb-14 font-lato font-[400]">
                                <h4 className="text-primary font-[700] text-3xl pb-7">What you get as a fashion designer</h4>
                                <h5 className=" font-lato font-[400] text-2xl">Features you will get if you register as a creator</h5>
                                <ul className=" ">
                                    <li className="flex items-center gap-4 mt-4 text-[1.4rem]"> <img src={mark} alt="mark" className="w-[23px]"/> <p> Direct contact with Clients </p> </li>
                                    <li className="flex items-center gap-4 mt-4 text-[1.4rem]"> <img src={mark} alt="mark" className="w-[23px]"/> <p> Products showcase on trending</p> </li>
                                    <li className="flex items-center gap-4 mt-4 text-[1.4rem]"> <img src={mark} alt="mark" className="w-[23px]"/> <p> Secure payments mode </p> </li>
                                </ul>
                            </div>
                                <div className="px-10 mt-8 mb-6">
                                    <button className="w-full bg-primary py-6 text-white
                                     text-[1.4rem] font-[700] font-lato capitalize rounded-2xl text-[1.4rem] ">get started</button>
                                </div>
                        </div>
                        <div className="flex-[0.5] shadow-[1px_1px_6px_#ccc] rounded-2xl font-lato font-[400]">
                            <div className="pt-12  px-14 pb-1 border-b ">
                                <h4 className="text-primary font-[700] text-3xl pb-7">What you get as a Client</h4>
                                <h5 className="  text-2xl">Features you will get as a Client</h5>
                                <ul className=" ">
                                    <li className="flex items-center gap-4 mt-5 text-[1.4rem] ">
                                         <img src={mark} alt="mark" className="w-[23px]"/> <p> Direct contact with Clients </p> </li>
                                    <li className="flex items-center gap-4 mt-4 text-[1.4rem] ">
                                         <img src={mark} alt="mark" className="w-[23px] "/> <p> Get the best professional for your next outfits</p> </li>
                                    <li className="flex items-center gap-4 mt-4 text-[1.4rem] ">
                                         <img src={mark} alt="mark" className="w-[23px]"/> <p> Book the service of a fashion designer </p> </li>
                                    <li className="flex items-center gap-4 mt-4 text-[1.4rem] ">
                                        
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

           <section className="py-28">
               
               <article className="container">
                    <h5 className="text-center capitalize text-primary text-4xl font-lato font-[700] ">our happy client</h5>

                    <div className="max-wj-[900px] py-12 px-4 mx-auto bordefr-[2px] py-20">

                    <div className="slide-container">

                    {/* <Slider {...settings}>
                                <div style={{height:"100%"}} className="   font-lato font-[400]  ml-4  my-9h rounded-3xl pt-16 pb-4 px-4  text-center border-[2px]l shadow-[1px_1px_6px_#ccc]">

                                <p className="text-2xl text-left">"
                                Partnering with styleit africa turned out to be my best choice"</p>

                                <div className="flex gap-2 items-end w-[max-content] ml-auto mt-8">
                                    <h6 className="text-2xl mb-2">Mike.J</h6>
                                    <img src={bobby} alt=""  className="w-[70px]"/>
                                </div>
                                </div>
                                <div style={{height:"100%"}} className="   font-lato font-[400]  ml-4  my-9h rounded-3xl pt-16 pb-4 px-4  text-center border-[2px]l shadow-[1px_1px_6px_#ccc]">

                                <p className="text-2xl text-left">"This is one of the best fashionista platform out there that provides high quality service and security</p>

                                <div className="flex gap-2 items-end w-[max-content] ml-auto mt-8">
                                    <h6 className="text-2xl mb-2">Jane.R</h6>
                                    <img src={bobby} alt=""  className="w-[70px]"/>
                                </div>
                                </div>
                                <div className="   font-lato font-[400]  ml-4  my-9h rounded-3xl pt-16 pb-4 px-4  text-center border-[2px]l shadow-[1px_1px_6px_#ccc]">

                                <p className="text-2xl text-left">"This is one of the best fashionista platform out there that provides high quality service and security</p>

                                <div className="flex gap-2 items-end w-[max-content] ml-auto mt-8">
                                    <h6 className="text-2xl mb-2">Jane.R</h6>
                                    <img src={bobby} alt=""  className="w-[70px]"/>
                                </div>
                                </div>
                    </Slider> */}
                   
                    </div>
                       
                    </div>

               </article>
           </section>


        {/* Become a member */}
        <section className="mt-16  pb-32">
            <article className="max-w-[1000px] mx-auto text-center shadow-[1px_1px_6px_#ccc] pt-16 pb-24 rounded-3xl font-[700] font-lato">
                <h6 className="capitalize text-primary text-4xl">Become one of our representative today</h6>
                <button className="w-[500px] mx-auto mt-16 bg-primary py-6 text-white
                                     text-[1.4rem] font-[700] font-lato  rounded-2xl ">Join us</button>
            </article>
        </section>
        <section className=" bg-secondary py-16 font-lato ">
            <h1 className="capitalize text-center text-4xl text-primary mb-12">Subscribe to our newsletter</h1>
            <div>
                <form className="max-w-[650px] mx-auto">
                        <div>
                            <input className="w-full pl-8 py-8 rounded-[1.1rem] placeholder:text-2xl placeholder-secondary" placeholder="Full name" type="text" name="name" />
                        </div>
                        <div className="mt-8">
                            <input className="w-full pl-8 py-8 rounded-[1.1rem] placeholder:text-2xl placeholder-secondary" placeholder="Email" type="email" name="email" />
                        </div>
                        <button className="w-full mx-auto mt-12 bg-primary py-6 text-white
                                        text-[1.4rem] font-[700] font-lato  rounded-[1.1rem] ">Subscribe</button>
                </form>
            </div>
        </section>
        </section>
    )
}

export default Home;