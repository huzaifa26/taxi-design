export default function Testimonial(){
    return(
        <>
        <div className="relative w-[calc(100vw - 100%)] mt-[100px]">
            <img className="absolute z-0 xsm:top-[10%] top-[20%] left-[50%] translate-x-[-50%] min-h-[93px]" src="./images/TCB.png"/>
            <div className="relative z-10 flex items-center w-[80%] m-auto">
                <img className="xsm:relative xsm:left-[-5%] w-[36.25vw] min-w-[166px]" src="./images/TCBcar.png"/>
                <div>
                    <h2 className="font-[700] text-[clamp(12px,1.9444444444444444vw,28px] xsm:leading-[22.94px] sm:xsm:leading-[22.94px] leading-[42px] text-[#fff]">Do you want to Ride with us ?</h2>
                    <p className="font-[400] text-[clamp(10px,1.5277777777777777vw,22px)] xsm:leading-[19.12px] sm:xsm:leading-[19.12px] leading-[33px] text-[#fff]">So don’t Be Late</p>
                    <h3 className="font-[700] text-[clamp(10px,1.5277777777777777vw,22px)] xsm:leading-[19.12px] sm:xsm:leading-[19.12px] leading-[33px] text-[#fff] xsm:mt-0 mt-[11px]">Call Now  123-123 456 789</h3>
                </div>
            </div>
        </div>

        <div className="ml-[150px]">
            <h2 className="w-[390px] font-[700] text-[36px] leading-[52px]">What Guests saying about us</h2>

            <div className="flex  gap-[30px] w-[calc(100vw - 100%)]">

                <div className="min-w-[457px] bg-white mt-[56px] pl-[40px] pb-[40px]">
                    <img className="pt-[41px]" src="./images/starts.png"/>
                    <p className="w-[377px] font-[400] text-[18px] leading-[32px] text-[#1B1D21] mt-[26px]">I personally realy like the taste of hotel power it  has a defferent taste from Manage money products. as a hotelpower owner, i recommend you to try single orign</p>
                    <div className="flex items-center gap-[16px] mt-[40px]">
                        <img src="./images/person1.png"/>
                        <div >
                            <h3 className="font-[500] text-[18px] leading-[27px] text-[#1B1D21]">Allecia key</h3>
                            <p className="font-[400] text-[16px] leading-[24px] text-[#8D8E90]">Finance kordo.co</p>
                        </div>
                    </div>
                </div>

                <div className="min-w-[457px] bg-white mt-[56px] pl-[40px] pb-[40px]">
                    <img className="pt-[41px]" src="./images/starts.png"/>
                    <p className="w-[377px] font-[400] text-[18px] leading-[32px] text-[#1B1D21] mt-[26px]">I Would like the taste of hotels it  has a defferent taste from coffe products. as a hotelpower owner, i recommend you to try single orign</p>
                    <div className="flex items-center gap-[16px] mt-[60px]">
                        <img src="./images/person1.png"/>
                        <div >
                            <h3 className="font-[500] text-[18px] leading-[27px] text-[#1B1D21]">Samuel Subiyanto</h3>
                            <p className="font-[400] text-[16px] leading-[24px] text-[#8D8E90]">Finance karita.co</p>
                        </div>
                    </div>
                </div>

                <div className="min-w-[457px] bg-white mt-[56px] pl-[40px] pb-[40px]">
                    <img className="pt-[41px]" src="./images/starts.png"/>
                    <p className="w-[377px] font-[400] text-[18px] leading-[32px] text-[#1B1D21] mt-[26px]">I personally realy like the taste of hotelpower it  has a defferent taste from finance products. as a hotelpower  owner, i recommend you to try single orign</p>
                    <div className="flex items-center gap-[16px] mt-[60px]">
                        <img src="./images/person1.png"/>
                        <div >
                            <h3 className="font-[500] text-[18px] leading-[27px] text-[#1B1D21]">John Doe</h3>
                            <p className="font-[400] text-[16px] leading-[24px] text-[#8D8E90]">Finance prime</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
</>
    )
}