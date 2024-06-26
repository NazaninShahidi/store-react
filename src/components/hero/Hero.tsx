import React from "react";

function Hero() {
  return (
    <div>
      <div className="hero bg-[#F2F0F1]  md:h-[663px] ">
        <div className="md:absolute md:w-[577px] md:h-[173px] left-[100px] top-[237px] font-bold  flex flex-col space-y-4 leading-[64px] p-3 md:p-0">
          <p className="text-[36px] md:text-[64px]">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </p>
          <span className="text-[#00000099] text-[16px] font-normal leading-[22px]">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </span>
          <button className="md:w-[210px] h-[52px] flex justify-center items-center text-[16px] font-normal bg-[#000000]  rounded-[62px] gap-3 text-white">
            Shop Now
          </button>

          <div className="flex flex-wrap md:flex-nowrap  flex-row items-center p-0 space-x-6 ">
            <div className="flex flex-col items-start p-0">
              <p className="text-[40px] font-bold">200+</p>
              <span className="text-[16px] font-normal text-[#00000099] leading-3 text-nowrap">
                International Brands
              </span>
            </div>
            <div className="w-[74px] h-0 md:border md:border-[#00000099] rotate-90"></div>
            <div className="flex flex-col items-start p-0">
              <p className="text-[40px] font-bold">2,000+</p>
              <span className="text-[16px] font-normal text-[#00000099] leading-3 text-nowrap">
                High-Quality Products
              </span>
            </div>
            <div className="w-[74px] h-0 md:border md:border-[#00000099] rotate-90"></div>
            <div className="flex flex-col items-start p-0">
              <p className="text-[40px] font-bold">30,000+</p>
              <span className="text-[16px] font-normal text-[#00000099] leading-3 text-nowrap">
                Happy Customers
              </span>
            </div>
          </div>
        </div>
        <img src="assests/hero-1.png" alt="" className="md:hidden" />
      </div>
      <div className="bg-[#000000] w-full">
        <div className="flex flex-wrap space-x-2 space-y-3 md:flex-nowrap justify-between mx-auto items-center max-w-screen-xl p-8 md:space-x-0 md:space-y-0">
          <img src="assests/1.png" alt="" />
          <img src="assests/2.png" alt="" />
          <img src="assests/3.png" alt="" />
          <img src="assests/4.png" alt="" />
          <img src="assests/5.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
