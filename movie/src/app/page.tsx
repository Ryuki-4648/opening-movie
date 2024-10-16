"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import history01 from "../../public/data/prod/history01.json";
import history02 from "../../public/data/prod/history02.json";
import SwiperGallery from "./components/SwiperGallery";
import ErrorModal from "./components/ErrorModal";

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
              <SwiperGallery targetData={history01} />
            </div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 font-ten text-[38px]">
              <p>xxxx年xx月xx日生まれ</p>
              <p>本日はお越しいただきありがとうございます。</p>
            </div>
            <p className="text-[160px] absolute bottom-0 left-0 font-ten leading-[0.9em]">橋本 奈々未</p>
          </div>
        </section>

        <section className="l-section h-screen w-full bg-green-300 relative">
          <div className="">
            <h2 className="text-[180px] font-bold font-ten absolute top-0 left-0 leading-[0.6em]">BRIDE</h2>
            <div className="w-[500px] absolute right-0 top-0 h-full">
              <SwiperGallery targetData={history02} />
            </div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 font-ten text-[38px]">
              <p>xxxx年xx月xx日生まれ</p>
              <p>本日はお越しいただきありがとうございます。<br />お酒の飲み過ぎに気をつけます。</p>
            </div>
            <p className="text-[160px] absolute bottom-0 left-0 font-ten leading-[0.9em]">与田 祐希</p>
          </div>
        </section>

        <section className="l-section h-screen w-full bg-green-300">
          <div className="flex justify-between">
            <div className="">
              <h2>History</h2>
            </div>
            <div className="">
              <h2>History</h2>
            </div>
          </div>
          
        </section>

        <section className="l-section h-screen w-full bg-black relative">
          <ErrorModal />
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
