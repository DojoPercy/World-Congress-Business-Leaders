import React from "react";
import { RiAwardLine, RiGlobalLine } from "react-icons/ri";

const CongressComponents = () => {
  return (
    <div className=" bg-subColor font-montserrat">
      <div className="px-1 lg:px-20 py-5 text-goldTheme">
        <h1 className="text-2xl  font-semibold text-center">
          Congress Components
        </h1>
        <div className="lg:grid lg:grid-cols-3">
          <div className="flex flex-col py-5 mx-5 px-2 bg-white my-5 ">
            <div>
              <h2 className="text-lg text-black font-bold pb-3 flex items-center"> <RiGlobalLine className="text-2xl pr-1 "/>Conference </h2>
              <div>
                <div className="title pl-5 flex text-sm ">
                  <h3 className="text-goldTheme ">Theme:</h3>
                  <span className="text-black font-semibold pl-1 ">
                    {" "}
                    Harnessing AI for Leadership Excellence
                  </span>
                </div>
                <ul className="pl-5 flex-col flex text-sm">
                  <li className="py-3">
                    <div className="flex justify-between items-start w-auto">
                      <h3 className="flex font-semibold ">
                        Keynote <span className="pl-1">Speakers:</span>
                      </h3>
                      <div className=" text-black  pl-1 ">
                        Renowned global business leaders, industry experts, and
                        thought leaders.
                      </div>
                    </div>
                  </li>
                  <li  className="py-3">
                    <div className="flex ">
                      <h3 className="flex  font-semibold">
                        Panel <span className="pl-1">Discussions:</span>
                      </h3>
                      <div className=" text-black  pl-1 ">
                        Covering topics such as digital transformation,
                        sustainable business practices, leadership in the 21st
                        century, and the future of work.
                      </div>
                    </div>
                  </li>
                  <li className="py-3">
                    <div className="flex ">
                      <h3 className="flex font-semibold  ">Workshop: </h3>
                      <div className=" text-black  pl-1 ">
                        Interactive sessions focusing on practical solutions and
                        strategies for business growth and innovation.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-10 mx-5 px-2 bg-white my-5">
            <div>
              <h2 className="text-lg text-black font-bold pb-3 flex items-center"> <RiGlobalLine className="text-2xl pr-1 "/>Boardroom Masterclass:</h2>
              <div>
                
                <ul className="pl-5 flex-col flex text-sm ">
                
                  <li  className="py-3">
                    <div className="flex ">
                      <h3 className="flex justify-center font-semibold">
                        Expert <span className="pl-1">Led </span>
                        <span className="pl-1">Sessions:</span>
                      </h3>
                      <div className=" text-black  pl-1 text-sm ">
                      In-depth masterclasses led by industry pioneers and experts for board members and board chairs.
                      </div>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-5  px-2 bg-white my-5 mx-5">
            <div>
              <h2 className="text-lg text-black font-bold pb-3  flex items-center"> <RiAwardLine className="text-2xl pr-1 "/>Awards Ceremony</h2>
              <div>
                
                <ul className="pl-5 flex-col flex text-sm">
                  <li className="py-3">
                    <div className="flex justify-between items-start w-auto">
                      <h3 className="flex text-sm font-semibold">
                      Categories: 
                      </h3>
                      <div className=" text-black pl-1 text-sm ">
                      Recognizing excellence in leadership, innovation, sustainability, and corporate social responsibility.
                      </div>
                    </div>
                  </li>
                  <li  className="py-3">
                    <div className="flex ">
                      <h3 className="flex flex-col font-semibold ">
                      Nominees: 
                      </h3>
                      <div className=" text-black  pl-1 ">
                        <ul className="pl-5 list-disc">
                            <li>Top-performing companies</li>
                            <li>Outstanding leaders</li>
                            <li>Innovators from various industries</li>
                        </ul>
                      
                      </div>
                    </div>
                  </li>
                  <li className="py-3">
                    <div className="flex ">
                      <h3 className="flex font-semibold ">Gala <span className="pl-1"> Dinner:</span> </h3>
                      <div className=" text-black  pl-1 ">
                      A glamorous evening celebrating the achievements of award recipients, featuring live entertainment and networking opportunities.n.
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongressComponents;
