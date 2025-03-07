import React from "react";
import fb from '../images/facebook.png';
import linkedIn from '../images/linkedIn.png';
import instagram from '../images/instagram.png';
import copyright from '../images/copyright.png';

const Footer =()=>{

    const year = new Date().getFullYear();
    return(
        <footer className="px-5 mt-16 md:mt-20 bg-secondary text-white font-lato font-[400] pt-16 md:pt-20 pb-5">
            <div className="container">
            <div className="mb-24">
                <h2 className="text-2xl md:text-3xl mb-6">Connect with us</h2>
                <div className="flex gap-4">
                    <img src={linkedIn} className="w-[25px] md:w-[32px]" alt="linkedIn" />
                    <img src={fb} className="w-[25px] md:w-[32px]" alt="facebook" />
                    <img src={instagram} className="w-[25px] md:w-[32px]" alt="instagram" />
                </div>
            </div>
            <div className="flex justify-between max-w-[630px] text-darkGray">
                <div>
                    <h3 className='font-[700] mb-8 text-xl md:text-2xl'>Company</h3>
                    <ul className="capitalize text-xl md:text-2xl">
                        <li className="mb-7">About us</li>
                        <li className="mb-7">support</li>
                    </ul>
                        <h4 className="mt-[8.5rem] capitalize text-xl md:text-2xl font-[700]">report</h4>
                </div>
                <div>
                    <h3 className='font-[700] mb-8 text-xl md:text-2xl'>Resources</h3>
                    <ul className="capitalize text-xl md:text-2xl">
                        <li className="mb-7">services</li>
                        <li className="mb-7">contact</li>
                        <li className="mb-7">event</li>
                    </ul>
                        <h4 className="mt-20 capitalize text-xl md:text-2xl font-[700]">ban</h4>
                </div>
                <div>
                    <h3 className='font-[700] mb-8 text-xl md:text-2xl'>Privacy policy</h3>
                    <ul className="capitalize text-xl md:text-2xl">
                        <li className="mb-7">help</li>
                        <li className="mb-7">FAQ</li>
                        <li className="mb-7">career</li>
                    </ul>
                        <h4 className="mt-20 capitalize text-xl md:text-2xl font-[700]">admin</h4>
                </div>
            </div>
            </div>
                   
            <div className="capitalize text-sm md:text-xl  mt-16 flex items-center gap-3 w-[max-content] mx-auto">
                  <img src={copyright} className="w-[30px]" alt="copyright" />
                   <h5>Styleit africa copyright {year}, all right reserved</h5> 
                   </div>
        </footer>
    )
}

export default Footer;