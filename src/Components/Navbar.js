export default function Navbar(props){
    return(
        <div className="w-[calc(100vw - 100%)] h-[80px] flex items-center">
            <div className="flex items-center justify-between w-[100%] m-auto pl-[88px] pr-[201px]">
                <div className="flex gap-[14px]">
                    <img src="./images/Logo.png"/>
                    <h1 className="font-[700] text-[24px] text-[#000000] leading-[28.18px]">Logo</h1>
                </div>

                <div className="flex gap-[158px] items-center">
                    <ul className="flex text-[18px] gap-[30px] font-[500] text-[#464D54] leading-[27px]">
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Service Area</li>
                        <li>Fleet</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>

                    <button className="w-[137px] h-[40px] bg-[#FF9F43] rounded-[10px] text-[18px] font-[400] leading-[27px] text-[#FFFFFF]">Login As</button>
                </div>
            </div>
        </div>
    )
}