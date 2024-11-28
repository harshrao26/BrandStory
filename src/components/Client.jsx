import React, { useState } from "react";

const ClientWins = () => {
  const data = {
    "connect-and-heal": {
      title: "Connect and Heal",
      leftContent:
        "We wanted to bring about a change in our customer’s health and how they can keep track of their health. With Equence’s help, we were able to build a patient-centric work model that helped us and our customers have a win-win situation.",
      rightContent: {
        headline: "Increased Patient Engagement Via WhatsApp ChatBot",
        details:
          "Connect and Heal implemented Equence’s WhatsApp ChatBot, which transformed the way patients approach healthcare services. Through this, remote health monitoring and real-time tracking and reminding of patients’ health data witnessed remarkable user engagement and gained a competitive edge in the industry.",
        results: [
          { label: "no of real-time data generated", value: "-- --" },
          { label: "of reminders were achieved", value: "-- --" },
          { label: "increase in patient engagement", value: "40%" },
        ],
      },
    },
    mahindra: {
      title: "Mahindra",
      leftContent:
        "Mahindra worked with Equence to modernize its customer engagement strategies, focusing on automation and AI-based solutions to ensure better service quality and retention.",
      rightContent: {
        headline: "Enhanced Customer Retention",
        details:
          "Mahindra deployed automated systems with Equence's assistance, boosting customer satisfaction through targeted campaigns and real-time feedback mechanisms.",
        results: [
          { label: "no of campaigns run", value: "100+" },
          { label: "customer feedback", value: "90%" },
          { label: "increase in retention", value: "30%" },
        ],
      },
    },
    "icici-bank": {
      title: "ICICI Bank",
      leftContent:
        "ICICI Bank partnered with Equence to integrate advanced chatbot solutions into their customer support, streamlining processes and improving response times.",
      rightContent: {
        headline: "Streamlined Banking Experience",
        details:
          "ICICI Bank leveraged AI-driven solutions to offer personalized financial advice and automated query resolution for millions of users.",
        results: [
          { label: "reduction in query time", value: "50%" },
          { label: "automated responses", value: "1M+" },
          { label: "increase in efficiency", value: "45%" },
        ],
      },
    },
  };

  const [activeClient, setActiveClient] = useState("connect-and-heal");

  const clientData = data[activeClient];

  return (
    <div className="p-6  min-h-screen px-12">
      <h1 className="text-4xl font-bold w-full text-center">
        Client <span className="text-[#ff4d3d]">Wins</span>
      </h1>
      {/* Tabs */}
      <div className="w-full items-center justify-center flex space-x-4 my-6">
        {Object.keys(data).map((key) => (
          <button
            key={key}
            className={`px-4 py-2 rounded-lg ${
              activeClient === key
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => setActiveClient(key)}
          >
            {data[key].title}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="bg-white  p-6 ">
        <div className="flex flex-col md:flex-row justify-between gap-5">
          {/* Left Content */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {clientData.title}
            </h2>
            <p className="text-gray-700">{clientData.leftContent}</p>
          </div>

          {/* Right Content */}
          <div className="md:w-3/4 shadow rounded-lg px-4 py-6">
            <h3 className="text-4xl font-medium text-gray-800 mb-4">
              {clientData.rightContent.headline}
            </h3>
            <p className="text-gray-700 mb-6">
              {clientData.rightContent.details}
            </p>

            {/* Results Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {clientData.rightContent.results.map((result, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4  rounded-lg shadow"
                >
                  <span className="text-3xl font-bold text-red-500 mb-2">
                    {result.value}
                  </span>
                  <p className="text-gray-600">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientWins;
