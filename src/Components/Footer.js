export default function Footer(){
    return(
        <div className="w-[calc(100vw - 100%)]">
            <div className="flex gap-[116px] justify-center items-center w-full bg-[#273A89] ">
                <div className="mt-[100px] mb-[74px]">
                    <p className=" font-[300] text-[18px] leading-[27px] text-[#FFFFFF]">We are Ready to take your call 24 hours, 7 Days !</p>
                    <h2 className="mt-[2px] flex items-center gap-[24px] font-[700] text-[48px] leading-[72px] text-[#FFFFFF]"><img src="./images/whatsapp.png"/>Call Now : 7756 903 081</h2>
                    <h2 className="mt-[16px] font-[600] text-[40px] leading-[48px] text-[#FFFFFF]">With Over 150 Partners Location</h2>
                </div>
                <div>
                    <img src="./images/carAndDots.png"/>
                </div>
            </div>
            <div className="w-full h-[393px] bg-[#273A89] flex flex-wrap items-center justify-between pt-[46px]">
            
                <ul className="xsm:flex-1 xsm:flex xsm:flex-col xsm:items-center xsm:place-content-around text-[16px] text-[rgba(255,255,255,0.6)] leading-[28px] self-start">
                    <li className="flex justify-center"><h1 className="flex items-center gap-[14px] font-[700] text-[24px] text-[#FFFFFF] leading-[28.18px]"><img src="./images/Logo.png"/>Logo</h1></li>
                    <li className="xsm:mt-[38px] xsm:mb-[30px] w-[241px] xsm:w-[286px] text-left">Book a Gatwick taxi and save time, effort and resources!!</li>
                </ul>

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

                <ul className="xsm:mt-[30px] xsm:flex-1 flex flex-col gap-[16px] text-[16px] text-[rgba(255,255,255,1)] leading-[28px] self-start">
                    <li className="text-[rgba(255,255,255,1)] font-[600] xsm:mb-0 mb-[8px]">Get in toch</li>
                    <li className="w-[24.51388888888889vw] min-w-[313px]"><span className="font-[700]">Office:</span> Concord Airport Taxi & Car Services 300 Baker Avenue, Concord, MA 01742</li>
                    <li><span className="font-[700]">Phone:</span> 978-371-2224</li>
                    <li><span className="font-[700]">Email:</span> info@concordairporttaxi.com</li>
                    <li className="flex-1 flex xsm:justify-center gap-[24px] xsm:mt-0 mt-[20px]">
                        <img src="./facebook.png"/>
                        <img src="./twitter.png"/>
                        <img src="./instagram.png"/>
                    </li>
                </ul>

                
            </div>
        </div>
    )
}