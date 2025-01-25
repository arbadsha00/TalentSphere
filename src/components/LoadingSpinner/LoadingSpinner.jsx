import React from 'react';
import logo from "../../assets/Logo-01.png"
const LoadingSpinner = () => {
    return (
        <span className="min-h-screen flex items-center justify-center  ">
            <img className="animate-spin  w-[30px] h-[30px]" src={logo} alt="" />
          </span>
    );
};

export default LoadingSpinner;