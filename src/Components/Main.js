export default function Main(props){
    return(
        <div className="mainBackground w-[calc(100vw - 100%)]bg-[#f5f5f5]">
            <div>{props.children}</div>
            <div className="h-[calc(100%-80px)] flex xsm:flex-col sm:flex-col items-center xsm:gap-[20px] sm:gap-[20px] gap-[101px] xsm:bg-white sm:bg-white">
                <div>
                    <img src="./images/mainImage.png" alt=""/>
                </div>

                <div className="w-[346px] mt-[40px]">
                    <h1 className="font-[700] text-[clamp(42px,3.1944444444444446vw,46px)] xsm:leading-[63px] sm:leading-[63px] leading-[69px] text-[#ffffff] xsm:text-[#1A1A1A] sm:text-[#1A1A1A]">Get a Taxi Now</h1>
                    <div className="flex gap-[25px] items-center">
                        <img className="xsm:bg-[#1A1A1A] sm:bg-[#1A1A1A]" src="./images/mainPhoneIcon.png" alt=""/>
                        <h2 className="font-[500] text-[clam(18px,1.6666666666666667vw,24px)] leading-[36px] text-[#ffffff] xsm:text-[#1A1A1A] sm:text-[#1A1A1A]">1-800-123-1234</h2>
                    </div>
                    <p className="mt-[16px] mb-[16px] w-[291px] font-[400] text-[12px] leading-[18px] text-[#fff] xsm:text-[#1A1A1A] sm:text-[#1A1A1A]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae vel convallis pulvinar duis.</p>

                    <div className="w-[316.71px] m-auto ">
                        <div className="flex text-[#fff]" >
                            <button className="flex-1 flex items-center justify-center gap-[17px] bg-[#115FA6] h-[43px] rounded-tl-[10px] rounded-bl-[10px]"><img src="./images/mainFromAirport.png" alt=""/> From Airport</button>
                            <button className="flex-1 flex items-center justify-center gap-[28px] bg-[#FF9F43] h-[43px] rounded-tr-[10px] rounded-br-[10px]"><img src="./images/mainToAirport.png" alt=""/>To Airport</button>
                        </div>
                        <div className="relative">
                            <input className="mt-[19px] w-full h-[44px] rounded-[6px] text-[#999999] bg-[#EAEBEC] indent-[13px] text-[14px] font-[500] leading-[21px] tracking-[1px] pr-[30px]" type={"text"} placeholder="Eg: Gatwick Airport or RH6 ONP"></input>
                            <input className="mt-[30px] w-full h-[44px] rounded-[6px] !text-[#323437] bg-[#EAEBEC] indent-[13px] text-[14px] font-[500] leading-[21px] tracking-[1px] pr-[30px]" type={"text"} placeholder="Drop Off Address"></input>
                            <img className="absolute top-[25%] left-[-10%]" src="./images/mainProgress.png" alt=""/>
                        </div>
                        <input className="mt-[20px] w-full h-[44px] rounded-[6px] !text-[#323437] bg-[#EAEBEC] indent-[13px] text-[14px] font-[500] leading-[21px] tracking-[1px] pr-[30px]" type={"datetime-local"}></input>
                        <div className="flex mt-[20px] gap-[11px]">
                            <select className="flex-1 h-[44px] rounded-[6px] !text-[#323437] bg-[#EAEBEC] indent-[13px] text-[14px] font-[500] leading-[21px] tracking-[1px] pr-[30px]">
                                <option>Passenger</option>
                            </select>

                            <select className="flex-1 h-[44px] rounded-[6px] !text-[#323437] bg-[#EAEBEC] indent-[13px] text-[14px] font-[500] leading-[21px] tracking-[1px] !pr-[30px]">
                                <option>Luggage</option>
                            </select>
                        </div>

                        <div className="flex mt-[24px] items-center gap-[21px]">
                            <img src="./images/mainPlus.png" alt=""/>
                            <p className="font-[500] text-[#ffffff] text-[14px] ;leading-[21px] ">Add Child & Infant</p>
                        </div>

                        <button className="mb-[40px] mt-[25px] m-auto flex items-center justify-center gap-[13px] w-[180px] h-[39px] bg-[#FF9F43] rounded-[10px] text-[14px] font-[400] leading-[21px] text-[#FFFFFF]"><img src="./images/mainSearch.png"/>Choose Vehicle</button>
                    </div>
                </div>
            </div>
        </div>
    )
}