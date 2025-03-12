"use client";
import React, { useState, useEffect } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Orbitron, Inter } from "next/font/google";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { Carousel, Card } from "../components/ui/apple-cards-carousel";


const orbi = Orbitron({
  subsets: ["latin"],
  weight: "400",
});
const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});
const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const data = [
  {
    category: "Java",
    title: "My First and Strongest Language",
    src: "/java.png",
    content: <>
    <p className="text-white font-extralight">I began learning java in late 2018 during 8th Standard of School. Since i couldnt find any big reasons to change languages, i stuck to it and it has become my best language. I can now take part in competitive programming without the help of documentation because i remember the documentation for the necessary data structures, While taking help from VS code Autocomplet</p>
    </>,
  },
  {
    category: "C++",
    title: "A Great, Fast Alternative to Java ",
    src: "/C++.png",
    content: <p className="text-white font-extralight">I learnt C++ during Junior college, i found it just as easy to learn as java but later did not improve upon it as i couldnt find the syntax as easy to read as java syntax, I can write C++ code with some level of proficiency but it is nowhere near the level of Java, and rely on documentation to solve competitive programming related problems</p>,
  },
  {
    category: "C",
    title: "For those days when i dont want to use OOPS",
    src: "/C.png",
    content: <p className="text-white font-extralight">I learnt C during 1st and 3rd Semesters. While i do understand its use cases, i do not find it useful in the domains i find interesting such as full stack. However i may begin mastering it if i find its use cases later on</p>,
  },
 
  {
    category: "Python",
    title: "Mainly for Data Science and AI",
    src: "/python.png",
    content: <p className="text-white font-extralight">I have a shallow understanding of python as i only used it for Data Science and AI-ML, I do not have a good grasp of the syntax for advanced concepts but i can use it to some extent to code a low level model with the help of documentation</p>,
  },
  {
    category: "Javascript",
    title: "The standard language for Front and Backend Development",
    src: "/javascript.png",
    content: <p className="text-white font-extralight">I have a similiar level of proficiency of javascript as i do of C++ as i use it regularly for my projects that involve full stack. While i do lack understanding in some of its quirks, I am capable of using it to fetch APIs and run some simple frontend data processing</p>,
  },
  {
    category: "Golang",
    title: "Something new im still learning about",
    src: "/golang.png",
    content: <p className="text-white font-extralight">Just started learning Golang this year, as far as i've heard its a direct upgrade to C, which does intrigue me a lot</p>
  },
];
const data2 = [
  {
    category: "React",
    title: "My Go to for small Projects",
    src: "/react.png",
    content: <p className="text-white font-extralight">For most projects i stick to React as it is easy to use and i've gotten used to it</p>,
  },
  {
    category: "Next",
    title: "Something new i've begun learning after understanding react",
    src: "/next.jpg",
    content: <p className="text-white font-extralight">Next is a relatively new thing i've begun learning, i've started using it in projects with a more glamorous frontend, such as this portfolio, as it allows me to use a lot of UI libraries such as aceternity</p>,
  },
  {
    category: "MySQL",
    title: "My First DBMS Language",
    src: "/mysql.png",
    content: <p className="text-white font-extralight">I started learning MySQL through college in Semester 3, And used it in my first hackathon, Bit n Build 2024</p>,
  },
 
  {
    category: "PostgreSQL",
    title: "MySQL but better (For Full stack)",
    src: "/postgres.png",
    content: <p className="text-white font-extralight">Postgres is something i've started learning recently as i hear its the same syntax as MySQL and better for Full Stack</p>,
  },
  {
    category: "MongoDB",
    title: "My first NoSQL",
    src: "/mongo.png",
    content: <p className="text-white font-extralight">MongoDB is also something i've learnt newly and have been able to implement it in a few projects including Hackniche 3.0</p>,
  },
];
const data3 = [
  {
    category: "Code Ranger",
    title: "Website created for Frontend Odessey",
    src: "/coderanger.png",
    content: <><p className="text-white font-extralight">Code Ranger is my attempt to create a website that works like a coding platform such as Leetcode and Codeforces and add new and innovative features such as algorithm simulation</p>
    <button className="w-24 p-1 mt-5 h-10 bg-transparent text-sky-400 rounded-full border border-sky-400 hover-grow"><a href="https://github.com/Vedaant-Mahale/Frontend-Odyssey">Visit Repo</a></button></>,
  },
  {
    category: "Community Project",
    title: "My First Functional Website",
    src: "/community-project.png",
    content: <><p className="text-white font-extralight">Community Project created with the motive of showcasing our work in First Year Community Project</p>
    <button className="w-24 p-1 mt-5 h-10 bg-transparent text-sky-400 rounded-full border border-sky-400 hover-grow"><a href="https://github.com/Vedaant-Mahale/Group-10">Visit Repo</a></button></>,
  },
  {
    category: "DBMS Project",
    title: "My First Full Stack Project",
    src: "/dbms-project.png",
    content: <><p className="text-white font-extralight">This Project is a Website that makes it more convenient to manage stock by warehouse managers</p>
    <button className="w-24 p-1 mt-5 h-10 bg-transparent text-sky-400 rounded-full border border-sky-400 hover-grow"><a href="https://github.com/Vedaant-Mahale/dbms-project">Visit Repo</a></button></>,
  },
 
  {
    category: "Eco-Travel",
    title: "A Website Developed for Carbon Free Travelling",
    src: "/eco-travel.png",
    content: <><p className="text-white font-extralight">A website i and my team developed to help users find carbon free travelling for bit and build 2024 </p>
    <button className="w-24 p-1 mt-5 h-10 bg-transparent text-sky-400 rounded-full border border-sky-400 hover-grow"><a href="https://github.com/Vedaant-Mahale/Bit-N-Build-24-EcoTravel">Visit Repo</a></button></>,
  },
  {
    category: "CVD Predict",
    title: "A website to predict heart disease",
    src: "/cvd-predict.png",
    content: <><p className="text-white font-extralight">Me and my Group created this website with built in Machine Learning model that would take certain health parameters such as age,bmi, sugar levels, cholestrol levels etc and give an accurate prediction of how likely you were to get a cardiovascular disease</p>
    <button className="w-24 p-1 mt-5 h-10 bg-transparent text-sky-400 rounded-full border border-sky-400 hover-grow"><a href="https://github.com/Vedaant-Mahale/cvd-predict-model">Visit Repo</a></button></>,
  },
];
const cards = data.map((card, index) => (
  <Card key={card.src} card={card} index={index} />
));
const cards2 = data2.map((card, index) => (
  <Card key={card.src} card={card} index={index} />
));
const cards3 = data3.map((card, index) => (
  <Card key={card.src} card={card} index={index} />
));
export default function Home() {
  const [animate, setAnimate] = useState(false);
  const [hide, setHide] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); // Forces re-render
  const scrollTokno = () => {
    window.scrollTo({ top: 2.6 * window.innerHeight, behavior: "smooth" });
  };
  const scrollToach = () => {
    window.scrollTo({ top: 5.3 * window.innerHeight, behavior: "smooth" });
  };
  const scrollToabo = () => {
    window.scrollTo({ top: 1 * window.innerHeight, behavior: "smooth" });
  };
  const scrollTocon = () => {
    window.scrollTo({ top: 7 * window.innerHeight, behavior: "smooth" });
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
        <div className="h-[90vh] w-full bg-neutral-950 relative flex flex-col antialiased">
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
        <div className="w-full h-[10vh] bg-[rgba(0,0,0,0.7)] overflow-hidden">
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
      <div className="h-[700vh] w-full bg-[url('/bg.jpg')] bg-opacity-50">
        <div className="h-[700vh] w-full bg-[rgba(0,0,0,0.7)] ">
          <div className={`m-auto mb-5 w-1/3 h-20 border backdrop-blur-[2px] border-[rgba(0,177,255,1)] flex items-center justify-center rounded-3xl text-[rgb(0,177,255)] text-3xl ${orbi.className}`}>
            ABOUT ME
          </div>
          <div className="flex justify-between h-[130vh]">
            <div className="w-1/2 mt-20">
              <div className="flip-box flex m-auto">
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
                <div className="w-96 h-52 m-auto p-4 ml-60 text-sky-400 animated-border flex justify-center">
                <a
  href="https://www.linkedin.com/in/vedaant-mahale-a8a517291/"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer hover-grow w-30 h-30 bg-white rounded-full flex items-center justify-center overflow-hidden m-auto ml-10 mt-6"
><Image
                    src="/linkedin.png"
                    alt="Profile Icon"
                    width={48}
                    height={48}
                    className="object-cover w-[90%] h-[90%] rounded-full" />
                  </a>
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
              <div className="w-96 h-52 m-auto p-4 ml-60 text-sky-400 animated-border flex justify-center" >
                  <a className="cursor-pointer hover-grow w-30 h-30 bg-white rounded-full flex items-center justify-center overflow-hidden m-auto ml-10 mt-6" href="https://codeforces.com/profile/VSM_123"
  target="_blank"
  rel="noopener noreferrer"><Image
                    src="/codeforces.webp"
                    alt="Profile Icon"
                    width={48}
                    height={48}
                    className="object-cover w-[90%] h-[90%] rounded-full" />
                  </a>
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
                <a className="cursor-pointer hover-grow w-30 h-30 bg-white rounded-full flex items-center justify-center overflow-hidden m-auto ml-10 mt-6" href="https://github.com/Vedaant-Mahale"
  target="_blank"
  rel="noopener noreferrer"><Image
                    src="/github.png"
                    alt="Profile Icon"
                    width={48}
                    height={48}
                    className="object-cover w-[90%] h-[90%] rounded-full" />
                  </a>
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
                <a className="cursor-pointer hover-grow w-30 h-30 bg-white rounded-full flex items-center justify-center overflow-hidden m-auto ml-10 mt-6" href="https://leetcode.com/u/VedaantM/"
  target="_blank"
  rel="noopener noreferrer"><Image
                    src="/leetcode.webp"
                    alt="Profile Icon"
                    width={48}
                    height={48}
                    className="object-cover w-[90%] h-[90%] rounded-full" />
                  </a>
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
          <div className="w-full">
            <Carousel items={cards} />
          </div>
          <div className={`m-auto mb-5 w-1/3 h-20 border backdrop-blur-[2px] border-[rgba(0,177,255,1)] flex items-center justify-center rounded-3xl text-[rgb(0,177,255)] text-3xl ${orbi.className}`}>MY TECHSTACKS</div>
          <div className="w-full">
            <Carousel items={cards2} />
          </div>
          <div className={`m-auto mb-5 w-1/3 h-20 border backdrop-blur-[2px] border-[rgba(0,177,255,1)] flex items-center justify-center rounded-3xl text-[rgb(0,177,255)] text-3xl ${orbi.className}`}>MY PROJECTS</div>
          <div className="w-full">
            <Carousel items={cards3} />
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
          <div className="w-full flex flex-col">
            <input className="mt-10 w-1/3 h-10 p-5 backdrop-blur-xs rounded-full bg-[rgba(10,10,10,0.5)] m-auto text-sky-400 outline-none border border-sky-400" placeholder="Email Address"></input>
            <input className="mt-10 w-1/3 h-10 p-5 backdrop-blur-xs rounded-full bg-[rgba(10,10,10,0.5)] m-auto text-sky-400 outline-none border border-sky-400" placeholder="Subject"></input>
            <textarea
              className="mt-10 w-1/3 h-96 p-5 backdrop-blur-xs rounded-xl bg-[rgba(10,10,10,0.5)] m-auto text-sky-400 outline-none border border-sky-400 text-left align-top resize-none"
              placeholder="Content"
            />
            <button className="mt-10 w-40 h-10 m-auto rounded-full backdrop-blur-xs bg-[rgba(10,10,10,0.5)] border-sky-400 border text-sky-400">Send</button>
            <div className="w-1/3 m-auto mt-5 flex justify-between text-sky-400">
            <p>Email: vedaant.mahale@gmail.com</p>
            <p>Phone: 9930195398</p>
            </div>
          </div>
        </div>
      </div>
      <div className="z-20 fixed right-10 top-1/2 transform -translate-y-1/2 w-20 h-1/2 bg-[rgba(50,50,50,0.1)] rounded-full backdrop-blur-[2px] border-1 border-sky-400 flex flex-col">
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
