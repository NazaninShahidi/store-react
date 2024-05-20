import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import CommentDetail from "../ui/CommentDetail";

const comments = [
  {
    name: "Sarah M.",
    commentText:
      " I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
  {
    name: "Alex K.",
    commentText:
      " Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to avariety of tastes and occasions.”",
  },
  {
    name: "Mooen",
    commentText:
      " As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”",
  },
  {
    name: "Sarah M.",
    commentText:
      " I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
  {
    name: "Sarah M.",
    commentText:
      " I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
  {
    name: "Sarah M.",
    commentText:
      " I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
  {
    name: "Sarah M.",
    commentText:
      " I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
  {
    name: "Sarah M.",
    commentText:
      " I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
  },
];

function Comments() {
  return (
    <div className="mx-3 my-8 md:mx-0">
      <div className="flex justify-between items-center flex-row ">
        <h2 className="font-bold text-start text-3xl md:text-5xl py-8 mb-5 uppercase">
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
        spaceBetween={30}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3000, // تغییر اسلایدها هر 3 ثانیه
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        className="mySwiper"
      >
        {comments.map((comment) => (
          <SwiperSlide>
            <CommentDetail comment={comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Comments;
