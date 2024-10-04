import React from "react";
import img1 from "../assets/Vector 9.png";
import img2 from "../assets/Vector 12.png";
import img4 from "../assets/Vector 10.png";
import { BsArrowRight } from "react-icons/bs";

const HomeSection = () => {
  return (
    <div className="relative bg-[url('/src/assets/hero-bg.jpg')] bg-cover bg-center h-screen w-full text-white">
      <div className="relative w-full flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-20">
        {/* Left Section: Decorative Images */}
        <div className="hidden md:block w-1/4 relative right-[100px] top-[-150px]">
          <img
            src={img1}
            alt="Icon 1"
            className="absolute top-[-90px] right-[-20px] w-[200px] md:w-[371px] opacity-90 z-10"
          />
          <img
            src={img2}
            alt="Icon 2"
            className="absolute top-[190px] right-[95px] w-[120px] md:w-[162px]"
          />
          <img
            src={img4}
            alt="Icon 4"
            className="absolute bottom-30 left-[20px] w-[300px] md:w-[404px]"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full md:w-3/4 flex flex-col items-center justify-center text-center">
          <div className="w-full">
            <h1 className="text-6xl md:text-6xl lg:text-8xl font-extrabold uppercase">
              Reliable
            </h1>
            <h1 className="text-6xl md:text-6xl lg:text-8xl font-extrabold uppercase">
              Transport
            </h1>
          </div>
          <div className="w-full mt-2">
            <p className="text-3
            xl md:text-4xl lg:text-5xl font-extrabold uppercase">
              Solutions for
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase">
              Your Freight
            </p>
          </div>
          <button className="flex justify-between items-center mt-6 px-4 py-2 font-extrabold bg-transparent border border-gray-100 text-white text-sm md:text-md rounded-full hover:bg-gray-700">
            Book Your Free Trial{" "}
            <BsArrowRight className="text-white ml-2 self-center" size={"25px"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
