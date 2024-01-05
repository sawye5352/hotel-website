import React, { useState } from "react";
import Facebook from "../assets/logos/Facebook.svg";
import Twitter from "../assets/logos/Twitter.svg";
import Instagram from "../assets/logos/Instagram.svg";

export default function Footer() {

  let [newsletter, setNewsletter] = useState("")

  return (
    <div className="bg-primary_blue mt-20">
      <div className="flex flex-col justify-center text-center md:text-start items-center md:flex-row md:justify-between  gap-10 text-white py-10 max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto">
        <div className="mr-5">
          <h3 className="md:text-[25px] font-bold ">LUXURY</h3>
          <h5 className="font-bold md:px-4">HOTELS</h5>
          <p className="text-sm md:text-md py-3">
            497 Evergreen Rd. Roseville,<br/> CA 95673
            <br />
            +44 345 678 903
            <br />
            luxury_hotels@gmail.com
          </p>
        </div>
        <div className="flex gap-20 items-center md:flex-col md:justify-start md:gap-2 mr-5">
          <a href="https://www.facebook.com/" target="_blank" className="flex gap-6">
            <img className="ml-1" src={Facebook} alt="" />
            <p className="md:block hidden">Facebook</p>
          </a>
          <a href="https://twitter.com/home?lang=en" target="_blank" className="flex gap-6 md:mr-3">
            <img src={Twitter} alt="" />
            <p className="md:block hidden">Twitter</p>
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="flex gap-6 md:ml-2">
            <img src={Instagram} alt="" />
            <p className="md:block hidden">Instagram</p>
          </a>
        </div>
        <div className="md:block hidden">
        <div className="flex flex-col space-y-5">
          <p className="text-lg">Subscribe to our newsletter</p>
          <div class="relative w-full">
            <input
              type="search"
              id="search-dropdown"
              class="block p-2.5 w-full z-20 text-sm text-white bg-gray-50 rounded-md border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
              placeholder="Email Address"
              onChange={(e) => setNewsletter(e.target.value)}
              value={newsletter}
            />
            <button
              type="submit"
              class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-primary_blue rounded-e-lg border border-primary_blue-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-primary_blue dark:hover:bg-orange-300 dark:focus:ring-primary_blue"
              onClick={() => setNewsletter("")}
            >
              <span class="text-white font-bold">OK</span>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
