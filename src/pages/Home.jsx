import React from "react";
import HeroSection from "../components/HeroSection";
import Card1 from "../components/Home/Card1";
import Card2 from "../components/Home/Card2";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="flex flex-col justify-between items-center max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto gap-5">
        <h3 className="text-xl md:text-3xl text-center mt-20">
          All our room types are including complementary breakfast
        </h3>
        <div className="max-w-lg lg:max-w-3xl xl:max-w-6xl mx-auto md:mt-20 md:space-y-20">
          <Card1 />
          <Card2 />
        </div>
      </div>
    </div>
  );
}
