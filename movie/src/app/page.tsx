"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useState } from "react";

// import history01 from "../../public/data/prod/history01.json";
// import history02 from "../../public/data/prod/history02.json";
import groomProfImage from "../../public/data/prod/profile-groom.json";
import brideProfImage from "../../public/data/prod/profile-bride.json";
import SwiperGallery from "./components/SwiperGallery";
import ErrorModal from "./components/ErrorModal";

export default function Home() {

  /* イントロ：クリックで文字を表示 */
  const [displayIntroMessage, setDisplayIntroMessage] = useState(false);
  const handleClickIntro = () => {
    setDisplayIntroMessage(true);
  }

  /* プロフィール：新郎側：クリックでメッセージを表示 */
  const [displayProfMessageByGroom, setDisplayProfMessageByGroom] = useState(0);
  const handleClickProfMessageByGroom = () => {
    setDisplayProfMessageByGroom((prev) => (prev === 2 ? 1 : prev + 1));
  }

  /* プロフィール：新婦側：クリックでメッセージを表示 */
  const [displayProfMessageByBride, setDisplayProfMessageByBride] = useState(0);
  const handleClickProfMessageByBride = () => {
    setDisplayProfMessageByBride((prev) => (prev === 2 ? 1 : prev + 1));
  }

  /* プロフィール：新郎側：クリックでスライダー稼働 */
  const [autoPlayGroomSlider, setAutoPlayGroomSlider] = useState(false);
  const clickGroomSlider = () => {
    setAutoPlayGroomSlider(true);
  }

  /* プロフィール：新婦側：クリックでスライダー稼働 */
  const [autoPlayBrideSlider, setAutoPlayBrideSlider] = useState(false);
  const clickBrideSlider = () => {
    console.log(autoPlayBrideSlider)
    setAutoPlayBrideSlider(true);
  }

  return (
    <div className="">
      <main className="l-main overflow-auto h-screen w-full">

        <section className="l-section h-screen w-full bg-black flex items-center">
          <h1
            className={`text-[220px] cursor-pointer font-ten ${displayIntroMessage ? 'text-white': 'text-black'}`}
            onClick={handleClickIntro}
          >
            Welcome to<br />Our Wedding<br />Party
          </h1>
        </section>

        <section className="l-section h-screen w-full bg-gray-300 flex items-center">
          <div className=" mx-auto">
            <h2></h2>
            <video className="video c-video01" src="/movie/dummy/movie_dummy01.mp4" autoPlay loop muted></video>
          </div>
        </section>

        <section className="l-section h-screen w-full bg-gray-300 flex items-center">
          <div className=" mx-auto">
            <video className="video c-video01" src="/movie/dummy/movie_dummy02.mov" autoPlay loop muted></video>
          </div>
        </section>

        <section className="l-section h-screen w-full bg-red-300 flex items-center">
          <div className=" mx-auto">
            <video className="video c-video01" src="/movie/dummy/movie_dummy03.mp4" autoPlay loop muted></video>
          </div>
        </section>

        {/* <section className="l-section h-screen w-full bg-red-300 flex items-center">
          <div className=" mx-auto">
            <video className="video c-video01" src="/movie/dummy/movie_dummy01.mp4" autoPlay loop muted></video>
          </div>
        </section> */}

        <section className="l-section l-sectionGroom h-screen w-full relative bg-navy01 text-white01">
          <div className="">
            <h2 className="text-[220px] font-bold absolute top-0 left-0 leading-[0.78em] ">GROOM</h2>
            <div className="w-[500px] absolute right-0 top-0 h-full">
              <p
                className="absolute font-bold font-ten text-[50px] top-12 -left-32 rotate-90 cursor-pointer duration-300 hover:text-gold01"
                onClick={clickGroomSlider}
              >
                Gallery
              </p>
              <SwiperGallery targetData={groomProfImage} autoplayflg={autoPlayGroomSlider} />
            </div>

            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <p className="text-[80px] tracking-normal font-bold">{process.env.NEXT_PUBLIC_GROOM_NAME_EN}</p>
              <p className="text-[64px] font-bold font-ten mb-12">{process.env.NEXT_PUBLIC_GROOM_BIRTHDAY}</p>
              {displayProfMessageByGroom === 0 && (
                <p className="text-[38px] font-ten cursor-pointer duration-300 hover:text-gold01" onClick={handleClickProfMessageByGroom}>
                  Click and Display message.<br />
                </p>
              )}
              {displayProfMessageByGroom === 1 && (
                <p className="text-[38px] font-ten cursor-pointer duration-300 hover:text-gold01" onClick={handleClickProfMessageByGroom}>
                  メッセージ<br />
                  メッセージ
                </p>
              )}
              {displayProfMessageByGroom === 2 && (
                <p className="text-[38px] font-ten">
                  メッセージ<br />
                  メッセージ
                </p>
              )}
            </div>
            
            <div className="c-textAnimation absolute right-[660px] bottom-[150px]">
              <svg viewBox="0 0 50 50">
                <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
                <text>
                  <textPath xlinkHref="#circle">
                    Thanks for coming to our wedding party today! by Juniya
                  </textPath>
                </text>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="30s"
                  repeatCount="indefinite"
                />
              </svg>
            </div>

            <p className="text-[160px] absolute bottom-0 left-0 font-ten leading-[0.9em]">{process.env.NEXT_PUBLIC_GROOM_NAME}</p>
          </div>
        </section>


        <section className="l-section l-sectionBride h-screen w-full relative bg-grayLight01 text-black02">
          <div className="">
            <h2 className="text-[220px] font-bold absolute top-0 left-0 leading-[0.78em]">BRIDE</h2>
            <div className="w-[500px] absolute right-20 top-20 h-full">
              <p
                className="absolute font-bold font-ten text-[50px] top-12 -left-32 rotate-90 cursor-pointer duration-300 hover:text-pink01"
                onClick={clickBrideSlider}
              >
                Gallery
              </p>
              <SwiperGallery targetData={brideProfImage} autoplayflg={autoPlayBrideSlider} />
            </div>

            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <p className="text-[80px] tracking-tight font-bold">{process.env.NEXT_PUBLIC_BRIDE_NAME_EN}</p>
              <p className="text-[60px] font-bold font-ten mb-10">{process.env.NEXT_PUBLIC_BRIDE_BIRTHDAY}</p>
              {displayProfMessageByBride === 0 && (
                <p className="text-[38px] font-ten cursor-pointer leading-loose duration-300 hover:text-pink01" onClick={handleClickProfMessageByBride}>
                  Click and Display message.<br />
                </p>
              )}
              {displayProfMessageByBride === 1 && (
                <p className="text-[38px] font-ten cursor-pointer duration-300" onClick={handleClickProfMessageByBride}>
                  本日はお越しいただきありがとうございます。<br />
                  皆さまのおかげで、無事に式を挙げることができました。
                </p>
              )}
              {displayProfMessageByBride === 2 && (
                <p className="text-[38px] font-ten">
                  ゆっくりと食事やお飲み物を楽しんでください。<br />
                  私はお酒の飲み過ぎに気をつけます。
                </p>
              )}
            </div>

            <div className="c-textAnimation absolute right-[660px] bottom-[150px]">
              <svg viewBox="0 0 50 50">
                <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
                <text>
                  <textPath xlinkHref="#circle">
                    Enjoy your meal and drink, especially alcohol !! by Reina
                  </textPath>
                </text>
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 50 50"
                  to="360 50 50"
                  dur="20s"
                  repeatCount="indefinite"
                />
              </svg>
            </div>

            <p className="text-[160px] absolute bottom-0 left-0 font-ten leading-[0.9em]">{process.env.NEXT_PUBLIC_BRIDE_NAME}</p>
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
