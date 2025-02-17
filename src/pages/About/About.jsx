import { Helmet } from "react-helmet-async";
import { FaFlag, FaUserPlus } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { BsFillQuestionSquareFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="mx-auto px-4 max-w-screen-xl ">
      <Helmet>
        <title>About | TalentSphere</title>
      </Helmet>
      <h3 className="text-primary-2 text-2xl md:text-4xl font-bold text-center">
        Our Story
      </h3>
      <p className="md:w-3/4 mx-auto  text-gray-600 text-xs md:text-base text-center my-2">
        Simplifying Employee Management for a More Productive Future
      </p>
      <div className="flex flex-col gap-6 mt-10 mb-12">
              <div className="bg-white shadow-lg rounded-lg p-6 ">
              <FaFlag size={40} className="text-secondary-1" />
                
          <h3 className="text-xl mt-2 font-semibold text-primary-2 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600">
            We aim to revolutionize employee management by providing businesses
            with the tools they need to simplify processes, enhance
            productivity, and foster a positive work culture.
          </p>
        </div>
              <div className="bg-white shadow-lg rounded-lg p-6 ">
              <MdOutlineWork size={40} className="text-secondary-1"  />
          <h3 className="text-xl mt-2 font-semibold text-primary-2 mb-4">
            What We Do
          </h3>
          <ul className="text-gray-600 list-disc list-inside">
            <li>
              <strong>Employee Performance Tracking:</strong> Monitor work
              progress and achievements.
            </li>
            <li>
              <strong>Payroll & Benefits Management:</strong> Automate payroll,
              benefits, and compliance.
            </li>
            <li>
              <strong>Team Engagement & Communication:</strong> Foster
              collaboration and efficiency.
            </li>
            <li>
              <strong>Workforce Insights & Optimization:</strong> Leverage data
              for smarter decision-making.
            </li>
          </ul>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 ">
              <BsFillQuestionSquareFill size={40} className="text-secondary-1" />
          <h3 className="text-xl mt-2 font-semibold text-primary-2 mb-4">
            Why Choose Us?
          </h3>
          <p className="text-gray-600">
            At <strong>TalentSphere</strong>, we don’t just manage employees—we empower teams to thrive. 
            Our platform is designed to help businesses create an efficient, engaging, and 
            productive work environment.
          </p>
          <ul className="text-gray-600 list-disc list-inside mt-2">
            <li><strong>User-Friendly & Scalable:</strong> Built to grow with your business.</li>
            <li><strong>Secure & Reliable:</strong> Ensuring compliance and data protection.</li>
            <li><strong>People-First Approach:</strong> Designed to support employees and managers alike.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
