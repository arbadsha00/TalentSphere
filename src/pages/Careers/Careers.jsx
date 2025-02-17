import { Button } from "@/components/ui/button";
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        <div className="p-6 border rounded-lg shadow-md hover:shadow-lg">
          <h5 className="text-xl font-semibold text-primary-2">
            Software Engineer
          </h5>
          <p className="text-gray-600 text-sm mt-2">
            As a Software Engineer, you will contribute to the design and
            development of innovative software solutions.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Collaborate with cross-functional teams</li>
            <li>Develop clean and efficient code</li>
            <li>Participate in code reviews</li>
          </ul>
          <Button className="mt-4  bg-primary-1">Apply Now</Button>
        </div>

        <div className="p-6 border rounded-lg shadow-md hover:shadow-lg">
          <h5 className="text-xl font-semibold text-primary-2">
            Marketing Manager
          </h5>
          <p className="text-gray-600 text-sm mt-2">
            We're seeking a creative Marketing Manager to lead campaigns, drive
            brand awareness, and develop marketing strategies.
          </p>
          <ul className="list-disc list-inside text-gray-600 mt-4">
            <li>Develop and implement marketing strategies</li>
            <li>Analyze market trends and performance</li>
            <li>Lead digital marketing efforts</li>
          </ul>
          <Button className="mt-4  bg-primary-1">Apply Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Careers;
