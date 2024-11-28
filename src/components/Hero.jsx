import React, { useState } from "react";
import reactic from "../assets/react.svg";
import heromobile from "../assets/hero1.png";
import heromobile2 from "../assets/hero2.png";
import arrow from "../assets/arrow.svg";

const Hero = () => {
  // State to track which image to display
  const [activeImage, setActiveImage] = useState("heromobile");
  const [activeButton, setActiveButton] = useState("cta1"); // Track active button

  return (
    <div className="pt-28 h-screen">
      <div
        className="flex items-center justify-center bg-cover bg-center px-16 gap-8"
        style={{ backgroundImage: `url(${reactic})` }}
      >
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-zinc-800 capitalize">
            Built For Businesses Where A unified CPaaS Dominion Elevates the
            Synergy of <br />
            <span className="text-[#ff4d3d] relative border-b-4 border-[#5b6bd5]">
              Communication
              {/* <img src={herocom} alt="" className="absolute -top-5 scale-[100]"/> */}
            </span>
          </h1>
          <p className="text-xl text-zinc-600">
            Harness our AI-powered CPaaS platform for automated, personalized
            customer communication, driving enhanced engagement and business
            success.
          </p>

          <div>
            {/* CTA Buttons */}
            <button
              onClick={() => {
                setActiveImage("heromobile");
                setActiveButton("cta1");
              }}
              className={`${
                activeButton === "cta1"
                  ? "bg-[#5b6bd5] text-white rounded-2xl"
                  : "bg-transparent text-zinc-800 border-b-2 border-[#ff4d3d]"
              } inline-block px-6 py-2  transition-all ease-in-out transform hover:scale-105`}
            >
              CTA 1
            </button>
            <button
              onClick={() => {
                setActiveImage("heromobile2");
                setActiveButton("cta2");
              }}
              className={`${
                activeButton === "cta2"
                  ? "bg-[#5b6bd5] text-white rounded-2xl"
                  : "bg-transparent text-[#ff4d3d] border-b-2 border-[#ff4d3d]"
              } px-6 py-2 mx-2 transition-all ease-in-out transform hover:scale-105`}
            >
              CTA 2
            </button>
          </div>
          <div className="w-full flex justify-center">
            <img src={arrow} alt="Arrow Icon" className="w-40" />
          </div>
        </div>

        {/* Dynamic Image Section */}
        <div className="w-1/2 -mt-10">
          {activeImage === "heromobile" ? (
            <img src={heromobile} alt="Hero Mobile 1" />
          ) : (
            <img src={heromobile2} alt="Hero Mobile 2" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
