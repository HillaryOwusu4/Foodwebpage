const Footer = () => {
    return (<div className="w-full h-[25%] z-index flex justify-center items-center ">
        <div className="w-[75%] h-[100%]">
        <div className="w-full h-[64%] flex ">
                <div className="w-[25%] flex flex-col justify-center h-full">
                    <img src="./images/logossss__2_-removebg-preview.png" className="w-[200px] contrast-150 " alt="logo" />
                    <span className="text-gray-500">The best we can offer with Pizza</span>
                </div>
                <div className="w-[50%] justify-center h-full flex">
                   <div className="w-[60%] h-full flex">
                   <div className="w-[30%] flex items-center  justify-center text-3xl text-gray-400">
                    <i class="fa-solid fa-phone-volume"></i>
                    </div>
                <div className=" w-[70%] h-full flex justify-center flex-col">
                <span className="font-bold text-orange-600 text-lg">8(8352) 360-365</span>
                <span className="text-sm text-gray-600 underline">call as anytime wil listen</span>
                </div>
                   </div>
                </div>
                <div className="w-[25%] h-full flex flex-col items-end">
                  <span className="text-gray-400">
                    contact us on socials:
                  </span>
                  <div className="w-[85%] h-[50%] items-center flex justify-between">
               <div className="w-[17%] h-[75%] flex justify-center items-center rounded-full text-xl text-white bg-cyan-700"><i class="fa-brands fa-square-whatsapp"></i></div>
                <div className="w-[17%] h-[75%] flex justify-center items-center rounded-full  text-white bg-cyan-900"> <i class="fa-brands fa-facebook-f"></i></div>
                  <div className="w-[17%] h-[75%] flex justify-center items-center rounded-full  text-white bg-orange-500"><i class="fa-brands fa-facebook-messenger"></i></div>
                <div className="w-[17%] h-[75%] flex justify-center items-center rounded-full  text-white bg-amber-300">  <i class="fa-brands fa-instagram"></i></div>
                  </div>
                </div>
            </div>
            <div className=" flex border-t border-gray-200 w-[full] h-[36%]">
                <div className="w-[30%] h-full flex items-center">
                    <span className="text-gray-400">Payment made with:</span>
                    <img src="./images/visa.jpg" alt="" className="w-[45px] ml-3 h-[30px]"/>
                    <img src="./images/master.jpg" alt="" className="w-[45px] ml-3 h-[30px] "/>
                </div>
                <div className="w-[70%] h-full flex justify-end ">
                    <div className="flex w-[80%] h-full justify-between font-bold items-center">
                        <div className="">H0ME</div>
                        <div className="">PRODUCT</div>
                        <div className="">FEATURES</div>
                        <div className="">OUR BLOG</div>
                        <div className="">SEARCH</div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Footer;