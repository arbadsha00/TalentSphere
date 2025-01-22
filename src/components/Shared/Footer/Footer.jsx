import logo from "../../../assets/Logo-01.png";

import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { AiFillDribbbleCircle } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="primary-gradient py-10 flex gap-2 flex-col justify-center items-center text-center">
      <img src={logo} className="w-[50px] h-[50px]" alt="" />
      <h4 className="text-white text-xl font-bold">TalentSphere</h4>
      <p className="text-xs text-gray-300">
        Copyright © 2025 - All right reserved
      </p>
      <div className="grid grid-flow-col gap-4 text-3xl text-white">
        <a>
          <FaFacebook />
        </a>
        <a>
          <FaGithub />
        </a>
        <a>
          <AiFillDribbbleCircle />
        </a>
      </div>
    </div>
  );
};

export default Footer;
