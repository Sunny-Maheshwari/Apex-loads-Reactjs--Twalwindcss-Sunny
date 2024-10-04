import React from "react";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import Truck1 from "../assets/truck1.png";
import Truck2 from "../assets/truck2.png";
import Truck3 from "../assets/truck3.png";

const creators = [
  {
    name: "Freight Forwarders/Brokers:",
    img: `${Truck1}`,
    description:
      "At Apex Loads, we understand the critical role of freight forwarders and brokers in global logistics.",
  },
  {
    name: "Transporters:",
    img: `${Truck2}`,
    description:
      "Join the Apex Loads network and gain access to a wide range of benefits designed to support your transportation business. We offer:",
  },
  {
    name: "Full-Service Brokers:",
    img: `${Truck3}`,
    description:
      "Apex Loads provides full-service brokerage solutions to enhance your business capabilities. Benefit from:",
  },
  {
    name: "Full-Service Brokers:",
    img: `${Truck3}`,
    description:
      "Apex Loads provides full-service brokerage solutions to enhance your business capabilities. Benefit from:",
  },
  // Add more creators as needed
];

const Slider = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20">
      <div className="container mx-auto py-8 sm:py-12 space-y-8 sm:space-y-12">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-center sm:text-left">
            Services We <span className="text-red-600">Offer</span>
          </h3>
          <button className="hover:bg-red-400 cursor-pointer bg-[#D91E27] text-white rounded-full btn-sm w-[120px] sm:w-[140px]">
            Know more
          </button>
        </div>
        <div className="carousel w-full flex overflow-x-auto space-x-4 sm:space-x-6 snap-x snap-mandatory pb-4">
          {creators.map((creator, index) => (
            <div key={index} className="card bg-base-100 w-[280px] sm:w-[320px] md:w-[360px] lg:w-96 shadow-xl flex-shrink-0 snap-center">
              <figure className="px-4 pt-4">
                <img src={creator.img} alt={creator.name} className="rounded-xl" />
              </figure>
              <div className="card-body px-4 py-5">
                <h2 className="card-title text-lg sm:text-xl">{creator.name}</h2>
                <p className="text-sm sm:text-base">{creator.description}</p>
                <div className="card-actions justify-start mt-4">
                  <button className="hover:bg-red-400 cursor-pointer bg-[#D91E27] text-white rounded-full btn-sm w-[100px] sm:w-[120px]">
                    Know more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;