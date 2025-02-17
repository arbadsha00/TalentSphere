import { Helmet } from "react-helmet-async";

const Careers = () => {
  return (
    <div className="mx-auto px-4 max-w-screen-xl ">
      <Helmet>
        <title>Careers | TalentSphere</title>
      </Helmet>
      <h3 className="text-primary-2 text-2xl md:text-4xl font-bold text-center">
        Join Our Team
      </h3>
      <p className="md:w-3/4 mx-auto  text-gray-600 text-xs md:text-base text-center my-2">
        Build Your Career with Innovation, Growth, and Impact
      </p>
    </div>
  );
};

export default Careers;
