import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";

export default function Testimonial() {

    const forwardArrow = useRef();

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className="bg-[#f5f5f5]">
            <div id="contact" className="relative w-[calc(100vw - 100%)] mt-[100px]">
                <img className="absolute z-0 xsm:top-[10%] top-[20%] left-[50%] translate-x-[-50%] min-h-[93px]" src="./images/TCB.png" />
                <div className="relative z-10 flex items-center w-[80%] m-auto">
                    <img className="xsm:relative xsm:left-[-5%] w-[36.25vw] min-w-[166px]" src="./images/TCBcar.png" />
                    <div>
                        <h2 className="font-[700] text-[clamp(12px,1.9444444444444444vw,28px)] xsm:leading-[22.94px] sm:xsm:leading-[22.94px] leading-[42px] text-[#fff]">Do you want to Ride with us?</h2>
                        <p className="font-[400] text-[clamp(10px,1.5277777777777777vw,22px)] xsm:leading-[19.12px] sm:xsm:leading-[19.12px] leading-[33px] text-[#fff]">So don’t Be Late</p>
                        <h3 className="font-[700] text-[clamp(10px,1.5277777777777777vw,22px)] xsm:leading-[19.12px] sm:xsm:leading-[19.12px] leading-[33px] text-[#fff] xsm:mt-0 mt-[11px]">Call Now  123-123 456 789</h3>
                    </div>
                </div>
            </div>

            <div className="xsm:ml-[6.416666666666666vw] mr-[2.416666666666666vw] ml-[10.416666666666666vw]">
                <div className="flex justify-between gap-[40px]">
                    <h2 className="w-[390px] font-[700] text-[clamp(24px,1.6666666666666667vw,36px)] xsm:leading-[30px] sm:leading-[30px] xsm:mt-[30px] sm:mt-[30px] overflow-hidden  leading-[52px]">What Guests saying about us</h2>
                    <div className="flex gap-[10px] items-center">
                        <img className="w-[3.888888888888889vw] min-w-[30px]" onClick={()=>{forwardArrow.current.slickPrev();}} src="./images/back.png" alt="" />
                        <img className="w-[3.888888888888889vw] min-w-[30px]" onClick={()=>{forwardArrow.current.slickNext();}} src="./images/next.png" alt="" />
                    </div>
                </div>

                <Slider className="flex gap-[20px]  w-[calc(100vw - 100%)] " {...settings} ref={forwardArrow}>
                    <div className="flex flex-col items-start xsm:min-w-[357px] sm:min-w-[357px] min-w-[457px] w-[31.73611111111111vw] rounded-[4px] bg-white xsm:bg-[#f5f5f5] sm:bg-[#f5f5f5] mt-[3.888888888888889vw] pl-[2.7777777777777777vw] pb-[40px]">
                        <img className="pt-[41px] xsm:order-2" src="./images/starts.png" />
                        <p className="xsm:order-3 w-[26.180555555555557vw] min-w-[318.61px] font-[400] text-[18px] leading-[32px] text-[#1B1D21] mt-[26px]">I personally realy like the taste of hotel power it  has a defferent taste from Manage money products. as a hotelpower owner, i recommend you to try single orign</p>
                        <div className="flex items-center gap-[16px] mt-[40px] xsm:order-1">
                            <img src="./images/person1.png" />
                            <div >
                                <h3 className="font-[500] text-[18px] leading-[27px] text-[#1B1D21]">Allecia key</h3>
                                <p className="font-[400] text-[16px] leading-[24px] text-[#8D8E90]">Finance kordo.co</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start xsm:min-w-[357px] sm:min-w-[357px] min-w-[457px] w-[31.73611111111111vw] rounded-[4px] bg-white xsm:bg-[#f5f5f5] sm:bg-[#f5f5f5] mt-[3.888888888888889vw] pl-[2.7777777777777777vw] pb-[40px]">
                        <img className="pt-[41px] xsm:order-2" src="./images/starts.png" />
                        <p className="xsm:order-3 w-[26.180555555555557vw] min-w-[318.61px] font-[400] text-[18px] leading-[32px] text-[#1B1D21] mt-[26px]">I Would like the taste of hotels it  has a defferent taste from coffe products. as a hotelpower owner, i recommend you to try single orign</p>
                        <div className="xsm:order-1 flex items-center gap-[16px] mt-[60px]">
                            <img src="./images/person1.png" />
                            <div >
                                <h3 className="font-[500] text-[18px] leading-[27px] text-[#1B1D21]">Samuel Subiyanto</h3>
                                <p className="font-[400] text-[16px] leading-[24px] text-[#8D8E90]">Finance karita.co</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col items-start xsm:min-w-[357px] sm:min-w-[357px] min-w-[457px] w-[31.73611111111111vw] rounded-[4px] bg-white xsm:bg-[#f5f5f5] sm:bg-[#f5f5f5] mt-[3.888888888888889vw] pl-[2.7777777777777777vw] pb-[40px]">

                        <img className="pt-[41px] xsm:order-2" src="./images/starts.png" />
                        <p className="xsm:order-3 w-[26.180555555555557vw] min-w-[318.61px] font-[400] text-[18px] leading-[32px] text-[#1B1D21] mt-[26px]">I personally realy like the taste of hotelpower it  has a defferent taste from finance products. as a hotelpower  owner, i recommend you to try single orign</p>
                        <div className="xsm:order-1 flex items-center gap-[16px] mt-[60px]">
                            <img src="./images/person1.png" />
                            <div >
                                <h3 className="font-[500] text-[18px] leading-[27px] text-[#1B1D21]">John Doe</h3>
                                <p className="font-[400] text-[16px] leading-[24px] text-[#8D8E90]">Finance prime</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}