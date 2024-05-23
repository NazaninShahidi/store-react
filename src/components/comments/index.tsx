import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import CommentDetail from "../ui/CommentDetail";
import { comments } from "../../dummyComments";

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
          delay: 3000,
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
        {comments.map((comment, index) => (
          <SwiperSlide key={index}>
            <CommentDetail comment={comment} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Comments;
