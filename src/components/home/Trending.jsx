import React from "react";
import cynthia from '../../images/cynthia.png';
import Remark from "./Remark";
import bobby from '../../images/bobby.png';
import caro from '../../images/caro.png';
import next from '../../images/next.png';


const Trending = ()=>{
    return(
        <section className="container mt-16">
            <h1 className="text-center text-primary md:mb-3 text-2xl md:text-4xl font-[helvetica] font-[700]">Trending</h1>
            <div className="flex gap-4 items-center mb-3 md:mb-5">
                <p className="text-primary text-md md:text-2xl ml-auto font-[helvetica] font-[400] w-[max-content] ">See more </p> 
                <img src={next} alt="next" className="h-4 w-3 md:w-[14px]" />
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