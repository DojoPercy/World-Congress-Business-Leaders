"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { GiBrain } from "react-icons/gi";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CongressObjectives = () => {
  const info = [
    {
      title: "Knowledge Sharing",
      description:
        "To provide a platform for sharing cutting-edge knowledge and insights on global business trends and practices.",
        icon: "GiBrain",
    },
    {
        "title": "Networking",
        "description": "To facilitate connections and collaborations among business leaders, innovators, and decision-makers.",
        "icon": "FaNetworkWired"
    },
    {
        "title": "Recognition",
        "description": "To celebrate and recognize outstanding achievements and contributions to the global business community.",
        "icon": "FaAward"
    },
    {
        "title": "Inspiration",
        "description": "To inspire the next generation of leaders with success stories, innovative ideas, and visionary strategies.",
        "icon": "FaLightbulb"
    }
  ];

  return (
    <div className="text-goldTheme font-montserrat">
      <h1 className="text-2xl font-semibold py-5 text-center">
        Congress Components
      </h1>
      <div className="p-5">
        <>
          <Swiper navigation={true} modules={[Navigation]} className="">

            {
                info.map((item, index) => {
                    const IconComponent = item.icon;
                   return (<SwiperSlide className="">
                        <div key={index} className="flex justify-center w-full border border-grayColor rounded-lg p-10  ">
                          <div className="flex flex-col justify-center items-center">
                            <IconComponent className="text-5xl text-center" />
                            <h3 className="text-2xl font-semibold ">{item.title}</h3>
                            <span className="font-[400] text-[16px] pt-5 text-center">
                              {item.description}
                            </span>
                          </div>
                        </div>
                      </SwiperSlide>)})
                
            }
           
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default CongressObjectives;
