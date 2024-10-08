"use client";

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';

interface TargetData {
  id: number;
  image: string;
}

interface SwiperGalleryProps {
  targetData: TargetData[];
}

export default function SwiperGallery({ targetData }: SwiperGalleryProps) {
  return (
    <Swiper
    className="flex justify-end"
    modules={[Autoplay, EffectFade]}
    slidesPerView={1}
    loop={true}
    speed={100}
    autoplay={{
      delay: 500,
      disableOnInteraction: false,
    }}
    // className={styles.slideWrapper}
  >
    {targetData.map(({ id, image }) => (
      <SwiperSlide key={id}>
        <Image
          src={image}
          width={500}
          height={800}
          alt="Slider Image"
        />
      </SwiperSlide>
    ))}
  </Swiper>
  )
}