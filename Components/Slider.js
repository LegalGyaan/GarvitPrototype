import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import headImg from "@/Assets/1.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.livelaw.in/h-upload/2022/11/14/1600x960_444092-legal-aid.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://3.imimg.com/data3/BX/WD/MY-12856501/construction-labour-services-500x500.jpg" />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={headImg}
            width={150}
            height={50}
            alt="Picture of the author"
          />
        </SwiperSlide>
        <Link href={"articles/employmentlaw"}>
          <SwiperSlide>
            <img src="https://profspeak.com/wp-content/uploads/2021/08/employment-law-2-1545x745.jpg" />
          </SwiperSlide>
        </Link>
      </Swiper>
    </>
  );
};

export default Slider;
