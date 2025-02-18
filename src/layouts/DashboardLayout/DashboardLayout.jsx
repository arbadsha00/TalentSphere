import Footer from "@/components/Shared/Footer/Footer";
import Nav from "@/components/Shared/Nav/Nav";
import Sidebar from "@/pages/Dashboard/Sidebar/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const DashboardLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <section className="relative min-h-screen md:flex  mx-auto ">
              <div className="md:w-64 mx-auto">
              <Sidebar />
       </div>
        <div className="flex-1   ">
          <div className="p-5">
            {/* Outlet for dynamic contents */}
            <Outlet />
          </div>
        </div>
      </section>
 
      <ToastContainer />
    </div>
  );
};

export default DashboardLayout;
