import React from "react";
import glass from '../../images/glass.png';
import redLady from '../../images/Image.png';
import angelina from '../../images/angelina.png';
import bobby from '../../images/bobby.png';
import sandra from '../../images/sandra.png';
import starIcon from '../../images/star.png';

const Designer =()=>{
    return(
        <section className='min-h-[900px] borderf-[2px] bg-gradient-to-tl to-primary font-lato to-[54.2%] from-white from-[54.7%] relative -z-2 '>
        <article className='container'>
      
      <div className='flex  items-start   text-light '>
           <div className='basis-[59%] pt-28 '>
              <h1 className='text-[2.1rem] leading-[1.4]  font-[700] pr-32 '>Looking For A Professional Fashion Designer?</h1>
                <p className=' text-[1.4rem] max-w-[480px] leading-[1.5] font-[700] mt-4'>
                Get the best professional for your next outfit with Styleit Africa. 
                Conveniently book a service with a professional Fashion designer to get started.
                </p>

                {/* search */}
                <form className='mt-6  '>
                  <div className='flex'>
                    <input type='text'
                     className='text-[black] rounded-l-lg block w-[400px]  pl-7 text-dark-400 outline-none font-lato  py-[2.2rem] pl-16
                     placeholder:text-lg placeholder:font-[helvetica] placeholder:font-[400]  placeholder-secondary' 
                    placeholder="search fashion designers here" />
                  <button className=' rounded-r-2xl bg-[#27213C] px-9 rounded-r-2xl '>
                    <img src={glass} className='w-[35px]'/>
                    </button>
                  </div>
                </form>
           </div>
            <div className='-mt-24 relative '>

                  <img src={redLady} className='-ml-28 w-[850px] ' />
                  {/* <div className='absolute top-[550px] right-[130px] order font-lato font-[700] leading-[1.3]
                   pl-5 pt-3 pb-8 pr-0 max-w-[290px] text-[0.98rem] rounded-2xl'>
                      <h2>Place your order and get what you ordered. </h2>
                  <div className="flex justify-between    pr-4 mt-2 ">
                    <div className='flex '>
                        <img src={angelina} className='w-[45px]  absolute left-[20px] ' />
                        <img src={bobby} className='w-[45px]  absolute left-[50px]  ' />
                        <img src={sandra} className='w-[45px]  absolute left-[80px]  ' />
                    </div>
                    
                  </div>

                  </div> */}

            </div>
  </div>
        </article>
  </section>
    )
}

export default Designer