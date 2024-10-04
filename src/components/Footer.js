import React from "react";
import logo from "../assets/apexloads 1.svg";
const Footer = () => {
  return (
    <footer className="footer w-full bg-[#171715] text-neutral-content p-10 items-center">
      <div className="w-20">
        <form className="space-x-10">
          <img src={logo} alt="ApexLoads" className="w-24 md:w-32 lg:w-40" />
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            The first free end-to-end analytics service for the site, designed
            to work with enterprises of various levels and business segments.
          </p>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="flex flex-row justify-between w-[90%]">
        <nav className="flex flex-col w-full">
          <h6 className="footer-title text-[#D81E27]">Useful Links</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Newsletter</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Our Blog</a>
          <a className="link link-hover">FAQsEAC</a>
          <a className="link link-hover">Profile</a>
        </nav>
        <nav className="flex flex-col w-full space-y-2">
          <h6 className="footer-title text-[#D81E27]">Services</h6>
          <div className="flex justify-between flex-row w-full">
            <div className="flex justify-between flex-col w-full space-y-4">
              <h1 className="text-white text-md font-bold">Transporters</h1>
              <a className="link link-hover">Post Trucks</a>
              <a className="link link-hover">Search For Loads</a>
            </div>
            <div className="flex justify-between flex-col w-full">
              <h1 className="text-white text-md font-bold">Brokers / Freight-Forwarders</h1>
              <a className="link link-hover">Post Trucks</a>
              <a className="link link-hover">Search For Loads</a>
            </div>
          </div>
          <div className="flex justify-between flex-row w-full">
            <div className="flex justify-between flex-col w-full space-y-4">
              <h1 className="text-white text-md font-bold">Shippers</h1>
              <a className="link link-hover">Post Trucks</a>
              <a className="link link-hover">Search For Loads</a>
            </div>
            <div className="flex justify-between flex-col w-full">
              <h1 className="text-white text-md font-bold">Full-Service Brokers</h1>
              <a className="link link-hover">Post Trucks</a>
              <a className="link link-hover">Search For Loads</a>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
