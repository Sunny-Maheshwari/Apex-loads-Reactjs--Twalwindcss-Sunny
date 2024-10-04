import React from "react";
import img3 from "../assets/truck.png";
import img2 from "../assets/Vector 12.png";
import img4 from "../assets/Vector 10.png";
import img5 from "../assets/pic.png";
import Slider from "./Slider";

const About = () => {
  return (
    <div className="relative bg-[url('/src/assets/mapbg.png')] bg-cover bg-center min-h-screen">
      <div className="flex flex-col lg:flex-row bg-transparent text-white w-full justify-center items-center py-16 lg:py-24">
        {/* Text Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-red-600">us</span>
          </h2>
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mt-4 leading-relaxed">
            Apexloads.com is a premier digital platform designed to
            revolutionize the logistics and transportation industry,
            <span className="block mt-4 text-sm sm:text-base md:text-lg text-gray-300">
              with a special focus on the African market. We aim to bridge the
              gap between shippers and truck owners, providing a seamless and
              efficient solution to manage freight loads.
            </span>
          </h1>

          <button className="flex justify-between items-center mt-6 px-4 py-2 font-bold bg-transparent border border-gray-100 text-white text-sm sm:text-base rounded-full hover:bg-gray-700 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0 overflow-hidden">
          {/* Truck image */}
          <div className="relative w-full overflow-hidden left-[300px]">
            <img 
              src={img3} 
              alt="Truck" 
              className="w-1/2 object-cover mx-auto"
            />
            {/* Overlay images */}
            <div className="">
            <img
              src={img4}
              alt="Icon 4"
              className="absolute bottom-[47%] left-[47%] w-1/4 h-auto"
            />
            <img
              src={img2}
              alt="Icon 2"
              className="absolute top-[37%] left-[48%] w-1/6 h-auto"
            />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly items-center p-8 lg:p-16 w-full bg-black">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={img5}
            alt="Man"
            className="rounded-md shadow-lg w-full max-w-md h-auto object-cover mx-auto"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Why Choose <span className="text-red-600">Us</span>
          </h2>

          <div className="relative flex flex-col space-y-8">
            <div className="w-[2px] bg-white h-full absolute left-4 top-0 hidden sm:block"></div>

            <div className="relative pl-8 sm:pl-12 space-y-8">
              <div className="bg-red-600 text-white p-4 rounded-md shadow-lg">
                <h3 className="font-bold text-xl mb-2">
                  Proven Track Record of Excellence
                </h3>
                <p className="text-sm sm:text-base">
                  At Apex Loads, we pride ourselves on our proven track record
                  of excellence in the logistics industry. With years of
                  experience and a deep understanding of Africa's unique
                  logistical challenges, we have established ourselves as a
                  trusted partner for businesses across the continent.
                </p>
              </div>

              <div className="bg-red-600 text-white p-4 rounded-md shadow-lg">
                <h3 className="font-bold text-xl mb-2">
                  Comprehensive Solutions Tailored to Your Needs
                </h3>
                <p className="text-sm sm:text-base">
                  We offer comprehensive logistics solutions tailored to meet
                  the specific needs of cargo owners, brokers, and shippers.
                  Whether you are looking to optimize your supply chain,
                  streamline operations, or enhance visibility and control, Apex
                  Loads has the expertise and technology to deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Slider />
    </div>
  );
};

export default About;
