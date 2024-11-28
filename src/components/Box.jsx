import React from "react";

const Box = ({ title, description, learnMoreLink }) => {
  return (
    <div className="border rounded-lg shadow-md  bg-white  overflow-hidden relative transition-all ease-in-out transform hover:scale-105">
      <div className="bg-[#5b6bd5] text-white px-5 py-1 inline-block mb-">
        {title}
      </div>
      <p className="text-gray-500 mb-20 p-5">{description}</p>
      <a
        href={learnMoreLink}
        className="text-red-500 font-semibold hover:underline p-5 absolute bottom-0 underline border-red-500 "
      >
        Learn More
      </a>
    </div>
  );
};

export default Box;
