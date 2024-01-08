import React from "react";

export default function FacilitiesSection() {
  return (
    <div className="space-y-10 md:space-y-40 mx-5">
      <div style={{backgroundImage: "url('src/assets/images/facilities/gym.png')"}} className="flex justify-center items-end bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px]">
          <p className="text-xl md:text-4xl font-bold px-3">THE GYM</p>
        </div>
      </div>

      <div style={{backgroundImage: "url('src/assets/images/facilities/poolside-bar.png')"}} className="flex justify-center items-end bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px]">
          <p className="text-xl md:text-4xl font-bold px-3">POOLSIDE BAR</p>
        </div>
      </div>
      <div style={{backgroundImage: "url('src/assets/images/facilities/spa.png')"}} className="flex justify-center items-end bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px]">
          <p className="text-xl md:text-4xl font-bold px-3">THE SPA</p>
        </div>
      </div>
      <div style={{backgroundImage: "url('src/assets/images/facilities/swimming-pool.png')"}} className="flex justify-center items-end bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px] ">
          <p className="text-xl md:text-3xl font-bold px-3">SWIMMING POOL</p>
        </div>
      </div>
      <div style={{backgroundImage: "url('src/assets/images/facilities/restaurant.png')"}} className="flex justify-center items-end bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px]">
          <p className="text-xl md:text-4xl font-bold px-3">RESTAURANT</p>
        </div>
      </div>
      <div style={{backgroundImage: "url('src/assets/images/facilities/laundry.png')"}} className="flex justify-center items-end bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px]">
          <p className="text-xl md:text-4xl font-bold px-3">LAUNDRY</p>
        </div>
      </div>
    </div>
  );
}
