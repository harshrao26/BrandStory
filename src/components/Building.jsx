import React from "react";
import building from "../assets/building.jpg";
import buildingiso from "../assets/buildingiso.png";
import buildingcircle from "../assets/buildingcircle.png";
const Building = () => {
  return (
    <div className=" h-screen w-full  bg-cover bg-center py-10">
      <div className=" " style={{ backgroundImage: `url(${building})` }}>
        <div className="flex w-full items-center justify-evenly py-16 relative">
          <h1 className="text-4xl font-bold text-zinc-800  capitalize">
            Building Trust through <br />
            <span className="text-[#ff4d3d] relative  ">
              Credentials
              {/* <img src={herocom} alt="" className="absolute -top-5 scale-[100]"/> */}
            </span>
            <p className="text-base text-zinc-600 font-normal pt-4 pr-20 ">
              Explore our products that seamlessly integrate <br /> into your
              existing solutions, delivering exemplary.
            </p>
            <img
              src={buildingcircle}
              alt=""
              className="absolute h-10 top-10 left-32"
            />
          </h1>

          <img src={buildingiso} alt="" className="h-32" />

          <button className="bg-[#5b6bd5] text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Know More
          </button>
        </div>
        <div className="flex items-center justify-around py-32  t-10">
          <div className="flex flex-col items-center text-center mx-20 ">
            <h2 className="text-4xl text-[#ff4d3d] font-semibold ">40 Million</h2>
            <p>Unique customer connections</p>
          </div>
          <div className="flex flex-col items-center text-center mx-20 ">
            <h2 className="text-4xl text-[#ff4d3d] font-semibold ">800+</h2>
            <p>Brands</p>
          </div>
          <div className="flex flex-col items-center text-center mx-20 ">
            <h2 className="text-4xl text-[#ff4d3d] font-semibold ">100%</h2>
            <p>Brandts retention</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Building;
