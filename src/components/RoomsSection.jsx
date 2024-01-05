import React, { useState } from "react";
import SingleRoom from "../assets/images/rooms/single-room.png";
import DoubleRoom from "../assets/images/rooms/double-room.png";
import TwinRoom from "../assets/images/rooms/twin-room.png";
import Plus from "../assets/plus.svg";

export default function RoomsSection() {
  const [showMore, setShowMore] = useState(false);

  const features = [
    "Wifi",
    "TV",
    "Aircon",
    "Minibar",
    "Coffee",
    "Room Service",
    "Laundary",
    "Gym",
    "Pool",
    "The Spa",
  ];
  return (
    <div className="space-y-14">
      <div >
        <img  src={SingleRoom} alt="" />
        <div className="text-xl md:text-3xl text-bold text-white text-center py-5 bg-primary_blue">
          SINGLE ROOM
        </div>
        <div className="flex justify-between gap-3 items-start p-10 border-2 border-blue-950">
          <div className="flex items-start gap-3 md:gap-6 mt-2">
            <img
              className="mt-1"
              src={Plus}
              alt=""
              onClick={() => setShowMore(!showMore)}
            />
            <div className="flex flex-col flex-wrap ">
              <p className="text-sm md:text-[20px] font-bold">VIEW ROOM DETAILS</p>
              {showMore && (
                <ul className="text-[16px] mt-5 space-y-2">
                  {features.map((f) => (
                    <li className="flex gap-3 feature-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="green"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="flex mt-2">
            <h3 className="text-xl md:text-[30px] font-bold">$147</h3>
            <p className="pt-1">/night</p>
          </div>
        </div>
      </div>
      <div >
        <img  src={DoubleRoom} alt="" />
        <div className="text-xl md:text-3xl text-bold text-white text-center py-5 bg-primary_blue">
          DOUBLE ROOM
        </div>
        <div className="flex justify-between gap-3 items-start p-10 border-2 border-blue-950">
          <div className="flex items-start gap-3 md:gap-6 mt-2">
            <img
              className="mt-1"
              src={Plus}
              alt=""
              onClick={() => setShowMore(!showMore)}
            />
            <div className="flex flex-col flex-wrap ">
              <p className="text-sm md:text-[20px] font-bold">VIEW ROOM DETAILS</p>
              {showMore && (
                <ul className="text-[16px] mt-5 space-y-2">
                  {features.map((f) => (
                    <li className="flex gap-3 feature-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="green"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="flex mt-2">
            <h3 className="text-xl md:text-[30px] font-bold">$147</h3>
            <p className="pt-1">/night</p>
          </div>
        </div>
      </div><div >
        <img  src={TwinRoom} alt="" />
        <div className="text-xl md:text-3xl text-bold text-white text-center py-5 bg-primary_blue">
          TWIN ROOM
        </div>
        <div className="flex justify-between gap-3 items-start p-10 border-2 border-blue-950">
          <div className="flex items-start gap-3 md:gap-6 mt-2">
            <img
              className="mt-1"
              src={Plus}
              alt=""
              onClick={() => setShowMore(!showMore)}
            />
            <div className="flex flex-col flex-wrap ">
              <p className="text-sm md:text-[20px] font-bold">VIEW ROOM DETAILS</p>
              {showMore && (
                <ul className="text-[16px] mt-5 space-y-2">
                  {features.map((f) => (
                    <li className="flex gap-3 feature-item">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="green"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="flex mt-2">
            <h3 className="text-xl md:text-[30px] font-bold">$147</h3>
            <p className="pt-1">/night</p>
          </div>
        </div>
      </div>
    </div>
  );
}
