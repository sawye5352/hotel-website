import React from "react";
import ContactUsArrow from "../assets/ContactUsArrow.svg";

export default function ContactForm() {
  return (
    <div >
      <div className="pt-10 lg:pt-20 ">
        <h3 className="text-md text-center lg:text-start lg:text-3lg text-blue-950 mb-5 font-bold mr-5">
          WE ARE HERE FOR YOU
        </h3>
        <p className="text-lg text-center  lg:text-start lg:text-2lg text-blue-950 mr-5">
          At Luxury Hotels, we take our customers seriously. Do you have any
          enquiries, compaints or requests, please forward it to our support
          desk and we will get back to you as soon as possible.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start py-20 gap-10">
        <div className="flex flex-col gap-5 ">
          <p className="text-blue-950 text-center lg:text-start lg:text-[21px] mr-5">
            497 Evergreen Rd. Roseville,
            <br /> CA 95673
          </p>
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-5 justify-center lg:justify-start mr-5"
          >
            <p className="text-blue-950 lg:text-[21px] font-bold ">View Map</p>
            <img className="hidden lg:block" src={ContactUsArrow} alt="" />
          </a>
          <p className="text-blue-950  lg:text-[21px]">
            Phone: +44 345 678 903
            <br /> Email: luxury_hotels@gmail.com
          </p>
        </div>
        <form action="" className="space-y-3 drop-shadow">
          <div className="flex flex-col gap-1">
            <label className="text-blue-950 lg:text-[21px]" htmlFor="">
              Name
            </label>
            <input
              className="w-[200px] lg:w-[350px] lg:h-[40px] border-2 border-opacity-50 border-blue-950"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-blue-950 lg:text-[21px]" htmlFor="">
              Email Address
            </label>
            <input
              className="w-[200px] lg:w-[350px] lg:h-[40px] border-2 border-opacity-50 border-blue-950"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-blue-950 lg:text-[21px]" htmlFor="">
              Message
            </label>
            <input
              className="w-[200px] h-[100px] lg:w-[350px] lg:h-[40px] border-2 border-opacity-50 border-blue-950"
              type="text"
            />
          </div>
          <div className="flex lg:float-end">
            <button
              type="submit"
              className="bg-primary_yellow px-3 py-2 rounded-lg mt-3 hover:bg-yellow-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
