import React, { useState } from "react";
import logo from "../assets/apexloads 1.svg";
import whatsapp from "../assets/WhatsApp.svg";
import email from "../assets/emailIcon.svg";
import phone from "../assets/phoneIcon.svg";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Top Contact Bar */}
      <div className="px-4 md:px-12 py-4 navbar bg-red-600 text-white h-auto md:h-12 sticky top-0 left-0 right-0 z-50 flex flex-col md:flex-row justify-between transition-transform duration-500 ease-in-out">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm md:text-base">
          <li className="flex items-center space-x-2">
            <img src={whatsapp} alt="WhatsApp" className="h-4 w-4 md:h-5 md:w-5" />
            <span>+254 (0) 709 677 400</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src={phone} alt="Phone" className="h-4 w-4 md:h-5 md:w-5" />
            <span>+254 (0) 709 677 400</span>
          </li>
          <li className="flex items-center space-x-2">
            <img src={email} alt="Email" className="h-4 w-4 md:h-5 md:w-5" />
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
        <div className="hidden md:flex">
          <div className="btn cursor-pointer rounded-full btn-sm bg-white text-[#D91E27]">
            Login
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="px-4 md:px-12 py-4 bg-black text-white sticky top-12 z-40">
        <div className="flex justify-between items-center">
          <img src={logo} alt="ApexLoads" className="w-24 md:w-32 lg:w-40" />
          
          {/* Hamburger menu for mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-4 lg:space-x-8">
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

          <div className="hidden md:flex space-x-2 lg:space-x-4">
            <div className="btn cursor-pointer rounded-full btn-sm bg-white text-[#D91E27]">
              Pricing
            </div>
            <button className="hover:bg-red-400 cursor-pointer bg-[#D91E27] text-white rounded-full btn-sm">
              Book A Free Demo
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <ul className="space-y-2">
              <li>
                <button className="w-full text-left py-2">Transporters</button>
                <ul className="pl-4 space-y-2">
                  <li><a href="#search-loads" className="block py-1">Search Loads</a></li>
                  <li><a href="#post-truck" className="block py-1">Post A Truck</a></li>
                  <li><a href="#eac-profile" className="block py-1">EAC Profile</a></li>
                </ul>
              </li>
              <li>
                <button className="w-full text-left py-2">Full Service Broker</button>
                <ul className="pl-4 space-y-2">
                  <li><a href="#option1" className="block py-1">Option 1</a></li>
                  <li><a href="#option2" className="block py-1">Option 2</a></li>
                </ul>
              </li>
              <li>
                <button className="w-full text-left py-2">Freight Forwarders/Brokers</button>
                <ul className="pl-4 space-y-2">
                  <li><a href="#option3" className="block py-1">Option 3</a></li>
                  <li><a href="#option4" className="block py-1">Option 4</a></li>
                </ul>
              </li>
            </ul>
            <div className="space-y-2">
              <div className="btn cursor-pointer rounded-full btn-sm bg-white text-[#D91E27] w-full">
                Pricing
              </div>
              <button className="hover:bg-red-400 cursor-pointer bg-[#D91E27] text-white rounded-full btn-sm w-full">
                Book A Free Demo
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default HeroSection;