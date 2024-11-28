import React, { useState } from "react";
import probarrow from "../assets/probarrow.png";
import probcircle from "../assets/probcircle.png";
import dummyImage1 from "../assets/power.png";
import dummyImage2 from "../assets/power2.png";
import dummyImage3 from "../assets/power3.png";
import dummyImage4 from "../assets/power4.png";
import dummyImage5 from "../assets/power5.png";

const Power = () => {
  const [currentContent, setCurrentContent] = useState({
    title: "SMS",
    description:
      "Deliver timely updates with personalized messages to ensure customer engagement.",
    image: dummyImage1,
  });

  const [activeButton, setActiveButton] = useState("Communication"); // Track the active button

  const handleButtonClick = (channel) => {
    const contentMap = {
      Communication: {
        title: "Communication Channels",
        description:
          "Deliver timely updates with personalized messages to ensure customer engagement.",
        image: dummyImage1,
      },
      Two: {
        title: "Two Factor authentication API",
        description:
          "Deliver timely updates with personalized messages to ensure customer engagement.",
        image: dummyImage2,
      },
      Omni: {
        title: "Omni-channel Programable API",
        description:
          "Deliver timely updates with personalized messages to ensure customer engagement.",
        image: dummyImage3,
      },
      EMD: {
        title: "EMD - Equence Message Dispatcher",
        description:
          "Deliver timely updates with personalized messages to ensure customer engagement.",
        image: dummyImage4,
      },
      EMC: {
        title: "ECM - Equence Campaign Manager",
        description:
          "Tap into a channel that initiates human-like conversations and helps educate users about products and services.",
        image: dummyImage5,
      },
      Short: {
        title: "Short & Long Code for 2-way Messaging",
        description:
          "Send detailed and structured communication to customers for marketing or transactional purposes.",
        image: dummyImage3,
      },
    };

    setCurrentContent(contentMap[channel]);
    setActiveButton(channel); // Update the active button
  };

  return (
    <div className="py-8 px-8 relative">
      <div className="relative">
        <h1 className="text-4xl font-bold w-full text-center">
          Power up Your Business With{" "}
          <span className="text-[#ff4d3d]">One Comprehensive Suite</span>
        </h1>
        <p className="text-base text-zinc-600 text-center px-64 pt-4">
          Explore our products that seamlessly integrate into your existing
          solutions, delivering exemplary performance across multiple platforms
          to bridge the gap between you and your customers with personalized
          conversation and successful engagement.
        </p>
        <img
          src={probcircle}
          alt=""
          className="absolute h-10 left-20 bottom-8 "
        />
        <img src={probarrow} alt="" className="absolute right-0 -top-10 h-32" />
      </div>

      <div className="flex gap-10 justify-between mt-5">
        {/* Sidebar */}
        <div className="w-1/3 mt-5 text-base">
          <ul className="space-y-10 p-4 text-zinc-700 font-medium ">
            {[
              { id: "Communication", label: "Communication Channels" },
              { id: "Two", label: "Two Factor authentication API" },
              { id: "Omni", label: "Omni-channel Programable API" },
              { id: "EMD", label: "EMD - Equence Message Dispatcher" },
              { id: "EMC", label: "ECM - Equence Campaign Manager" },
              { id: "Short", label: "Short & Long Code for 2-way Messaging" },
            ].map((button) => (
              <li key={button.id}>
                <button
                  className={`w-full text-left px-6 py-2  rounded-2xl transition ${
                    activeButton === button.id
                      ? "bg-[#5b6bd5] text-white"
                      : "hover:bg-[#5b6bd5] hover:text-white"
                  }`}
                  onClick={() => handleButtonClick(button.id)}
                >
                  {button.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4">
          <img
            src={currentContent.image}
            alt={currentContent.title}
            className="h-full rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Power;
