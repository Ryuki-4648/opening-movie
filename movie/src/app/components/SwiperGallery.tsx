"use client";

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import { TargetData } from "../types/targetData";

interface SwiperGalleryProps {
  targetData: TargetData[];
  autoplayflg: boolean;
  sliderSpeed: number;
}

export default function SwiperGallery({ targetData, autoplayflg, sliderSpeed }: SwiperGalleryProps) {
  return (
    <Swiper
      key={autoplayflg ? 'autoplay-enabled' : 'autoplay-disabled'}
      className="flex justify-end"
      modules={[Autoplay, EffectFade]}
      slidesPerView={1}
      loop={true}
      speed={sliderSpeed}
      autoplay={autoplayflg ? {
        delay: 1200,
        disableOnInteraction: false,
      } : false}
      // className={styles.slideWrapper}
    >
    {targetData.map(({ id, image }) => (
      <SwiperSlide key={id}>
        <Image
          src={image}
          width={600}
          height={900}
          className="rounded-tr-[100px]"
          alt="Slider Image"
        />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}