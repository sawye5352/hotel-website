import React from "react";
import FacilitiesSection from "../components/FacilitiesSection";

export default function Facilities() {
  return (
    <div className="max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto p-3">
      <div className="space-y-10 p-10 mr-5">
        <h1 className="text-2xl md:text-4xl text-center font-bold tracking-[3px]">
          FACILITIES
        </h1>
        <p className="text-lg md:text-[25px] text-center">
          We want your stay at our lush hotel to be truly unforgettable. That is
          why we give special attention to all of your needs so that we can
          ensure an experience quite uniquw. Luxury hotels offers the perfect
          setting with stunning views for leisure and our modern luxury resort
          facilities will help you enjoy the best of all.
        </p>
      </div>
      <FacilitiesSection />
    </div>
  );
}
