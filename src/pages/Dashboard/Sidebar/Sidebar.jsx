import React from "react";
import EmployeeMenu from "./Menu/EmployeeMenu";
import useRole from "@/hooks/useRole";
import HrMenu from "./Menu/HrMenu";
import AdminMenu from "./Menu/AdminMenu";
import GeneralMenu from "./Menu/GeneralMenu";

const Sidebar = () => {
  const [role, isLoading] = useRole();
  return (
    <div>
      <div className="flex flex-col justify-between flex-1 shadow md:min-h-screen bg-banner">
        <nav>
          <GeneralMenu></GeneralMenu>
          {role === "employee" && <EmployeeMenu></EmployeeMenu>}
          {role === "hr" && <HrMenu></HrMenu>}
          {role === "admin" && <AdminMenu></AdminMenu>}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
