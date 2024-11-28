import React from "react";
import reactic from "../assets/react.svg";
import heromobile from "../assets/hero.png";
import herocom from "../assets/herocom.svg";
import arrow from "../assets/arrow.svg";

const Hero = () => {
  return (
    <div className="pt-36 h-screen">
      <div
        className="flex items-center justify-center  bg-cover bg-center px-16 gap-8  "
        style={{ backgroundImage: `url(${reactic})` }}
      >
        <div className="w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-zinc-800  capitalize">
            Built For Businesses Where A unified CPaaS Dominion Elevates the
            Synergy of <br />
            <span className="text-[#ff4d3d] relative border-b-4 border-[#5b6bd5] ">
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
            <button className="bg-[#5b6bd5] inline-block text-white px-6 py-2 rounded-full shadow-md hover:bg-[#5b6bd5] transition-all ease-in-out transform hover:scale-105">
              CTA 1
            </button>
            <button className=" text-[#ff4d3d] px-6 py-2  mx-2 border-b-2 border-[#ff4d3d]  hover:text-[#ff5a4b] transition-all ease-in-out hover:scale-105">
              CTA 2
            </button>
          </div>
          <div className="w-full flex justify-center">
            <img src={arrow} alt="" className="w-40" />
          </div>
        </div>
        <div className="w-1/2 -mt-10  ">
          <img src={heromobile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
