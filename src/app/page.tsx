"use client";
import Image from "next/image";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";

export default function Home() {
  return (
      <div className="h-screen w-full bg-neutral-950 relative flex flex-col antialiased">
        <div className="mx-auto mt-10 p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-purple-800 to-sky-600 text-center font-sans font-bold">
            Vedaant Mahale
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to My Portfolio, I am Vedaant Mahale.
          </p>
          <input
            type="text"
            placeholder="vedaant.mahale@gmail.com"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
        <BackgroundBeams />
      </div>
  );
}
