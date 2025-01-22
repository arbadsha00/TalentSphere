import React from "react";
import Banner from "./Banner/Banner";
import Service from "./Service/Service";

const Home = () => {
  return (
    <div className="max-w-screen-xl px-4 mx-auto my-6">
      <Banner></Banner>
      <Service></Service>
    </div>
  );
};

export default Home;
