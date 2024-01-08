import React from "react";
import Gym from "../assets/images/facilities/gym.png"
import PoolSideBar from "../assets/images/facilities/poolside-bar.png"
import Spa from "../assets/images/facilities/spa.png"
import Restaurant from "../assets/images/facilities/restaurant.png"
import SwimmingPool from "../assets/images/facilities/swimming-pool.png"
import Laundry from "../assets/images/facilities/laundry.png"

export default function FacilitiesSection() {
  return (
    <div className="space-y-10 md:space-y-40 mx-5">
      <div style={{backgroundImage: `url(${Gym})`}} className="flex justify-center items-end bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px]">
          <p className="text-xl md:text-4xl font-bold px-3">THE GYM</p>
        </div>
      </div>

      <div style={{backgroundImage: `url(${PoolSideBar})`}} className="flex justify-center items-end bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px]">
          <p className="text-xl md:text-4xl font-bold px-3">POOLSIDE BAR</p>
        </div>
      </div>
      <div style={{backgroundImage: `url(${Spa})`}} className="flex justify-center items-end bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px]">
          <p className="text-xl md:text-4xl font-bold px-3">THE SPA</p>
        </div>
      </div>
      <div style={{backgroundImage: `url(${SwimmingPool})`}} className="flex justify-center items-end bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px] ">
          <p className="text-xl md:text-3xl font-bold px-3">SWIMMING POOL</p>
        </div>
      </div>
      <div style={{backgroundImage: `url(${Restaurant})`}} className="flex justify-center items-end bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px]">
          <p className="text-xl md:text-4xl font-bold px-3">RESTAURANT</p>
        </div>
      </div>
      <div style={{backgroundImage: `url(${Laundry})`}} className="flex justify-center items-end bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px]">
          <p className="text-xl md:text-4xl font-bold px-3">LAUNDARY</p>
        </div>
      </div>
    </div>
  );
}
