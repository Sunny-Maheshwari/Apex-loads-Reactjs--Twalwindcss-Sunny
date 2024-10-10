import React from "react";
import img3 from "../assets/truck.png";
import img2 from "../assets/Vector 12.png";
import img4 from "../assets/Vector 10.png";
import img5 from "../assets/pic.png";
import GirlPic from "../assets/girlPic.png";
import Man1 from "../assets/man1.png";
import Man2 from "../assets/man2.png";
import Man3 from "../assets/man3.png";
import Logo1 from "../assets/logo1.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";
import Logo4 from "../assets/logo4.png";
import IosLogo from "../assets/appleLogo.png";
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
              className="w-1/2 object-cover mx-auto mr-[200px]"
            />
            {/* Overlay images */}
            <div className="">
              <img
                src={img4}
                alt="Icon 4"
                className="absolute bottom-[47%] left-[46%] w-1/4 h-auto"
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
      <div className="text-center md:mt-12 my-6 pt-20 md:pt-24 bg-[#D91E27] md:h-[50rem] h-[22rem]">
        <h2 className="lg:text-7xl md:text-6xl text-3xl font-bold text-white mb-4">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <p className="text-lg text-white text-center md:text-justify md:w-[70%] w-[90%] mx-auto">
          At Apex Loads, we pride ourselves on our proven track record of
          excellence in the logistics industry.
          <span className="hidden md:inline-block">
            With years of experience and a deep understanding of Africa's unique
            logistical challenges, we have established ourselves as a trusted
            partner for businesses across the continent.
          </span>
        </p>
        <div className="flex justify-center mt-4">
          <div className="relative md:w-[68%] w-[90%]">
            <img src={GirlPic} alt="Video" className="w-full rounded-lg" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="text-white rounded-full p-4">
                <svg
                  width="81"
                  height="81"
                  viewBox="0 0 81 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="40.5" cy="40.5" r="40.5" fill="white"></circle>
                  <path
                    d="M55 40L32.5 52.9904L32.5 27.0096L55 40Z"
                    fill="black"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center md:gap-56 my-10 gap-5 md:w-[60%] w-[90%] mx-auto text-center">
          <div className="flex flex-col items-center w-[30%]">
            <p className="lg:text-6xl md:text-5xl sm:text-4xl text-white text-2xl text-center font-bold">
              4500+
            </p>
            <p className="text-[14px] text-center text-white">Users Signup</p>
          </div>
          <div className="flex flex-col items-center w-[30%]">
            <p className="lg:text-7xl md:text-6xl sm:text-5xl text-white text-2xl text-center font-bold">
              9988
            </p>
            <p className="text-[14px]  text-white">Leads Posted and Covered</p>
          </div>
          <div className="flex flex-col items-center w-[30%]">
            <p className="lg:text-6xl md:text-5xl sm:text-4xl text-white text-2xl text-center font-bold">
              500+
            </p>
            <p className="text-[14px] text-center text-white">Trucks Posted</p>
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto py-12 mt-56 px-6 bg-black">
        <div className="text-center mb-12 py-10">
          <h2 className="md:text-7xl text-5xl text-white font-bold">
            What people <span className="text-red-600">say</span>
          </h2>
        </div>
        <div className="relative">
          <button
            id="scrollLeft"
            className="absolute md:hidden block left-0 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full top-1/2 transform -translate-y-1/2"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16"
                cy="16"
                r="15.5"
                transform="rotate(-180 16 16)"
                fill="#1B1B1B"
                stroke="white"
              ></circle>
              <path d="M19 21L14 16L19 11" stroke="white"></path>
            </svg>
          </button>

          <div
            id="slider"
            className="flex justify-start items-center gap-8 overflow-x-scroll scroll-smooth md:flex-row no-scrollbar px-12"
          >
            <div className="bg-[#1B1B1B] p-6 md:w-[30%] w-[100%] rounded-sm min-w-[350px] md:min-w-[30%]">
              <div className="flex items-center gap-6">
                <img
                  src={Man1}
                  alt="User Image"
                  className="w-28 h-28 mb-4 rounded-full"
                />
                <div className="relative pb-10">
                  <h3 className="text-xl font-semibold text-[#E5E5E5]">
                    Moses Smith
                  </h3>
                  <p className="text-[#E5E5E5]">Transporter</p>
                  <img
                    src="assets/6.png"
                    className="w-20 absolute -bottom-2"
                    alt=""
                  />
                </div>
              </div>
              <p className="mt-2 text-sm text-justify text-[#E5E5E5]">
                I did not have to leave the house to find a load. It was so
                easy; I was watching the news while searching for my next load.
                Got the information, called the broker, got there and just
                loaded it up. This would otherwise have been a 5 hour wait or
                even much longer
              </p>
            </div>
            <div className="bg-[#1B1B1B] p-6 md:w-[30%] w-[100%] rounded-sm min-w-[350px] md:min-w-[30%]">
              <div className="flex items-center gap-6">
                <img
                  src={Man2}
                  alt="User Image"
                  className="w-28 h-28 mb-4 rounded-full"
                />
                <div className="relative pb-10">
                  <h3 className="text-xl font-semibold text-[#E5E5E5]">
                    Lora Kisa
                  </h3>
                  <p className="text-[#E5E5E5]">Broker</p>
                  <img
                    src="assets/6.png"
                    className="w-20 absolute -bottom-2"
                    alt=""
                  />
                </div>
              </div>
              <p className="mt-2 text-sm text-justify text-[#E5E5E5]">
                I save so much time, because I do not have to call the driver to
                find out where he/she is. I can track them on my mobile.
                Sometimes I feel like I am James Bond. The app itself has been
                very valuable to our business and helps to keep us very busy!
                Thank You!
              </p>
            </div>
            <div className="bg-[#1B1B1B] p-6 md:w-[30%] w-[100%] rounded-sm min-w-[350px] md:min-w-[30%]">
              <div className="flex items-center gap-6">
                <img
                  src={Man3}
                  alt="User Image"
                  className="w-28 h-28 mb-4 rounded-full"
                />
                <div className="relative pb-10">
                  <h3 className="text-xl font-semibold text-[#E5E5E5]">
                    Faith Mukasa
                  </h3>
                  <p className="text-[#E5E5E5]">Shipper</p>
                  <img
                    src="assets/6.png"
                    className="w-20 absolute -bottom-2"
                    alt=""
                  />
                </div>
              </div>
              <p className="mt-2 text-sm text-justify text-[#E5E5E5]">
                ApexLoads has transformed my business by cutting wait times by
                38%, boosting customer satisfaction, and fostering daily network
                growth. Its unparalleled efficiency solidifies ApexLoads as the
                top-of-the-line solution driving my success.
              </p>
            </div>
          </div>

          <button
            id="scrollRight"
            className="absolute md:hidden block right-0 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full top-1/2 transform -translate-y-1/2"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16"
                cy="16"
                r="15.5"
                fill="#1B1B1B"
                stroke="white"
              ></circle>
              <path d="M13 11L18 16L13 21" stroke="white"></path>
            </svg>
          </button>
        </div>
      </section>

      <section className="bg-black py-12">
        <div className="text-center mb-8">
          <h3 className="md:text-7xl text-5xl font-bold text-white">
            Member Of
          </h3>
        </div>
        <div className="flex justify-center items-center space-x-8 flex-wrap">
          <img src={Logo4} alt="Logo 1" className="w-40 h-40 object-contain" />
          <img src={Logo3} alt="Logo 2" className="w-40 h-40 object-contain" />
          <img src={Logo2} alt="Logo 3" className="w-40 h-40 object-contain" />
          <img src={Logo1} alt="Logo 4" className="w-40 h-40 object-contain" />
        </div>
      </section>

      <div className="text-center md:h-[751px] h-[20rem] md:pt-20 pt-3 relative bg-[url('/src/assets/mobileMap.png')] bg-cover bg-center">
        <h1 className="text-white md:text-7xl text-3xl font-bold mb-6">
          Download the Apexloads mobile app
        </h1>

        <div className="flex md:justify-between md:items-center items-end md:h-[80%] h-[66%] md:mx-20 justify-center space-x-4 mb-6">
          <div className="bg-black flex md:w-[20%] md:h-20 h-10 gap-4 p-2 border-[1px] rounded-lg border-white items-center">
            <a href="#">
              <svg
                className="md:w-[52px] w-[20px] md:h-[58px] h-[40px]"
                viewBox="0 0 384 512"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
              </svg>
            </a>

            <div className="font-bold">
              <a href="#">
                <h1 className="text-start text-[10px] md:text-lg text-white">
                  Download on the
                </h1>
                <h1 className="md:text-2xl text-[12px] text-white">
                  App Store
                </h1>
              </a>
            </div>
          </div>

          <div className="bg-black flex md:w-[20%] md:h-20 h-10 gap-4 p-2 border-[1px] rounded-lg border-white items-center">
            <a href="#">
              <svg
                className="md:w-[52px] w-[20px] md:h-[58px] h-[40px]"
                width="52"
                height="58"
                viewBox="0 0 52 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.03412 1.61133C0.369674 2.27577 0.148193 3.38318 0.148193 4.71207V53.6595C0.148193 54.9884 0.591156 56.0958 1.2556 56.7602L1.47708 56.9817L28.9408 29.518V29.075L1.03412 1.61133Z"
                  fill="url(#paint0_linear_953_101)"
                ></path>
                <path
                  d="M37.8 38.8206L28.7192 29.7398V29.0754L37.8 19.9946L38.0215 20.2161L48.8741 26.4176C51.9748 28.1894 51.9748 31.0687 48.8741 32.8406L37.8 38.8206Z"
                  fill="url(#paint1_linear_953_101)"
                ></path>
                <path
                  d="M38.0216 38.5991L28.7194 29.2969L1.03418 56.9821C2.14159 58.0895 3.69196 58.0895 5.68529 57.2035L38.0216 38.5991Z"
                  fill="url(#paint2_linear_953_101)"
                ></path>
                <path
                  d="M38.0216 19.9943L5.68529 1.61137C3.69196 0.503959 2.14159 0.725441 1.03418 1.83285L28.7194 29.2966L38.0216 19.9943Z"
                  fill="url(#paint3_linear_953_101)"
                ></path>
                <path
                  opacity="0.2"
                  d="M37.8001 38.3774L5.68529 56.5389C3.91344 57.6463 2.36307 57.4248 1.25566 56.5389L1.03418 56.7604L1.25566 56.9819C2.36307 57.8678 3.91344 58.0893 5.68529 56.9819L37.8001 38.3774Z"
                  fill="black"
                ></path>
                <path
                  opacity="0.12"
                  d="M1.03412 56.5391C0.369674 55.8747 0.148193 54.7672 0.148193 53.4384V53.6598C0.148193 54.9887 0.591156 56.0961 1.2556 56.7606V56.5391H1.03412ZM48.8741 32.1761L37.8 38.3776L38.0215 38.5991L48.8741 32.3976C50.4245 31.5117 51.0889 30.4043 51.0889 29.2969C51.0889 30.4043 50.203 31.2902 48.8741 32.1761Z"
                  fill="black"
                ></path>
                <path
                  opacity="0.25"
                  d="M5.68523 1.83297L48.8741 26.4174C50.203 27.3033 51.0889 28.1893 51.0889 29.2967C51.0889 28.1893 50.4245 27.0819 48.8741 26.1959L5.68523 1.61149C2.58449 -0.160366 0.148193 1.16852 0.148193 4.71223V4.93371C0.148193 1.61149 2.58449 0.0611152 5.68523 1.83297Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_953_101"
                    x1="26.283"
                    y1="4.29125"
                    x2="-10.8882"
                    y2="41.4603"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#00A0FF"></stop>
                    <stop offset="0.007" stop-color="#00A1FF"></stop>
                    <stop offset="0.26" stop-color="#00BEFF"></stop>
                    <stop offset="0.512" stop-color="#00D2FF"></stop>
                    <stop offset="0.76" stop-color="#00DFFF"></stop>
                    <stop offset="1" stop-color="#00E3FF"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_953_101"
                    x1="52.936"
                    y1="29.2991"
                    x2="-0.655851"
                    y2="29.2991"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFE000"></stop>
                    <stop offset="0.409" stop-color="#FFBD00"></stop>
                    <stop offset="0.775" stop-color="#FFA500"></stop>
                    <stop offset="1" stop-color="#FF9C00"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_953_101"
                    x1="32.9873"
                    y1="34.3821"
                    x2="-17.4174"
                    y2="84.7868"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF3A44"></stop>
                    <stop offset="1" stop-color="#C31162"></stop>
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_953_101"
                    x1="-5.83839"
                    y1="-14.6099"
                    x2="16.6708"
                    y2="7.89923"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#32A071"></stop>
                    <stop offset="0.069" stop-color="#2DA771"></stop>
                    <stop offset="0.476" stop-color="#15CF74"></stop>
                    <stop offset="0.801" stop-color="#06E775"></stop>
                    <stop offset="1" stop-color="#00F076"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </a>

            <div className="font-bold">
              <a href="#">
                <h1 className="text-start text-[10px] md:text-lg text-white">
                  GET IT ON
                </h1>
                <h1 className="md:text-2xl text-[12px] text-white">
                  GOOGLE PLAY
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
