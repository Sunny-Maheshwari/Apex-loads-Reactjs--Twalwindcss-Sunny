import React from "react";
import logo from "../assets/apexloads 1.svg";

const Footer = () => {
  return (
    <footer className="bg-black md:h-[700px] h-auto p-10 md:p-20 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
    <div className="flex flex-col md:w-[40%] w-[90%] space-y-6">
      <div className="text-gray-400">
        <div>
          <img src={logo} alt="Apexloads Logo" className="h-10" />
          <p className="text-gray-400 my-4">
            The first free end-to-end analytics service for the site, designed
            to work with enterprises of various levels and business segments.
          </p>
        </div>
        <h3 className="text-white font-bold my-4">
          Seeking personalized support?
        </h3>
        <p className="my-4">Request a call from our team</p>
        <div className="flex flex-col space-y-3 mt-4">
          <input type="text" placeholder="Your Name" className="bg-transparent border border-gray-600 p-2 rounded-lg text-white placeholder-gray-500 rounded-md" />
          <input type="text" placeholder="Phone Number" className="bg-transparent border border-gray-600 p-2 rounded-lg text-white placeholder-gray-500 rounded-md" />
          <button className="bg-red-500  p-2 rounded-full font-bold ">
            Send a request
          </button>
        </div>
      </div>
    </div>

    <div className="md:w-[50%]">
      <div className="flex mb-10 gap-10 md:flex-row justify-between mb-2">
        <div>
          <h4 className="text-red-500 font-bold mb-4">Useful Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Newsletter</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Our Blog</a></li>
            <li><a href="#" className="hover:text-white">FAQs &amp; EAC</a></li>
            <li><a href="#" className="hover:text-white">Profile</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-red-500 font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="font-bold text-white">Transporters</li>
            <li><a href="#" className="hover:text-white">Post Trucks</a></li>
            <li><a href="#" className="hover:text-white">Search For Loads</a></li>
            <li className="font-bold text-white">Brokers / Freight-Forwarders</li>
            <li><a href="#" className="hover:text-white">Post Trucks</a></li>
            <li><a href="#" className="hover:text-white">Search For Loads</a></li>
            <div className="block md:hidden">
              <li className="font-bold text-white">Shippers</li>
              <li><a href="#" className="hover:text-white">Post Trucks</a></li>
              <li>
                <a href="#" className="hover:text-white">Search For Loads</a>
              </li>
              <li className="font-bold text-white">Full-Service Brokers</li>
              <li>
                <a href="#" className="hover:text-white">Post Trucks / Loads</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Search Trucks / Loads</a>
              </li>
            </div>
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <ul className="space-y-2 text-gray-400">
            <li className="font-bold text-white">Shippers</li>
            <li><a href="#" className="hover:text-white">Post Trucks</a></li>
            <li><a href="#" className="hover:text-white">Search For Loads</a></li>
            <li className="font-bold text-white">Full-Service Brokers</li>
            <li>
              <a href="#" className="hover:text-white">Post Trucks / Loads</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Search Trucks / Loads</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-10 items-center">
        <div>
          <h4 className="text-[#72716D] font-bold mb-4">Contact Us</h4>
          <p className="text-gray-400">+254 (0) 709 677 400</p>
          <p className="text-gray-400">info@apexloads.com</p>
          <a href="#" className="text-[#72716D] pt-1">Call me back</a>
        </div>
        <div className="flex-col flex">
          <p className="text-gray-400 mt-4">
            2972 Westheimer Rd. Santa Ana,<br />
            Illinois 85486
          </p>
        </div>
      </div>
      <div className="bg-black py-6 text-gray-400">
        <div className="space-y-2 mb-10">
          <p>Follow us</p>
          <div className="flex justify-start space-x-4">
            <a href="#" className="hover:text-white">Telegram</a>
            <a href="#" className="hover:text-white">Whatsapp</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>

        <div className="space-y-2">
          <p>© 2024 — COPYRIGHT PRIVACY</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </div>

    <div className="fixed bottom-2 right-10">
      <a href="#" id="scrollTopBtn" className="flex justify-center items-center w-14 h-14  rounded-full text-white transition-opacity hover:opacity-80">
        <svg width="40" height="40" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="73" cy="73" r="72" stroke="#272725" stroke-width="2"></circle>
          <path d="M73 43.5L47 69.5L50.5 73L70.5 53V102H75.5V53L95.5 73L99 69.5L73 43.5Z" fill="#D9D9D9"></path>
        </svg>
      </a>
    </div>
  </footer>
  );
};

export default Footer;
