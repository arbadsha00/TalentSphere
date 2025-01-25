import React from "react";
import MenuItem from "./MenuItem";
import { FaListAlt } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
const HrMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaListAlt}
        label="Employee-list"
        address="employee-list"
      />
      <MenuItem icon={GiProgression} label="Progress" address="progress" />
    </>
  );
};

export default HrMenu;
