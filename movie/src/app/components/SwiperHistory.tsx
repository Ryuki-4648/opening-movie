"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import { TargetData } from "../types/targetData";

interface SwiperHistoryProps {
  targetData: TargetData[];
  reverse: boolean;
}

export default function SwiperHistory({ targetData, reverse }: SwiperHistoryProps) {
  return (
    <Swiper
      className="flex justify-end"
      modules={[Autoplay, FreeMode]}
      slidesPerView="auto"
      spaceBetween={20}
      loop={true}
      speed={1500}
      preventInteractionOnTransition={true}
      autoplay={{
        delay: 0,
        reverseDirection: reverse ? true : false,
      }}
      freeMode={{
        enabled: true,
        sticky: true, // スライドが止まることなくスムーズに流れ続ける
      }}
      // className={styles.slideWrapper}
    >
    {targetData.map(({ id, image }) => (
      <SwiperSlide key={id}>
        <Image
          src={image}
          width={300}
          height={500}
          className=""
          alt="Slider History Image"
        />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}