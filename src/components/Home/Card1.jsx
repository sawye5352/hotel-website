import React from "react";
import Home1 from "../../assets/images/home/home-image-1.png";
import { Link } from "react-router-dom";

export default function Card_1() {
  return (
    <div className="flex flex-col xl:flex-row gap-10 md:gap-30 items-center ">
      <div className="flex xl:flex-row items-center">
      <div className="bg-primary_blue w-[2px] h-[200px] xl:h-[300px] md:mr-10 hidden md:block"></div>
        <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left p-10">
          <h1 className="text-2xl md:text-4xl font-bold">Luxury redefined</h1>
          <p className="text-xl md:text-[23px] md:w-[500px]">
            Our rooms are designed to transport you into an environment made for
            leisure. Take your mind off the day-to-day of home life and find a
            private paradise for yourself.
          </p>
          <Link to="/rooms">
            <button
              className="bg-primary_yellow font-bold rounded-md w-[236px] h-[63px] hover:bg-yellow-500"
              type="button"
            >
              EXPLORE
            </button>
          </Link>
        </div>
      </div>
      <img className="w-[280px] md:w-[600px] md:h-[400px]" src={Home1} alt="" />
    </div>
  );
}
