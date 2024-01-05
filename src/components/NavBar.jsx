import React from "react";
import { NavLink } from "react-router-dom";

export default function nav() {
  return (
    <div>
      <nav className="px-8">
        <ul className="flex justify-between items-center max-w-xl lg:max-w-3xl xl:max-w-6xl mx-auto">
          <NavLink
            to="/"
            className="bg-primary_yellow text-center p-4 rounded-b-3xl hidden md:block"
          >
            <h1 className="text-2xl font-bold">Luxury</h1>
            <h3>Hotels</h3>
          </NavLink>
          <div className="flex text-white font-bold  md:gap-12">
            <div className="text-xs md:text-lg px-1.5 py-5">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 p-1 border-b-primary_yellow"
                    : "rounded-lg px-2 py-1 hover:bg-primary_yellow"
                }
              >
                Home
              </NavLink>
            </div>
            <div className="text-xs md:text-lg px-1.5 py-5">
              <NavLink
                to="/facilities"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 p-1 border-b-primary_yellow"
                    : "rounded-lg px-2 py-1 hover:bg-primary_yellow"
                }
              >
                Facilities
              </NavLink>
            </div>
            <div className="text-xs md:text-lg px-1.5 py-5">
              <NavLink
                to="/rooms"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 p-1 border-b-primary_yellow"
                    : "rounded-lg px-2 py-1 hover:bg-primary_yellow"
                }
              >
                Rooms
              </NavLink>
            </div>
            <div className="text-xs md:text-lg px-1.5 py-5">
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-4 p-1 border-b-primary_yellow"
                    : "rounded-lg px-2 py-1 hover:bg-primary_yellow"
                }
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
}
