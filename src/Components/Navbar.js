import { useState } from "react"

export default function Navbar(props){

    let [showNav,setShowNav]=useState(false);

    const mobileNavbarHandler=()=>{
        setShowNav(!showNav);
    }

    return(
        <div>
        <div className="w-[calc(100vw - 100%)] h-[80px] flex items-center xsm:bg-[#474C56] sm:bg-[#474C56]">
            <div className="xsm:hidden sm:hidden flex items-center justify-between w-[100%] m-auto md:pl-[4.111111111111111vw] pl-[6.111111111111111vw] pr-[13.958333333333334vw] md:pr-[7.958333333333334vw] sm:pr-[7.958333333333334vw]">
                <div className="flex gap-[0.9722222222222222vw]">
                    <img src="./images/Logo.png"/>
                    <h1 className="font-[700] text-[24px] text-[#000000] leading-[28.18px]">Logo</h1>
                </div>

                <div className="flex sm:gap-[6.972222222222221vw] md:gap-[6.972222222222221vw] gap-[10.972222222222221vw] items-center">
                    <ul className="flex text-[clamp(14px,1.25vw,18px)] gap-[2.0833333333333335vw] font-[500] text-[#464D54] leading-[27px]">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#service">Service Area</a></li>
                        <li><a href="#ho">Fleet</a></li>
                        <li><a>Blog</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                    <button className="w-[137px] h-[40px] bg-[#FF9F43] rounded-[10px] text-[18px] font-[400] leading-[27px] text-[#FFFFFF]">Login As</button>
                </div>
            </div>

                <div className="xsm:flex sm:flex  hidden items-center justify-between w-[100%] m-auto md:pl-[4.111111111111111vw] pl-[6.111111111111111vw] pr-[13.958333333333334vw] md:pr-[7.958333333333334vw] sm:pr-[7.958333333333334vw]">
                    <div className="flex gap-[0.9722222222222222vw]">
                        <img src="./images/Logo.png"/>
                        <h1 className="font-[700] text-[24px] text-[#ffffff] leading-[28.18px]">Logo</h1>
                    </div>

                    <div className="flex sm:gap-[6.972222222222221vw] md:gap-[6.972222222222221vw] gap-[10.972222222222221vw] items-center">
                        

                        <div onClick={mobileNavbarHandler} className="flex flex-col gap-[6px]">
                            <div className="w-[18.26px] h-[1.3px] rounded-md bg-[#fff]"></div>
                            <div className="w-[13.7px] h-[1.3px] rounded-md bg-[#fff]"></div>
                            <div className="w-[18.26px] h-[1.3px] rounded-md bg-[#fff]"></div>
                        </div>
                    </div>
                </div>

        </div>
        <ul style={showNav === false ?{maxHeight:0}:{maxHeight:"500px",borderTop:"1px solid white",padding:"10px 0"}} className="xsm:bg-[#474C56] transition-all ease-in-out delay-[0.1s] duration-500 sm:bg-[#474C56] xsm:flex sm:flex hidden flex-col items-center text-[clamp(14px,1.25vw,18px)] gap-[2.0833333333333335vw] font-[500] text-[#fff] leading-[27px]">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a>Service Area</a></li>
            <li><a href="#ho">Fleet</a></li>
            <li><a>Blog</a></li>
            <li><a href="#benefit">Contact</a></li>
        </ul>
        </div>
    )
}