import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

function Comments() {
  return (
    <div className=" my-8">
      <div className="flex justify-between items-center flex-row ">
        <h2 className="font-bold text-start text-5xl py-8 mb-5 uppercase">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="flex space-x-2">
          {" "}
          <div className="swiper-button-prev mx-2">
            <FaArrowLeft />
          </div>
          <div className="swiper-button-next">
            <FaArrowRight />
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // navigation={{
        //   nextEl: ".image-swiper-button-next",
        //   prevEl: ".image-swiper-button-prev",
        //   disabledClass: "swiper-button-disabled",
        // }}
        modules={[Navigation]}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex flex-row flex-wrap items-start rounded-[20px] border border-[#0000001a]  p-4 h-[240px]">
            <div className="flex flex-row justify-between items-start p-2">
              <div className="flex flex-col items-start space-y-3">
                {" "}
                <div className="flex space-x-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-[20px]">Sarah M.</span>
                    <img src={require("../../assests/tick.png")} alt="" />
                  </div>
                  <p className="text-[#00000099] font-normal text-[16px]">
                    "I'm blown away by the quality and style of the clothes I
                    received from Shop.co. From casual wear to elegant dresses,
                    every piece I've bought has exceeded my expectations.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex flex-row flex-wrap items-start rounded-[20px] border border-[#0000001a]  p-4 h-[240px]">
            <div className="flex flex-row justify-between items-start p-2">
              <div className="flex flex-col items-start space-y-3">
                {" "}
                <div className="flex space-x-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-[20px]">Alex K.</span>
                    <img src={require("../../assests/tick.png")} alt="" />
                  </div>
                  <p className="text-[#00000099] font-normal text-[16px]">
                    "Finding clothes that align with my personal style used to
                    be a challenge until I discovered Shop.co. The range of
                    options they offer is truly remarkable, catering to a
                    variety of tastes and occasions.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex flex-row flex-wrap items-start rounded-[20px] border border-[#0000001a]  p-4 h-[240px]">
            <div className="flex flex-row justify-between items-start p-2">
              <div className="flex flex-col items-start space-y-3">
                {" "}
                <div className="flex space-x-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-[20px]">James L.</span>
                    <img src={require("../../assests/tick.png")} alt="" />
                  </div>
                  <p className="text-[#00000099] font-normal text-[16px]">
                    "As someone who's always on the lookout for unique fashion
                    pieces, I'm thrilled to have stumbled upon Shop.co. The
                    selection of clothes is not only diverse but also on-point
                    with the latest trends.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row flex-wrap items-start rounded-[20px] border border-[#0000001a]  p-4 h-[240px]">
            <div className="flex flex-row justify-between items-start p-2">
              <div className="flex flex-col items-start space-y-3">
                {" "}
                <div className="flex space-x-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-[20px]">Mooen</span>
                    <img src={require("../../assests/tick.png")} alt="" />
                  </div>
                  <p className="text-[#00000099] font-normal text-[16px]">
                    "As someone who's always on the lookout for unique fashion
                    pieces, I'm thrilled to have stumbled upon Shop.co. The
                    selection of clothes is not only diverse but also on-point
                    with the latest trends.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row flex-wrap items-start rounded-[20px] border border-[#0000001a]  p-4 h-[240px]">
            <div className="flex flex-row justify-between items-start p-2">
              <div className="flex flex-col items-start space-y-3">
                {" "}
                <div className="flex space-x-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-[20px]">Sarah M.</span>
                    <img src={require("../../assests/tick.png")} alt="" />
                  </div>
                  <p className="text-[#00000099] font-normal text-[16px]">
                    "I'm blown away by the quality and style of the clothes I
                    received from Shop.co. From casual wear to elegant dresses,
                    every piece I've bought has exceeded my expectations.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row flex-wrap items-start rounded-[20px] border border-[#0000001a]  p-4 h-[240px]">
            <div className="flex flex-row justify-between items-start p-2">
              <div className="flex flex-col items-start space-y-3">
                {" "}
                <div className="flex space-x-2">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                      fill="#F9940A"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start space-y-2">
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-[20px]">Sarah M.</span>
                    <img src={require("../../assests/tick.png")} alt="" />
                  </div>
                  <p className="text-[#00000099] font-normal text-[16px]">
                    "I'm blown away by the quality and style of the clothes I
                    received from Shop.co. From casual wear to elegant dresses,
                    every piece I've bought has exceeded my expectations.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Comments;
