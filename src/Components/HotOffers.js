import { useState } from "react"

export default function HotOffers(){

    const [btn1,setBtn1]=useState(true)
    const [btn2,setBtn2]=useState(false)
    const [btn3,setBtn3]=useState(false)
    const [btn4,setBtn4]=useState(false)
    const [btn5,setBtn5]=useState(false)
    const [btn6,setBtn6]=useState(false)

    const falseAllState=()=>{
        setBtn1(false)
        setBtn2(false)
        setBtn3(false)
        setBtn4(false)
        setBtn5(false)
        setBtn6(false)
    }

    const btnHandler=(x)=>{
        falseAllState();
        switch(x){
            case 1:
                setBtn1(true);
                break;
            case 2:
                setBtn2(true);
                break;
            case 3:
                setBtn3(true);
                break;
            case 4:
                setBtn4(true);
                break;
            case 5:
                setBtn5(true);
                break;
            case 6:
                setBtn6(true);
                break;
            default:
                break;
        }
    }

    return(
        <div className="w-[calc(100vw - 100%)]">
            <div className="mt-[70px] xsm:mt-[44px] sm:mt-[44px] mb-[31px]">
                <p className="text-center font-[300] text-[24px] leading-[24px]">Our Fleets Come with</p>
                <h2 className="text-center font-[700] text-[36px] leading-[54px]">Hot Offers</h2>
            </div>

            <div className="flex gap-[9px] justify-center">
                <button onClick={()=>btnHandler(1)} style={btn1===true?{background:"#EC3323",color:"white"}:{}} className={btn1===false?"skew h-[26px] bg-[#D9D9D9] font-[300] text-[clamp(8px,0.8333333333333334vw,12px)] leading-[18px] ":"skewRed h-[26px] bg-[#D9D9D9] font-[300] text-[clamp(8px,0.8333333333333334vw,12px)] leading-[18px] "}>All</button>
                <button onClick={()=>btnHandler(2)} style={btn2===true?{background:"#EC3323",color:"white"}:{}} className={btn2===false?"skew3 h-[26px] bg-[#D9D9D9] font-[300] text-[clamp(8px,0.8333333333333334vw,12px)] leading-[18px] ":"skew3Red h-[26px] bg-[#D9D9D9] font-[300] text-[clamp(8px,0.8333333333333334vw,12px)] leading-[18px] "}>SALOON</button>
                <button onClick={()=>btnHandler(3)} style={btn3===true?{background:"#EC3323",color:"white"}:{}} className={btn3===false?"skew4 h-[26px] bg-[#D9D9D9] font-[300] text-[clamp(8px,0.8333333333333334vw,12px)] leading-[18px] ":"skew3Red h-[26px] bg-[#D9D9D9] font-[300] text-[clamp(8px,0.8333333333333334vw,12px)] leading-[18px] "}>ESTATE</button>
                <button onClick={()=>btnHandler(4)} style={btn4===true?{background:"#EC3323",color:"white"}:{}} className={btn4===false?"skew5 h-[26px] bg-[#D9D9D9] font-[300] text-[clamp(8px,0.8333333333333334vw,12px)] leading-[18px] ":"skew3Red h-[26px] bg-[#D9D9D9] font-[300] text-[clamp(8px,0.8333333333333334vw,12px)] leading-[18px] "}>MPV</button>
                <button onClick={()=>btnHandler(5)} style={btn5===true?{background:"#EC3323",color:"white"}:{}} className={btn5===false?"skew6 h-[26px] bg-[#D9D9D9] font-[300] text-[clamp(8px,0.8333333333333334vw,12px)] leading-[18px] ":"skew3Red h-[26px] bg-[#D9D9D9] font-[300] text-[clamp(8px,0.8333333333333334vw,12px)] leading-[18px] "}>EXECUTIVE</button>
                <button onClick={()=>btnHandler(6)} style={btn6===true?{background:"#EC3323",color:"white"}:{}} className={btn6===false?"skew2 h-[26px] bg-[#D9D9D9] font-[300] text-[clamp(8px,0.8333333333333334vw,12px)] leading-[18px] ":"skew2Red h-[26px] bg-[#D9D9D9] font-[300] text-[clamp(8px,0.8333333333333334vw,12px)] leading-[18px] "}>MINIBUS</button>
            </div>

            <div className="flex gap-[30px] m-auto mt-[30px] flex-wrap justify-center ">

                <div className="flex flex-col items-center w-[29.65277777777778vw] min-w-[377.68px] boxShadow bg-white">
                    <img src="./images/HO1.png" alt=""/>
                    <h3 className="mt-[16px] text-[28px] leading-[42px] font-[400]">SALOON / SEDAN</h3>
                    <div className="mt-[16px] flex gap-[38px] font-[400] text-[18px] text-[#474C56]">
                        <img src="./images/HOPassenger.png" alt=""/>
                        <p>x4</p>
                        <img src="./images/HOLuggage.png" alt=""/>
                        <p>23 Kg</p>
                    </div>
                    <p className="mt-[13px] w-[360px] font-[300] text-[12px] leading-[20px] text-[#181818]">Ideal for Up to 4 Passengers Plus 2 Standard Suitcases(23kg Maximum) and 2 Hand Luggages or 4 Passengers Plus Hand Luggage. Child Seats Not Available for This Type Vehicle.</p>
                    <div className="mt-[25px] flex w-full h-[41px]">
                        <button className="bskew6 bg-[#FF9F43] text-[#FFFFFF] text-[16px] leading-[24px] font-[400]"><span className="relative z-10">Book Now</span></button>
                        <button className="bskew7 bg-[#273A89] text-[#FFFFFF] text-[16px] leading-[24px] font-[400]"><span className="relative z-10">Details</span></button>
                    </div>
                </div>

                <div className="flex flex-col items-center w-[29.65277777777778vw] min-w-[377.68px] boxShadow bg-white">
                    <img src="./images/HO2.png" alt=""/>
                    <h3 className="mt-[16px] text-[28px] leading-[42px] font-[400]">ESTATE / WAGON</h3>
                    <div className="mt-[16px] flex gap-[38px] font-[400] text-[18px] text-[#474C56]">
                        <img src="./images/HOPassenger.png" alt=""/>
                        <p>x4</p>
                        <img src="./images/HOLuggage.png" alt=""/>
                        <p>23 Kg</p>
                    </div>
                    <p className="mt-[13px] w-[360px] font-[300] text-[12px] leading-[20px] text-[#181818]">These can accommodate up to 4 passengers plus 4 standard suitcases (23kg Maximum) Or 4 Hand Luggage's. Baby Seat ,Child Seat or Booster Seat Available For This ...</p>
                    <div className="mt-[25px] flex w-full h-[41px]">
                        <button className="bskew6 bg-[#FF9F43] text-[#FFFFFF] text-[16px] leading-[24px] font-[400]"><span className="relative z-10">Book Now</span></button>
                        <button className="bskew7 bg-[#273A89] text-[#FFFFFF] text-[16px] leading-[24px] font-[400]"><span className="relative z-10">Details</span></button>
                    </div>
                </div>

                <div className="flex flex-col items-center w-[29.65277777777778vw] min-w-[377.68px] boxShadow bg-white">
                    <img src="./images/HO3.png" alt=""/>
                    <h3 className="mt-[16px] text-[28px] leading-[42px] font-[400]">PEOPLE CARRIER / MPV</h3>
                    <div className="mt-[16px] flex gap-[38px] font-[400] text-[18px] text-[#474C56]">
                        <img src="./images/HOPassenger.png" alt=""/>
                        <p>x4</p>
                        <img src="./images/HOLuggage.png" alt=""/>
                        <p>23 Kg</p>
                    </div>
                    <p className="mt-[13px] w-[360px] font-[300] text-[12px] leading-[20px] text-[#181818]">These Can Accommodate Up to 5 Passengers Plus 5 Standard Suitcases (23kg max), or 6 Passengers Plus Hand Luggage. Baby Seat ,Child Seat or Booster Seat Available ... </p>
                    <div className="mt-[25px] flex w-full h-[41px]">
                        <button className="bskew6 bg-[#FF9F43] text-[#FFFFFF] text-[16px] leading-[24px] font-[400]"><span className="relative z-10">Book Now</span></button>
                        <button className="bskew7 bg-[#273A89] text-[#FFFFFF] text-[16px] leading-[24px] font-[400]"><span className="relative z-10">Details</span></button>
                    </div>
                </div>

                <div className="flex flex-col items-center w-[29.65277777777778vw] min-w-[377.68px] boxShadow bg-white">
                    <img src="./images/HO4.png" alt=""/>
                    <h3 className="mt-[16px] text-[28px] leading-[42px] font-[400]">EXECUTIVE</h3>
                    <div className="mt-[16px] flex gap-[38px] font-[400] text-[18px] text-[#474C56]">
                        <img src="./images/HOPassenger.png" alt=""/>
                        <p>x4</p>
                        <img src="./images/HOLuggage.png" alt=""/>
                        <p>23 Kg</p>
                    </div>
                    <p className="mt-[13px] w-[360px] font-[300] text-[12px] leading-[20px] text-[#181818]">Ideal for Up to 4 Passengers Plus 2 Standard Suitcases(23kg Maximum) and 2 Hand Luggages or 4 Passengers Plus Hand Luggage. Child Seats Not Available for This Type Vehicle.</p>
                    <div className="mt-[25px] flex w-full h-[41px]">
                        <button className="bskew6 bg-[#FF9F43] text-[#FFFFFF] text-[16px] leading-[24px] font-[400]"><span className="relative z-10">Book Now</span></button>
                        <button className="bskew7 bg-[#273A89] text-[#FFFFFF] text-[16px] leading-[24px] font-[400]"><span className="relative z-10">Details</span></button>
                    </div>
                </div>

                <div className="flex flex-col items-center w-[29.65277777777778vw] min-w-[377.68px] boxShadow bg-white">
                    <div className="flex justify-center items-center min-w-[425px] min-h-[245px]">
                        <img src="./images/HO5.png" alt=""/>
                    </div>
                    <h3 className="mt-[16px] text-[28px] leading-[42px] font-[400]">8 Seater Minibus</h3>
                    <div className="mt-[16px] flex gap-[38px] font-[400] text-[18px] text-[#474C56]">
                        <img src="./images/HOPassenger.png" alt=""/>
                        <p>x4</p>
                        <img src="./images/HOLuggage.png" alt=""/>
                        <p>23 Kg</p>
                    </div>
                    <p className="mt-[13px] w-[360px] font-[300] text-[12px] leading-[20px] text-[#181818]">These can accommodate up to 4 passengers plus 4 standard suitcases (23kg Maximum) Or 4 Hand Luggage's. Baby Seat ,Child Seat or Booster Seat Available For This ...</p>
                    <div className="mt-[25px] flex w-full h-[41px]">
                        <button className="bskew6 bg-[#FF9F43] text-[#FFFFFF] text-[16px] leading-[24px] font-[400]"><span className="relative z-10">Book Now</span></button>
                        <button className="bskew7 bg-[#273A89] text-[#FFFFFF] text-[16px] leading-[24px] font-[400]"><span className="relative z-10">Details</span></button>
                    </div>
                </div>

                <div className="flex flex-col items-center w-[29.65277777777778vw] min-w-[377.68px] boxShadow bg-white">
                    <img  src="./images/HO6.png" alt=""/>
                    <h3 className="mt-[16px] text-[28px] leading-[42px] font-[400]">16 SEATER MINIBUS</h3>
                    <div className="mt-[16px] flex gap-[38px] font-[400] text-[18px] text-[#474C56]">
                        <img src="./images/HOPassenger.png" alt=""/>
                        <p>x4</p>
                        <img src="./images/HOLuggage.png" alt=""/>
                        <p>23 Kg</p>
                    </div>
                    <p className="mt-[13px] w-[360px] font-[300] text-[12px] leading-[20px] text-[#181818]">These Can Accommodate Up to 5 Passengers Plus 5 Standard Suitcases (23kg max), or 6 Passengers Plus Hand Luggage. Baby Seat ,Child Seat or Booster Seat Available ...</p>
                    <div className="mt-[25px] flex w-full h-[41px]">
                        <button className="bskew6 bg-[#FF9F43] text-[#FFFFFF] text-[16px] leading-[24px] font-[400]"><span className="relative z-10">Book Now</span></button>
                        <button className="bskew7 bg-[#273A89] text-[#FFFFFF] text-[16px] leading-[24px] font-[400]"><span className="relative z-10">Details</span></button>
                    </div>
                </div>


            </div>
        </div>
    )
}