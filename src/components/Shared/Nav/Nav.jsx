import React from "react";
import logo from "../../../assets/Logo-01.png";

import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
const links = (
  <>
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? " text-primary-1 text-base font-semibold " : "text-base"
        }
        to="/"
      >
        Home
      </NavLink>
    </li>
    {/* <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? " text-primary-1 text-base font-semibold " : "text-base"
        }
        to="/dashboard"
      >
        Dashboard
      </NavLink>
    </li> */}
    <li>
      <NavLink
        className={({ isActive }) =>
          isActive ? " text-primary-1 text-base font-semibold " : "text-base"
        }
        to="/contact"
      >
        Contact Us
      </NavLink>
    </li>
  </>
);
const Nav = () => {
  return (
    <div className="max-w-screen-xl mx-auto  bg-base-100/75   sticky top-0 z-40  my-6 backdrop-blur rounded-full">
      <div className="p-2 border-2 rounded-full  flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} width={50} height={50} alt="" />
          <h4 className="text-2xl hidden md:flex font-bold text-primary-2">
            TalentSphere
          </h4>
        </div>
        <ul className="flex gap-2 md:gap-6">{links}</ul>
        <Button className="rounded-full text-lg bg-primary-2">Login </Button>
      </div>
    </div>
  );
};

export default Nav;
