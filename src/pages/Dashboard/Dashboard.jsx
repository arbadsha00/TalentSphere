import React from "react";
import hero from "../../assets/hero.png";
import { Helmet } from "react-helmet-async";
const Dashboard = () => {
  return (
    <div>
      <Helmet>
        <title>Dashboard | TalentSphere</title>
      </Helmet>
      <img className="mx-auto w-40 mt-10 md:w-64" src={hero} alt="" />
      <h3 className="text-2xl md:text-4xl font-bold text-center mt-6 text-primary-1">
        Welcome to Dashboard
      </h3>
      <p className="text-center text-xs md:text-base text-gray-500 mt-1">
        Your Centralized Platform for Seamless Workflow, Data-Driven Decisions,
        and Real-Time Updates
      </p>
    </div>
  );
};

export default Dashboard;
