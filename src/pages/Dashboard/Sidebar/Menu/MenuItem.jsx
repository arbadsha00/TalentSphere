import React from "react";
import { NavLink } from "react-router-dom";
const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-2  transition-colors duration-300 transform hover:bg-primary-2 hover:text-white  ${
          isActive ? "bg-primary-1  text-white" : "text-primary-2"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuItem;
