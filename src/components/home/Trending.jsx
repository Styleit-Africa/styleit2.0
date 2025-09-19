import React from "react";
import cynthia from '../../images/cynthia.png';
import Remark from "./Remark";
import bobby from '../../images/bobby.png';
import caro from '../../images/caro.png';
import next from '../../images/next.png';
import { Link } from "react-router-dom";


const Trending = ()=>{
    return(
        <section className="container px-4 xl:px-0 mt-16">
            <h1 className="text-center text-primary mb-3 text-4xl font-[helvetica] font-[700]">Trending</h1>
            <div className="flex gap-4 items-center mb-5">
                <p className="text-primary text-lg md:text-2xl ml-auto font-[helvetica] font-[400] w-[max-content] "><Link to='/trending'>See more </Link></p> 
                <img src={next} alt="next" className="w-[10px] md:w-[14px]" />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative"> 
                    <img src={caro} alt="cynthia" className="w-full h-full" />
                    <Remark img={bobby}/>
                </div>
                <div className="relative "> 
                    <img src={cynthia} alt="cynthia" className="w-full h-full" />
                    <Remark img={bobby}/>
                </div>
                <div className="relative"> 
                    <img src={cynthia} alt="cynthia" className="w-full h-full" />
                    <Remark img={bobby}/>
                </div>
             
            </div>
        </section>
    )

}

export default Trending