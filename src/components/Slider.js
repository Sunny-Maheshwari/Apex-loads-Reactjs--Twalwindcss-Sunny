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
    <div className="h-screen bg-black flex items-center justify-center p-20">
      <div className="container mx-auto py-12 space-y-20">
        <div>
          <h3 className="text-6xl font-bold text-white text-left">
            Services We <span class="text-red-600">Offer</span>
          </h3>
        </div>
        <div className="carousel w-full flex overflow-x-auto space-x-6 snap-x snap-mandatory">
          {creators.map((creator, index) => (
            <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src={creator.img}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{creator.name}</h2>
              <p>{creator.description}</p>
              <div className="card-actions justify-start items-center">
                <button className="rounded-full bg-[#D91E27] text-white w-[100px] text-center">Know more</button>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div className="flex items-center justify-center flex-row space-x-5 mt-10">
          <a
            href="#contact"
            className="btn w-48 rounded-full border-none font-bold bg-[#343434] text-white hover:bg-white hover:text-black focus:outline-none"
          >
            View All →
          </a>
          <a
            href="#contact"
            className="btn w-48  hover:bg-black font-bold border border-[#343434] hover:text-gray-400 rounded-full bg-black text-white focus:outline-none"
          >
            Skip Section
          </a>
        </div>
      </div>
    </div>
  );
};

export default Slider;
