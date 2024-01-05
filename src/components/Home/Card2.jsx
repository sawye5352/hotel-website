import React from "react";
import { Link } from "react-router-dom";
import Home2 from "../../assets/images/home/home-image-2.png";

export default function Card2() {
  return (
    <div className="flex flex-col xl:flex-row gap-10 md:gap-30 items-center ">
      <div className="flex xl:flex-row items-center">
        <div className="bg-primary_blue w-[2px] h-[200px] xl:h-[300px] md:mr-10"></div>
        <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-left p-10">
          <h1 className="text-2xl md:text-4xl font-bold">
            Leave your worries in the sand
          </h1>
          <p className="text-xl md:text-[23px] md:w-[500px]">
            We love life at the beach. Being close to the ocean with access to
            endless sandy beach ensures a relaxed state of mind. It seems like
            time stands still watching the ocean.
          </p>
          <Link to="/facilities">
            <button
              className="bg-primary_yellow font-bold rounded-md w-[236px] h-[63px] hover:bg-yellow-500"
              type="button"
            >
              EXPLORE
            </button>
          </Link>
        </div>
      </div>
      <img className="w-[280px] md:w-[600px] md:h-[400px]" src={Home2} alt="" />
    </div>
  );
}
