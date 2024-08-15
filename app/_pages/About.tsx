import React from "react";

const About = () => {
  return (
    <div className="px-1 lg:px-20 text-goldTheme py-10">
        <h1 className="text-3xl font-semibold text-center pb-10 font-montserrat">WORLD BUSINESS LEADERS CONGRESS 2024</h1>
      <div className="flex flex-col space-y-8 text-center items-center justify-center">
       <span className="font-semibold ">
       Welcome to the Prestigious Gathering of Business Leaders across
       industries.</span> 
       <span>
       The World Business Leaders Congress 2024 is a prestigious
        event designed to bring together visionary leaders, industry experts,
        and influential decision-makers from across the globe. This event aims
        to foster dialogue, innovation, and collaboration among the world’s
        leading business minds. Held in the vibrant and dynamic city of Dubai,
        the Congress promises to be a hub of knowledge, inspiration, and
        networking opportunities.
       </span>
       <span className=" w-[18rem] py-2 rounded-lg shadow-sm bg-grayColor"> 
        APPLY NOW
       </span>
      </div>
    </div>
  );
};

export default About;
