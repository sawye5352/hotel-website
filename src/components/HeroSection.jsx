import React, { useState, useEffect, useRef } from "react";
import img1 from "../assets/bg-image-1.svg";
import img2 from "../assets/bg-image-2.svg";
import img3 from "../assets/bg-image-3.svg";
import BookNowButton from "../assets/BookNowButton.svg";
import ScrollArrow from "../assets/ScrollArrow.svg";

export default function HeroSection() {
  const [value, setvalue] = useState(0);
  const images = [img1, img2, img3];
  const imageRefs = useRef(images.map(() => new Image()));

  useEffect(() => {
    imageRefs.current.forEach((imgRef, idx) => {
      imgRef.src = images[idx];
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setvalue((prevValue) => (prevValue === 2 ? 0 : prevValue + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [value]);

  return (
    <div
    className="xl:h-dvh bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(20, 39, 74, 0.7), rgba(20, 39, 74, 0.7)), url(${images[value]})`
      }}
    >
      <div className="mr-5">
        <div className="flex flex-col justify-center items-center md:items-start text-white max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto py-[30px] md:py-[60px] gap-2 ">
          <h3 className="text-2xl md:text-4xl">WELCOME TO</h3>
          <h1 className="text-5xl md:text-8xl">LUXURY</h1>
          <h3 className="text-3xl md:text-4xl tracking-[24px]">HOTELS</h3>
          <p className="mt-10 text-lg md:text-2xl ">Book your stay and enjoy Luxury</p>
          <p className="text-lg md:text-2xl">redefined at the most affordable rates.</p>
        </div>
        <div className="flex flex-col justify-center items-center max-w-48 mx-auto mt-6 text-white gap-6">
          <a
            href="https://www.booking.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center px-4 py-2 rounded-lg gap-5 transition ease-in-out delay-150 bg-primary_yellow hover:-translate-y-1 hover:scale-110 hover:bg-primary_blue duration-300 "
          >
            <img src={BookNowButton} alt="" />
            <p className="text-xl md:text-[23px]">Book Now</p>
          </a>
          <p className="text-xl md:text-2xl animate-pulse">Scroll</p>
          <img className="animate-bounce w-10 h-10" src={ScrollArrow} alt="" />
        </div>
      </div>
    </div>
  );
}
