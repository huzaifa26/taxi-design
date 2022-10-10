export default function Footer(){
    return(
        <div className="w-[calc(100vw - 100%)] bg-[#273A89]">
            <div className="relative flex xsm:flex-col-reverse gap-[8.055555555555555vw] xsm:gap-0 justify-center items-center w-full bg-[#273A89] ">
                <img className="xsm:hidden sm:hidden absolute top-0 right-[0%] z-0" src="./images/oval.png"/>
                <img className="xsm:block sm:block hidden absolute top-0 right-[10%] z-0" src="./images/small-oval.png"/>
                <div className="relative z-10 mt-[6.944444444444445vw] mb-[74px]">
                    <p className=" font-[300] text-[clamp(12px,1.25vw,18px)] xsm:leading-[18px] sm:leading-[18px] leading-[27px] text-[#FFFFFF]">We are Ready to take your call 24 hours, 7 Days !</p>
                    <h2 className="mt-[2px] flex items-center gap-[1.6666666666666667vw] font-[700] text-[clamp(18px,3.3333333333333335vw,48px)] xsm:leading-[27px] sm:leading-[27px] leading-[72px] text-[#FFFFFF]"><img className="min-w-[15px] w-[3.4722222222222223vw]" src="./images/whatsapp.png"/>Call Now : 7756 903 081</h2>
                    <h2 className="mt-[1.1111111111111112vw] font-[600] text-[clamp(12px,2.7777777777777777vw,40px)] xsm:leading-[0px] sm:leading-[0px] leading-[48px] text-[#FFFFFF]">With Over 150 Partners Location</h2>
                </div>
                <div className="relative z-10">
                    <img className="w-[41.59722222222222vw] min-w-[273px]" src="./images/carAndDots.png"/>
                </div>
            </div>
            <div className="w-[95%] bg-[#273A89] flex xsm:flex-col flex-wrap items-center justify-between xsm:justify-center pt-[46px] m-auto">
            
                <ul className="xsm:w-[90%] xsm:m-auto xsm:flex-1 xsm:flex xsm:flex-col xsm:items-center xsm:place-content-around text-[16px] text-[rgba(255,255,255,0.6)] leading-[28px] self-start">
                    <li className="flex"><h1 className="flex items-center gap-[14px] font-[700] text-[24px] text-[#FFFFFF] xsm:leading-[0px] sm:leading-[0px] leading-[28.18px]"><img src="./images/Logo.png"/>Logo</h1></li>
                    <li className="xsm:mt-[2.638888888888889vw] xsm:mb-[2.0833333333333335vw] w-[241px] xsm:w-[381px] text-left xsm:text-center">Book a Gatwick taxi and save time, effort and resources!!</li>
                </ul>

                {/* <div className="xsm:w-[90%] flex flex-1 xsm:justify-between sm:justify-between justify-around items-start"> */}
                    <ul className="xsm:hidden sm:hidden flex flex-col gap-[16px] text-[16px] text-[rgba(255,255,255,0.6)] leading-[28px] self-start">
                        <li className="text-[rgba(255,255,255,1)] font-[600] mb-[8px]">Buy with us</li>
                        <li>FAQ’s</li>
                        <li>About us</li>
                        <li>Reviews</li>
                    </ul>

                    <ul className="xsm:hidden sm:hidden flex flex-col gap-[16px] text-[16px] text-[rgba(255,255,255,0.6)] leading-[28px] self-start">
                        <li className="text-[rgba(255,255,255,1)] font-[600] mb-[8px]">Categories</li>
                        <li>School Transport </li>
                        <li>Car Daily</li>
                        <li>Electric Car</li>
                        <li>Modern Car</li>
                    </ul>

                    <ul className="xsm:hidden sm:hidden flex flex-col gap-[16px] text-[16px] text-[rgba(255,255,255,0.6)] leading-[28px] self-start">
                        <li className="text-[rgba(255,255,255,1)] font-[600] mb-[8px]">Contact us</li>
                        <li>Contact us</li>
                        <li>Cookies Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy policy</li>
                    </ul>
                {/* </div> */}

                <div className="xsm:flex sm:flex hidden xsm:w-[90%] flex-1 xsm:justify-between sm:justify-between justify-around items-start">
                <ul className="flex flex-col gap-[16px] text-[16px] text-[rgba(255,255,255,0.6)] leading-[28px] self-start">
                        <li className="text-[rgba(255,255,255,1)] font-[600] mb-[8px]">Buy with us</li>
                        <li>FAQ’s</li>
                        <li>About us</li>
                        <li>Reviews</li>
                    </ul>

                    <ul className="flex flex-col gap-[16px] text-[16px] text-[rgba(255,255,255,0.6)] leading-[28px] self-start">
                        <li className="text-[rgba(255,255,255,1)] font-[600] mb-[8px]">Categories</li>
                        <li>School Transport </li>
                        <li>Car Daily</li>
                        <li>Electric Car</li>
                        <li>Modern Car</li>
                    </ul>

                    <ul className="flex flex-col gap-[16px] text-[16px] text-[rgba(255,255,255,0.6)] leading-[28px] self-start">
                        <li className="text-[rgba(255,255,255,1)] font-[600] mb-[8px]">Contact us</li>
                        <li>Contact us</li>
                        <li>Cookies Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <ul className="xsm:w-[90%] xsm:m-auto xsm:mt-[30px] xsm:flex-1 flex flex-col gap-[16px] text-[16px] text-[rgba(255,255,255,1)] leading-[28px] self-start">
                    <li className="text-[rgba(255,255,255,1)] font-[600] xsm:mb-0 mb-[8px]">Get in toch</li>
                    <li className="w-[24.51388888888889vw] min-w-[313px]"><span className="font-[700]">Office:</span> Concord Airport Taxi & Car Services 300 Baker Avenue, Concord, MA 01742</li>
                    <li><span className="font-[700]">Phone:</span> 978-371-2224</li>
                    <li><span className="font-[700]">Email:</span> info@concordairporttaxi.com</li>
                    <li className="flex-1 flex xsm:justify-center gap-[24px] xsm:mt-0 mt-[20px] mb-[20px]">
                        <img src="./images/facebook.png"/>
                        <img src="./images/twitter.png"/>
                        <img src="./images/instagram.png"/>
                    </li>
                </ul>
            </div>
            <p className="font-[700] text-[12px] leading-[26px] text-[#fff] pb-[14px] text-center">Copyright © 2022 jewelcars. All Rights Reserved</p>
        </div>
    )
}