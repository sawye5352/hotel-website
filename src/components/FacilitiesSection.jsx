import React from "react";

export default function FacilitiesSection() {
  return (
    <div className="space-y-10 md:space-y-40 mx-5">
      <div className="flex justify-center items-end bg-gym bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px]">
          <p className="text-xl md:text-4xl font-bold px-3">THE GYM</p>
        </div>
      </div>

      <div className="flex justify-center items-end bg-poolside-bar bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px]">
          <p className="text-xl md:text-4xl font-bold px-3">POOLSIDE BAR</p>
        </div>
      </div>
      <div className="flex justify-center items-end bg-spa bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px]">
          <p className="text-xl md:text-4xl font-bold px-3">THE SPA</p>
        </div>
      </div>
      <div className="flex justify-center items-end bg-swimming-pool bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px] ">
          <p className="text-xl md:text-3xl font-bold px-3">SWIMMING POOL</p>
        </div>
      </div>
      <div className="flex justify-center items-end bg-restaurant bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px]">
          <p className="text-xl md:text-4xl font-bold px-3">RESTAURANT</p>
        </div>
      </div>
      <div className="flex justify-center items-end bg-laundary bg-cover">
        <div className="flex justify-center items-center bg-white md:w-[300px] md:h-[50px] mt-[200px]  md:mt-[600px]">
          <p className="text-xl md:text-4xl font-bold px-3">LAUNDARY</p>
        </div>
      </div>
    </div>
  );
}
