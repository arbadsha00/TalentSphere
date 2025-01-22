import React from "react";

const HomeTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center my-6">
      <h3 className="text-primary-2 text-2xl md:text-4xl font-bold">{title}</h3>
      <p className="md:w-3/4 mx-auto  text-gray-600 text-xs md:text-base text-center my-2">
        {subTitle}
      </p>
    </div>
  );
};

export default HomeTitle;
