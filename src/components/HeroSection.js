import React from "react";
import logo from "../assets/apexloads 1.svg";
import whatsapp from "../assets/WhatsApp.svg";
import email from "../assets/emailIcon.svg";
import phone from "../assets/phoneIcon.svg";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Top Contact Bar */}
      <div className="px-4 md:px-12 py-4 navbar bg-red-600 text-white h-12 sticky top-0 left-0 right-0 z-50 flex justify-between transition-transform duration-500 ease-in-out">
        <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
          <li className="flex items-center space-x-2">
            <img src={whatsapp} alt="WhatsApp" className="h-5 w-5" />
            <span>+254 (0) 709 677 400</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src={phone} alt="Phone" className="h-5 w-5" />
            <span>+254 (0) 709 677 400</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src={email} alt="Email" className="h-5 w-5" />
            <span>info@apexloads.com</span>
          </li>
        </ul>
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>Products</summary>
                <ul className="bg-[#D91E27] rounded">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>About us</a>
            </li>
            <li>
              <details>
                <summary>Resources</summary>
                <ul className="bg-[#D91E27] rounded-t-none p-2">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="hidden sm:flex">
          <div className="btn cursor-pointer rounded-full btn-sm bg-white text-[#D91E27]">
            Login
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="px-4 md:px-12 py-4 bg-black text-white sticky top-12 z-40">
        <div className="flex justify-between items-center space-x-4 md:space-x-6">
          <img src={logo} alt="ApexLoads" className="w-32 md:w-40" />
          <ul className="hidden sm:flex space-x-8">
            <li className="relative group">
              <button className="hover:underline cursor-pointer">
                Transporters
              </button>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 space-y-2 rounded shadow-md">
                <li className="p-2 hover:bg-gray-200">
                  <a href="#search-loads">Search Loads</a>
                </li>
                <li className="p-2 hover:bg-gray-200">
                  <a href="#post-truck">Post A Truck</a>
                </li>
                <li className="p-2 hover:bg-gray-200">
                  <a href="#eac-profile">EAC Profile</a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <button className="hover:underline">Full Service Broker</button>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 space-y-2 rounded shadow-md">
                <li className="p-2 hover:bg-gray-200">
                  <a href="#option1">Option 1</a>
                </li>
                <li className="p-2 hover:bg-gray-200">
                  <a href="#option2">Option 2</a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <button className="hover:underline">
                Freight Forwarders/Brokers
              </button>
              <ul className="absolute hidden group-hover:block bg-white text-black mt-2 space-y-2 rounded shadow-md">
                <li className="p-2 hover:bg-gray-200">
                  <a href="#option3">Option 3</a>
                </li>
                <li className="p-2 hover:bg-gray-200">
                  <a href="#option4">Option 4</a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="flex w-1/2 sm:w-1/6 justify-between">
            <div className="hidden sm:flex">
              <div className="btn cursor-pointer rounded-full btn-sm bg-white text-[#D91E27]">
                Pricing
              </div>
            </div>
            <div className="hidden sm:flex">
              <button className="hover:bg-red-400 cursor-pointer bg-[#D91E27] text-white rounded-full btn-sm">
                Book A Free Demo
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default HeroSection;
