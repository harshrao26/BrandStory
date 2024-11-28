import React from "react";
import sol from "../assets/sol11.png";
import sol2 from "../assets/sol2.png";
import sol3 from "../assets/sol3.png";
import solbanner from "../assets/solbanner.svg";

const Solution = () => {
  return (
    <div className="relative my-8">
      <div
        className="relative z-20"
        // style={{ backgroundImage: `url(${})` }}
      >
        <h2 className="w-full text-center text-4xl font-bold py-4">Solution</h2>
        <div className="flex flex-wap justify-center px-6 ">
          <img
            src={sol}
            alt="Solution Image 1"
            className="w-full sm:w-1/3  hover:scale-105 transition-transform"
          />
          <img
            src={sol2}
            alt="Solution Image 2"
            className="w-full sm:w-1/3  hover:scale-105 transition-transform"
          />
          <img
            src={sol3}
            alt="Solution Image 3"
            className="w-full sm:w-1/3  hover:scale-105 transition-transform"
          />
        </div>
      </div>
      <div
        className="absolute  bg-cover bg-center h-96 w-full rounded-lg bottom-0 "
        style={{ backgroundImage: `url(${solbanner})` }}
      >
        {/* <img src={solbanner} alt="" /> */}
        
      </div>
    </div>
  );
};

export default Solution;
