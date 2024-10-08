"use client";

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import styles from "./index.module.css";

import history01 from "../../public/data/prod/history01.json";
import history02 from "../../public/data/prod/history02.json";
import Image from "next/image";

export default function Home() {

  return (
    <div className="">
      <main className="l-main overflow-auto h-screen w-full">

        <section className="l-section h-screen w-full bg-black flex items-center">
          <h1 className="text-[220px] text-white font-ten">It&apos;s the start of<br />Our Wedding<br />Reception</h1>
        </section>

        <section className="l-section h-screen w-full bg-gray-300 flex items-center">
          <div className="max-w-[1400px] mx-auto">
            <h2></h2>
            <video className="video c-video01" src="/movie/dummy/movie_dummy01.mp4" autoPlay loop muted></video>
          </div>
        </section>

        <section className="l-section h-screen w-full bg-gray-300 flex items-center">
          <div className="max-w-[1400px] mx-auto">
            <video className="video c-video01" src="/movie/dummy/movie_dummy02.mov" autoPlay loop muted></video>
          </div>
        </section>

        <section className="l-section h-screen w-full bg-red-300 flex items-center">
          <div className="max-w-[1400px] mx-auto">
            <video className="video c-video01" src="/movie/dummy/movie_dummy03.mp4" autoPlay loop muted></video>
          </div>
        </section>

        <section className="l-section h-screen w-full bg-red-300 flex items-center">
          <div className="max-w-[1400px] mx-auto">
            <video className="video c-video01" src="/movie/dummy/movie_dummy01.mp4" autoPlay loop muted></video>
          </div>
        </section>

        <section className="l-section h-screen w-full bg-red-300 relative">
          <div className="">
            <h2 className="text-[180px] font-bold font-ten absolute top-0 left-0 leading-[0.6em]">GROOM</h2>
            <div className="w-[500px] absolute right-0 top-0 h-full">
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
                {history01.map(({ id, image }) => (
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
            </div>
          </div>
        </section>

        <section className="l-section h-screen w-full bg-green-300 relative">
          <div className="">
            <h2 className="text-[180px] font-bold font-ten absolute top-0 left-0 leading-[0.6em]">BRIDE</h2>
            <div className="w-[500px] absolute right-0 top-0 h-full">
              <Swiper
                  modules={[Autoplay]}
                  slidesPerView={1}
                  loop={true}
                  speed={100} // スライドが切り替わる時の速度
                  autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                  }}
                  // className={styles.slideWrapper}
                >
                  {history02.map(({ id, image }) => (
                    <SwiperSlide key={id}>
                      <Image
                        src={image}
                        width={500}
                        height={300}
                        alt="Slider Image"
                      />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </section>

        <section className="l-section h-screen w-full bg-green-300">
          <div className="">
            <h2>hoge</h2>
          </div>
          
        </section>

        <section className="l-section h-screen w-full bg-blue-300">
          <h2>hoge</h2>
          <div className="bg-white w-[500px] mx-auto rounded-md p-4">
            <p>ERROR</p>
            <p>text</p>
          </div>
        </section>


        <section className="l-section h-screen w-full flex items-center justify-center bg-gray-300">
          <div className="">
            <h2 className="text-[200px] font-ten">Are you ready?</h2>
          </div>
        </section>
      </main>

    </div>
  );
}
