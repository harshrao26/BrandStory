import React from 'react'
import Box from './Box';
const Personalize = () => {

   const boxData = [
     {
       title: "eCommerce",
       description:
         "Automated chatbots initiate conversations and help gather insights into customer preferences that help engage them at critical points in the shopping journey.\n\nFoster customer loyalty and repeat business interactions on their preferred channels.",
       learnMoreLink: "#",
     },
     {
       title: "Fin-Tech",
       description:
         "Enhance financial transactions and deliver personalized experiences by providing real-time notifications for withdrawals, account balances, and fraud alerts using two-factor authentication and customizable APIs.\n\nAdditionally, empower users with insights into their financial behaviors, promoting transparency in security matters and enabling them to make well-informed decisions.",
       learnMoreLink: "#",
     },
     {
       title: "Education",
       description:
         "Virtual assistants provide immediate help and answers to student queries, revolutionizing the educational experience.\n\nEngage students from diverse backgrounds actively, enrich their learning performance effectively, and assist schools in informing parents about the latest events, students' progress, and safety practices through a more connected, informed, and engaging service.",
       learnMoreLink: "#",
     },
     {
       title: "Healthcare",
       description:
         "Live chat support facilitates patient interactions, providing tailored health information, appointment reminders, and wellness tips.\n\nThe optimized medical process enhances patients' experiences and improves disease management.",
       learnMoreLink: "#",
     },
   ];
  return (
    <div className="px-10 pt-32 ">
      <div className="">
        <h1 className="text-4xl font-bold text-zinc-800  capitalize w-full text-center">
          Personalize Communication Across{" "}
          <span className="text-[#ff4d3d] relative  ">
            All Sectors
            {/* <img src={herocom} alt="" className="absolute -top-5 scale-[100]"/> */}
          </span>
          <p className="text-base text-zinc-600 font-normal pt-4 px-80 ">
            As every industry is customer-centric, we empower your business to
            streamline workflow and tailor solutions that foster strong user
            engagement and adoption.
          </p>
        </h1>
      </div>

      <div>
        <div className="p-10  grid grid-cols-1 sm:grid-cols-2 gap-6 px-32">
          {boxData.map((box, index) => (
            <Box
              key={index}
              title={box.title}
              description={box.description}
              learnMoreLink={box.learnMoreLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Personalize