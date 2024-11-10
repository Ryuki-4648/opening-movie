"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperGallery from "./components/SwiperGallery";
import SwiperHistory from "./components/SwiperHistory";

//import groomHistoryImage from "../../public/data/prod/history-groom.json";
import brideHistoryImage from "../../public/data/prod/history-bride.json";
import groomProfImage from "../../public/data/prod/profile-groom.json";
import brideProfImage from "../../public/data/prod/profile-bride.json";
import brideReceptionImage01 from "../../public/data/prod/reception-bride01.json"
import brideReceptionImage02 from "../../public/data/prod/reception-bride02.json"

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

  /* 受付者の紹介：Andクリックで2人目に遷移 */
  const [currentGroomReception, setCurrentGroomReception] = useState(1);
  const clickNextGroomReception = () => {
    setCurrentGroomReception(2);
  }

  /* 受付者の紹介：Andクリックで2人目に遷移 */
  const [currentBrideReception, setCurrentBrideReception] = useState(1);
  const clickNextBrideReception = () => {
    setCurrentBrideReception(2);
  }

  /* ラスト：テキストクリックで背景色変化 */
  const [hideContent, setHideContent] = useState(false);
  const clickReadyText = () => {
    setHideContent(true);
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

        <section className="l-section h-screen w-full bg-black flex items-center">
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
            <div className="w-[500px] absolute right-28 top-20 h-full">
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
              <p className="text-[64px] font-bold font-ten mb-12">{process.env.NEXT_PUBLIC_GROOM_BIRTHDAY} / age:29 / Birthplace: Hyogo</p>
              {displayProfMessageByGroom === 0 && (
                <p className="text-[38px] font-ten cursor-pointer duration-300 hover:text-gold01" onClick={handleClickProfMessageByGroom}>
                  Click and Display message.<br />
                </p>
              )}
              {displayProfMessageByGroom === 1 && (
                <p className="text-[38px] font-ten cursor-pointer duration-300" onClick={handleClickProfMessageByGroom}>
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
            <div className="w-[500px] absolute right-28 top-20 h-full">
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
              <p className="text-[60px] font-bold font-ten mb-10">{process.env.NEXT_PUBLIC_BRIDE_BIRTHDAY} / age:31 / Birthplace: Osaka</p>
              {displayProfMessageByBride === 0 && (
                <p className="text-[38px] font-ten cursor-pointer leading-loose duration-300 hover:text-pink01" onClick={handleClickProfMessageByBride}>
                  Click and Display message.
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

        <section className="l-section l-sectionHistory h-screen w-full bg-black01">
          <div className="grid grid-flow-row h-screen">
            <div className="h-1/2">
              <h2 className="text-grayLight01 text-[60px] font-bold pl-10">History of Juniya</h2>
              {/* <SwiperHistory targetData={groomHistoryImage}/> */}
              <SwiperHistory targetData={brideHistoryImage}/>
            </div>
            <div className="h-1/2">
              <h2 className="text-grayLight01 text-[60px] font-bold text-right pr-10">History of Reina</h2>
              <SwiperHistory targetData={brideHistoryImage}/>
            </div>
          </div>
          
        </section>

        <section className="l-section h-screen w-full bg-navy01 text-white01 relative">
          <h2 className="text-[130px] font-bold uppercase">Reception</h2>
          <h3 className="text-[100px] font-bold absolute right-0 bottom-0">Groom side</h3>

          <div className="mb-20 pl-4">
            <div className="grid mb-10">
              <h4 className="text-[60px] font-ten font-bold mb-10 leading-none">
                {currentBrideReception === 1 ? process.env.NEXT_PUBLIC_BRIDE_RECEPTION01 : process.env.NEXT_PUBLIC_BRIDE_RECEPTION02}
              </h4>
              <p className="text-[30px] font-ten">
                {currentBrideReception === 1 ? 
                <>
                  受付1人目へのメッセージ<br /><br />
                  メッセージ<br /><br />
                  メッセージ<br />
                  メッセージ
                </> :
                <>
                  受付2人目へのメッセージ<br /><br />
                  メッセージ<br /><br />
                  メッセージ<br />
                  メッセージ
                </>
                }
              </p>
            </div>
            <div className="">
              <ul className="grid grid-flow-col gap-x-1 flex-wrap">
                {(currentBrideReception === 1 ? brideReceptionImage01 : brideReceptionImage02).map(({ id, image}) => (
                  <li>
                    <Image
                      key={id}
                      src={image}
                      width={300}
                      height={500}
                      className=""
                      alt="Reception Image"
                    />
                  </li>
                ))}
                
              </ul>
            </div>
          </div>
          {currentBrideReception === 1 && (
            <p
              className="text-[60px] font-ten absolute left-4 bottom-4 cursor-pointer duration-300 hover:text-gold01"
              onClick={clickNextBrideReception}
            >
              And...
            </p>
          )}
        </section>

        <section className="l-section h-screen w-full bg-grayLight01 text-black02 relative">
          <h2 className="text-[130px] font-bold uppercase leading-none mb-12">Reception</h2>
          
          <h3 className="text-[100px] font-bold absolute right-0 bottom-0">Bride side</h3>

          <div className="mb-20 pl-4">
            <div className="grid mb-10">
              <h4 className="text-[60px] font-ten font-bold mb-10 leading-none">
                {currentBrideReception === 1 ? process.env.NEXT_PUBLIC_BRIDE_RECEPTION01 : process.env.NEXT_PUBLIC_BRIDE_RECEPTION02}
              </h4>
              <p className="text-[30px] font-ten">
                {currentBrideReception === 1 ? 
                <>
                  text1
                </> :
                <>
                  text2
                </>
                }
              </p>
            </div>
            <div className="">
              <ul className="grid grid-flow-col gap-x-1 flex-wrap">
                {(currentBrideReception === 1 ? brideReceptionImage01 : brideReceptionImage02).map(({ id, image}) => (
                  <li>
                    <Image
                      key={id}
                      src={image}
                      width={300}
                      height={500}
                      className=""
                      alt="Reception Image"
                    />
                  </li>
                ))}
                
              </ul>
            </div>
          </div>
          {currentBrideReception === 1 && (
            <p
              className="text-[60px] font-ten absolute left-4 bottom-4 cursor-pointer duration-300 hover:text-pink01"
              onClick={clickNextBrideReception}
            >
              And...
            </p>
          )}
        </section>

        <section className={`l-section h-screen w-full flex items-center justify-center ${hideContent ? 'bg-black' : 'bg-gray-300' }`}>
          <div className="">
            <h2 className="text-[200px] font-ten cursor-pointer duration-300 hover:text-pink01" onClick={clickReadyText}>Are you ready?</h2>
          </div>
        </section>
      </main>

    </div>
  );
}
