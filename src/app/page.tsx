"use client";
import React, { useState, useEffect } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Orbitron, Inter } from "next/font/google";
import Image from "next/image";
import Carousel from "../components/ui/carousel";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";

const orbi = Orbitron({
  subsets: ["latin"],
  weight: "400",
});
const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});
const slideData1 = [
  {
    title: "Java",
    button: "Explore Component",
    src: "/java.png",
  },
  {
    title: "C",
    button: "Explore Component",
    src: "/C.webp",
  },
  {
    title: "Python",
    button: "Explore Component",
    src: "/python.png",
  },
  {
    title: "C++",
    button: "Explore Component",
    src: "/C++.webp",
  },
  {
    title: "Javascript",
    button: "Explore Component",
    src: "/javascript.png",
  },
  {
    title: "Golang",
    button: "Explore Component",
    src: "/golang.png",
  },
];
const slideData2 = [
  {
    title: "React",
    button: "Explore Component",
    src: "/react.png",
  },
  {
    title: "Next",
    button: "Explore Component",
    src: "/next.jpg",
  },
  {
    title: "MySQL",
    button: "Explore Component",
    src: "/mysql.png",
  },
  {
    title: "PostgreSQL",
    button: "Explore Component",
    src: "/postgres.png",
  },
  {
    title: "MongoDB",
    button: "Explore Component",
    src: "/mongo.png",
  },
];
export default function Home() {
  const [animate, setAnimate] = useState(false);
  const [hide, setHide] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); // Forces re-render
  const scrollTokno = () => {
    window.scrollTo({ top: 2.6 * window.innerHeight, behavior: "smooth" });
  };
  const scrollToach = () => {
    window.scrollTo({ top: 4.1 * window.innerHeight, behavior: "smooth" });
  };
  const scrollToabo = () => {
    window.scrollTo({ top: 1 * window.innerHeight, behavior: "smooth" });
  };
  const scrollTocon = () => {
    window.scrollTo({ top: 5.7 * window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    const startAnimation = setTimeout(() => {
      setAnimate(true);
      setAnimationKey((prev) => prev + 1); // Force re-render
    }, 2000); // Delay before animation starts

    return () => clearTimeout(startAnimation);
  }, []);

  return (
    <>
      <div className="bg-[url('/bg.jpg')]">
        {/* 🔥 Force re-rendering with key */}
        {!hide && (
          <div
            key={animationKey} // Forces React to recognize animation
            className={`fixed inset-0 bg-neutral-950 z-50 flex items-center justify-center transition-all ${animate ? "slide-out" : ""
              }`}
            onAnimationEnd={() => setHide(true)} // Only removes after animation finishes
          >
            <div className="spinner"></div>
          </div>
        )}
        <div className="h-[90vh] w-screen bg-neutral-950 relative flex flex-col antialiased">
          <div className="h-1/4 w-full">
            <BackgroundBeams />
          </div>
          <div className="mx-auto mt-24 p-10 rounded-2xl backdrop-blur-[2px] bg-[rgba(50,50,50,0.1)] border-1 text-white border-sky-400">
            <div className={`md:text-7xl text-sky-400 text-center mb-5 ${orbi.className}`}>
              WELCOME
            </div>
            <div className={` ml-3`}>TO VEDAANT'S PORTFOLIO</div>
          </div>
        </div>
        <div className="w-screen h-[10vh] bg-[rgba(0,0,0,0.7)] overflow-hidden">
          <div className="overflow-hidden w-full bg-transparent py-2">
            <div className="flex whitespace-nowrap animate-marquee">
              {Array(30)
                .fill("//////")
                .map((text, i) => (
                  <span key={i} className={`text-sky-400 font-extrabold text-5xl tracking-widest wide-slash ${inter.className}`}>
                    {text}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-[580vh] w-screen bg-[url('/bg.jpg')] bg-opacity-50">
        <div className="h-[580vh] w-screen bg-[rgba(0,0,0,0.7)] ">
          <div className={`m-auto mb-5 w-1/3 h-20 border backdrop-blur-[2px] border-[rgba(0,177,255,1)] flex items-center justify-center rounded-3xl text-[rgb(0,177,255)] text-3xl ${orbi.className}`}>
            ABOUT ME
          </div>
          <div className="flex justify-between h-[130vh]">
            <div className="w-1/2 mt-20">
              <div className="flip-box flex ">
                <div className="w-96 h-52 m-auto p-10 ml-60 text-sky-400 animated-border flex justify-between">
                  <div>
                    <b>NAME:</b> Vedaant Mahale <br></br>
                    <b>AGE:</b> 18 <br></br>
                    <b>HOBBIES:</b> None <br></br>
                    <b>COLLEGE:</b> Sardar Patel <br></br> Institute of Technology
                  </div>
                  <div className="cursor-pointer hover-grow w-16 h-16 m-auto mt-6 rounded-full bg-sky-400 flex items-center justify-center overflow-hidden"><Image
                    src="/profile.png"
                    alt="Profile Icon"
                    width={48}
                    height={48}
                    className="object-cover w-[90%] h-[90%] rounded-full m-auto"
                  />
                  </div>
                </div>
              </div>
              <div className="flip-box flex mt-40">
                <div className="w-96 h-52 m-auto p-4 mr-60 text-sky-400 animated-border flex justify-center">
                  <div className="cursor-pointer hover-grow w-30 h-30 bg-white rounded-full flex items-center justify-center overflow-hidden m-auto ml-10 mt-6"><Image
                    src="/linkedin.png"
                    alt="Profile Icon"
                    width={48}
                    height={48}
                    className="object-cover w-[90%] h-[90%] rounded-full" />
                  </div>
                  <a
  href="https://www.linkedin.com/in/vedaant-mahale-a8a517291/"
  target="_blank"
  rel="noopener noreferrer"
  className={`w-20 h-12 m-auto bg-sky-400 rounded-full text-black ${orbi.className} font-bold cursor-pointer hover-grow flex items-center justify-center`}
>
  VIEW
</a>

                  
                </div>
              </div>
              <div className="flip-box flex mt-40">
                <div className="w-96 h-52 m-auto p-4 mr-60 text-sky-400 animated-border flex justify-center">
                  <div className="cursor-pointer hover-grow w-30 h-30 bg-white rounded-full flex items-center justify-center overflow-hidden m-auto ml-10 mt-6"><Image
                    src="/codeforces.webp"
                    alt="Profile Icon"
                    width={48}
                    height={48}
                    className="object-cover w-[90%] h-[90%] rounded-full" />
                  </div>
                  <a
  href="https://codeforces.com/profile/VSM_123"
  target="_blank"
  rel="noopener noreferrer"
  className={`w-20 h-12 m-auto bg-sky-400 rounded-full text-black ${orbi.className} font-bold cursor-pointer hover-grow flex items-center justify-center`}
>
  VIEW
</a>

                  
                </div>
              </div>
            </div>
            <div className="timeline"></div>
            <div className="w-1/2 mt-60">
              <div className="flip-box flex">
                <div className="w-96 h-52 m-auto p-4 mr-60 text-sky-400 animated-border flex justify-center">
                  <div className="cursor-pointer hover-grow w-30 h-30 bg-white rounded-full flex items-center justify-center overflow-hidden m-auto ml-10 mt-6"><Image
                    src="/github.png"
                    alt="Profile Icon"
                    width={48}
                    height={48}
                    className="object-cover w-[90%] h-[90%] rounded-full" />
                  </div>
                  <a
  href="https://github.com/Vedaant-Mahale"
  target="_blank"
  rel="noopener noreferrer"
  className={`w-20 h-12 m-auto bg-sky-400 rounded-full text-black ${orbi.className} font-bold cursor-pointer hover-grow flex items-center justify-center`}
>
  VIEW
</a>
                </div>
              </div>
              <div className="flip-box flex mt-40">
                <div className="w-96 h-52 m-auto p-4 mr-60 text-sky-400 animated-border flex justify-center">
                  <div className="cursor-pointer hover-grow w-30 h-30 bg-white rounded-full flex items-center justify-center overflow-hidden m-auto ml-10 mt-6"><Image
                    src="/leetcode.webp"
                    alt="Profile Icon"
                    width={48}
                    height={48}
                    className="object-cover w-[90%] h-[90%] rounded-full" />
                  </div>
                  <a
  href="https://leetcode.com/u/VedaantM/"
  target="_blank"
  rel="noopener noreferrer"
  className={`w-20 h-12 m-auto bg-sky-400 rounded-full text-black ${orbi.className} font-bold cursor-pointer hover-grow flex items-center justify-center`}
>
  VIEW
</a>

                  
                </div>
              </div>
            </div>
          </div>
          <div className={`m-auto mb-5 mt-40 w-1/3 h-20 border backdrop-blur-[2px] border-[rgba(0,177,255,1)] flex items-center justify-center rounded-3xl text-[rgb(0,177,255)] text-3xl ${orbi.className}`}>MY LANGUAGES</div>
          <div className="relative overflow-hidden py-20">
            <Carousel slides={slideData1} />
          </div>
          <div className={`m-auto mb-5 mt-40 w-1/3 h-20 border backdrop-blur-[2px] border-[rgba(0,177,255,1)] flex items-center justify-center rounded-3xl text-[rgb(0,177,255)] text-3xl ${orbi.className}`}>MY TECHSTACKS</div>
          <div className="relative overflow-hidden py-20">
            <Carousel slides={slideData2} />
          </div>
          <div className={`m-auto mb-5 mt-40 w-1/3 h-20 border backdrop-blur-[2px] border-[rgba(0,177,255,1)] flex items-center justify-center rounded-3xl text-[rgb(0,177,255)] text-3xl ${orbi.className}`}>MY ACHIEVEMENTS</div>
          <div className="flex justify-center ">
            <CardContainer className="inter-var">
              <CardBody className="relative group/card w-auto h-auto border border-[rgba(0,177,255,1)] m-48 mt-0 box">
                <div className="flex flex-col">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white m-auto"
                  >
                    Participation
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm max-w-sm mt-2 text-white m-auto"
                  >
                    Code-Relay VJTI
                  </CardItem>
                </div>
                <CardItem
                  translateZ="100"
                  rotateX={10}
                  rotateZ={5}
                  className="w-full mt-4"
                >
                  <Image
                    src="/code-relay.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-96 object-cover group-hover/card:shadow-xl border-white border-2 m-auto"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="relative group/card w-auto h-auto rounded-xl p-6 mt-0 box">
                <div className="flex flex-col">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white m-auto"
                  >
                    Participation
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm max-w-sm mt-2 text-white m-auto"
                  >
                    Odessey Hackathon - SPIT
                  </CardItem>
                </div>
                <CardItem
                  translateZ="100"
                  rotateX={10}
                  rotateZ={-5}
                  className="w-full mt-4"
                >
                  <Image
                    src="/csi-hackathon.jpg"
                    height="1000"
                    width="1000"
                    className="h-60 w-96 object-cover group-hover/card:shadow-xl border-2 border-white m-auto"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          <div className="flex justify-center">
            <CardContainer className="inter-var">
              <CardBody className="relative group/card w-auto h-auto border border-[rgba(0,177,255,1)] m-48 mt-0 box">
                <div className="flex flex-col">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white m-auto"
                  >
                    Participation
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm max-w-sm mt-2 text-white m-auto"
                  >
                    Source Start SPIT
                  </CardItem>
                </div>
                <CardItem
                  translateZ="100"
                  rotateX={10}
                  rotateZ={-5}
                  className="w-full mt-4"
                >
                  <Image
                    src="/source-start.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-96 object-cover group-hover/card:shadow-xl border-white border-2 m-auto"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
              <CardBody className="relative group/card w-auto h-auto rounded-xl p-6 mt-0 box">
                <div className="flex flex-col">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white m-auto"
                  >
                    Participation
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-sm max-w-sm mt-2 text-white m-auto"
                  >
                    Code Housie - SPIT
                  </CardItem>
                </div>
                <CardItem
                  translateZ="100"
                  rotateX={10}
                  rotateZ={5}
                  className="w-full mt-4"
                >
                  <Image
                    src="/code-housie.png"
                    height="1000"
                    width="1000"
                    className="h-60 w-96 object-cover group-hover/card:shadow-xl border-2 border-white m-auto"
                    alt="thumbnail"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
          <div className={`m-auto mb-5 mt-40 w-1/3 h-20 border backdrop-blur-[2px] border-[rgba(0,177,255,1)] flex items-center justify-center rounded-3xl text-[rgb(0,177,255)] text-3xl ${orbi.className}`}>CONTACT ME</div>
          <div className="w-screen flex flex-col">
            <input className="mt-10 w-1/3 h-10 p-5 backdrop-blur-xs rounded-full bg-[rgba(10,10,10,0.5)] m-auto text-sky-400 outline-none border border-sky-400" placeholder="Email Address"></input>
            <input className="mt-10 w-1/3 h-10 p-5 backdrop-blur-xs rounded-full bg-[rgba(10,10,10,0.5)] m-auto text-sky-400 outline-none border border-sky-400" placeholder="Subject"></input>
            <textarea
              className="mt-10 w-1/3 h-96 p-5 backdrop-blur-xs rounded-xl bg-[rgba(10,10,10,0.5)] m-auto text-sky-400 outline-none border border-sky-400 text-left align-top resize-none"
              placeholder="Content"
            />
            <button className="mt-10 w-40 h-10 m-auto rounded-full backdrop-blur-xs bg-[rgba(10,10,10,0.5)] border-sky-400 border text-sky-400">Send</button>
          </div>
        </div>
      </div>
      <div className="fixed right-10 top-1/2 transform -translate-y-1/2 w-20 h-1/2 bg-[rgba(50,50,50,0.1)] rounded-full backdrop-blur-[2px] border-1 border-sky-400 flex flex-col">
        <button className="cursor-pointer hover-grow w-12 h-12 m-auto rounded-full bg-sky-400 flex items-center justify-center overflow-hidden" onClick={scrollToabo}><Image
          src="/profile.png"
          alt="Profile Icon"
          width={48}
          height={48}
          className="object-cover w-[90%] h-[90%] rounded-full m-auto"
        /></button>
        <button className="cursor-pointer hover-grow w-12 h-12 m-auto rounded-full bg-sky-400 flex items-center justify-center overflow-hidden" onClick={scrollTokno}>
          <Image
            src="/book.png"
            alt="book Icon"
            width={48}
            height={48}
            className="object-cover w-[90%] h-[90%] rounded-full"
          />
        </button>
        <button className="cursor-pointer hover-grow w-12 h-12 m-auto rounded-full bg-sky-400 flex items-center justify-center overflow-hidden" onClick={scrollToach}>
          <Image
            src="/trophy.png"
            alt="book Icon"
            width={48}
            height={48}
            className="object-cover w-[90%] h-[90%] rounded-full"
          />
        </button>
        <button className="cursor-pointer hover-grow w-12 h-12 m-auto rounded-full bg-sky-400 flex items-center justify-center overflow-hidden" onClick={scrollTocon}>
          <Image
            src="/telephone.png"
            alt="book Icon"
            width={48}
            height={48}
            className="object-cover w-[90%] h-[90%] rounded-full"
          />
        </button>
      </div>
    </>
  );
}
