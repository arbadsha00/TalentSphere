import { Button } from "@/components/ui/button";

import hero from "../../../assets/hero.png";
const Banner = () => {
  return (
    <div className="my-6 bg-banner px-6 pt-6 pb-16 text-center space-y-6 ">
      <img className="mx-auto w-52  md:w-80" src={hero} alt="" />
      <h1 className="text-2xl md:text-4xl font-bold text-primary-2 ">
        Empowering Teams Through <br />
        <span className="primary-gradient bg-clip-text text-transparent">
          Efficient Employee Management
        </span>
      </h1>
      <p className=" text-xs md:text-base mt-4 md:w-3/4 mx-auto text-gray-600">
        Unlock the full potential of your employees by providing them with the
        tools, support, and development opportunities they need to succeed,
        ensuring a more efficient, productive, and collaborative work
        environment.
      </p>
      <Button className="md:text-lg bg-primary-1 rounded-full">
        Get Started
      </Button>
    </div>
  );
};

export default Banner;
