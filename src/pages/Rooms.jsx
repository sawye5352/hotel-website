import React from "react";
import RoomsSection from "../components/RoomsSection";

export default function Rooms() {
  
  return (
    <div className="max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto p-3">
      <div className="space-y-10 p-10">
        <h1 className="text-2xl md:text-4xl text-center font-bold tracking-[3px]">
          ROOMS AND RATES
        </h1>
        <p className="text-lg md:text-[25px] text-center">
          Each of our bright, light-flooded rooms come with everything you could
          possibly need for a comfortable stay. And yes, comfort isn’t our only
          objective, we also value good design, sleek contemporary furnishing
          complemented by the rich tones of nature’s palette as visible from our
          rooms sea-view windows and terraces.
        </p>
      </div>
      <RoomsSection/>
    </div>
  );
}
