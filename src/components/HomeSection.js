import React from "react";
import img1 from "../assets/Vector 9.png";
import img2 from "../assets/Vector 12.png";
import img4 from "../assets/Vector 10.png";
import { BsArrowRight } from "react-icons/bs";

const HomeSection = () => {
  return (
    <div className="relative bg-[url('/src/assets/hero-bg.jpg')] bg-cover bg-center min-h-screen w-full text-white flex items-center justify-center">
      <div className="relative w-full flex flex-col items-center justify-center px-4 py-8 md:py-0 md:px-20">
        {/* Left Section: Decorative Images */}
        <div className="hidden md:block w-1/4 relative right-[640px] bottom-[-20px]">
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

        {/* Text Content */}
        <div className="w-full md:w-3/4 flex flex-col items-center justify-center text-center">
          <h1 class="lg:text-[118px] text-5xl font-bold z-10 text-start ">RELIABLE <br /><span>TRANSPORT</span></h1>
          <p class="lg:text-[52px] text-[24px] font-medium mt-4 z-10 md:ml-48 text-start">SOLUTION FOR <br /> YOUR FREIGHT</p>
          {/* <button className="flex justify-between items-center mt-6 px-4 py-2 font-extrabold bg-transparent border border-gray-100 text-white text-sm md:text-md rounded-full hover:bg-gray-700">
            Book Your Free Trial{" "}
            <BsArrowRight className="text-white ml-2 self-center" size={"25px"} />
          </button> */}
          <a href="#" class="mt-8 inline-block border-2 text-white py-2 px-6 rounded-full mt-4 flex gap-3 z-10 md:ml-48">Book Your Free Trial             <BsArrowRight className="text-white ml-2 self-center" size={"25px"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;