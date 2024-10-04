import React from "react";
import img3 from "../assets/truck.png";
import img2 from "../assets/Vector 12.png";
import img4 from "../assets/Vector 10.png";

const About = () => {
  return (
    <div className="relative bg-[url('/src/assets/mapbg.png')] bg-cover bg-center h-full justify-center items-center">
      <div className="flex flex-col lg:flex-row bg-transparent text-white w-full justify-center items-center py-[180px]">
        {/* Text Section */}
        <div className="container mx-auto p-8 w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-red-600">us</span>
          </h2>
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white mt-6 leading-relaxed">
            Apexloads.com is a premier digital platform designed to
            revolutionize the logistics and transportation industry,
            <span className="block mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
              with a special focus on the African market. We aim to bridge the
              gap between shippers and truck owners, providing a seamless and
              efficient solution to manage freight loads. Our platform is built
              on the principles of innovation, reliability, and accessibility,
              ensuring that all users, regardless of their location, can
              optimize their logistics operations and drive their businesses
              forward.
            </span>
          </h1>

          <button className="flex justify-between items-center mt-6 px-4 py-2 font-extrabold bg-transparent border border-gray-100 text-white text-md rounded-full hover:bg-gray-700">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-1/3 lg:right-[-125px] mb-6 lg:mb-0">
          <img src={img3} alt="Truck" />
          <img
            src={img4}
            alt="Icon 4"
            className="absolute bottom-[132px] right-[-20px] w-[304px] h-[313px] hidden lg:block"
          />
          <img
            src={img2}
            alt="Icon 2"
            className="absolute top-[158px] right-[120px] w-[142px] h-[80px] hidden lg:block"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
