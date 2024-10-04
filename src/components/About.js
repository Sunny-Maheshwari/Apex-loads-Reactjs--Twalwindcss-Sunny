import React from "react";
import img3 from "../assets/truck.png";
import img2 from "../assets/Vector 12.png";
import img4 from "../assets/Vector 10.png";
import img5 from "../assets/pic.png";
import popMsg from "../assets/messagePop.png";

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
      <div class="flex flex-row justify-evenly items-start p-20 w-full bg-black h-full">
        <div class="w-1/2 flex items-center justify-center">
          <img
            src={img5}
            alt="Man"
            class="rounded-md shadow-lg w-[400px] h-auto object-cover"
          />
        </div>

        <div class="w-1/2">
          <h2 class="text-4xl md:text-7xl font-bold text-white mb-6">
            Why Choose <span class="text-red-600">Us</span>
          </h2>

          <div class="relative flex flex-col space-x-[60px] justify-between">
            <div class="w-[2px] bg-white h-[502px] absolute top-12"></div>

            <div class="relative p-5 space-y-10 ml-8">
              <div class="bg-red-600 text-white p-5 rounded-md shadow-lg w-[350px]">
                <h3 class="font-bold text-xl">
                  Proven Track Record of Excellence
                </h3>
                <p>
                  At Apex Loads, we pride ourselves on our proven track record
                  of excellence in the logistics industry. With years of
                  experience and a deep understanding of Africa's unique
                  logistical challenges, we have established ourselves as a
                  trusted partner for businesses across the continent.
                </p>
              </div>

              <div class="bg-red-600 text-white p-5 rounded-md shadow-lg w-[350px]">
                <h3 class="font-bold text-xl">
                  Comprehensive Solutions Tailored to Your Needs
                </h3>
                <p>
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
    </div>
  );
};

export default About;
