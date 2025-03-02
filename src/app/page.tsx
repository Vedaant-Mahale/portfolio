"use client";
import React, { useState, useEffect } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { Oxanium } from "next/font/google";

const inter = Oxanium({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [animate, setAnimate] = useState(false);
  const [hide, setHide] = useState(false);
  const [animationKey, setAnimationKey] = useState(0); // Forces re-render

  useEffect(() => {
    const startAnimation = setTimeout(() => {
      setAnimate(true);
      setAnimationKey((prev) => prev + 1); // Force re-render
    }, 2000); // Delay before animation starts

    return () => clearTimeout(startAnimation);
  }, []);

  return (
    <>
      {/* 🔥 Force re-rendering with key */}
      {!hide && (
        <div
          key={animationKey} // Forces React to recognize animation
          className={`fixed inset-0 bg-neutral-950 z-50 flex items-center justify-center transition-all ${
            animate ? "slide-out" : ""
          }`}
          onAnimationEnd={() => setHide(true)} // Only removes after animation finishes
        >
          <div className="spinner"></div>
        </div>
      )}

      {/* Main Content */}
      <div className="h-screen w-screen bg-neutral-950 relative flex flex-col antialiased">
        <div className="h-1/4 w-screen">
          <BackgroundBeams />
        </div>
        <div className="mx-auto mt-24 p-10 rounded-2xl backdrop-blur-[2px] bg-[rgba(50,50,50,0.1)] border-1 border-sky-400">
          <h1 className={`md:text-7xl text-sky-400 text-center ${inter.className}`}>
            WELCOME
          </h1>
        </div>
      </div>

      {/* Right-Side Panel */}
      <div className="fixed right-10 top-1/2 transform -translate-y-1/2 w-20 h-1/2 bg-[rgba(50,50,50,0.1)] rounded-full backdrop-blur-[2px] border-1 border-sky-400"></div>
    </>
  );
}
