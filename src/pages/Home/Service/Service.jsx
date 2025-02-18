import HomeTitle from "../HomeTitle/HomeTitle";
import serviceAnim from "../../../assets/gears.json";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  FaUserCog,
  FaChartLine,
  FaMoneyCheckAlt,
  FaGraduationCap,
  FaComments,
  FaUserPlus,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
const Service = () => {
  const services = [
    {
      title: "Employee Records Management",
      description:
        "Efficiently store, update, and manage employee profiles, including personal details, job roles, and contact information.",
      icon: <FaUserCog size={40} className="text-secondary-1" />,
    },
    {
      title: "Performance Tracking",
      description:
        "Monitor and evaluate employee performance with customizable metrics and reports to ensure continuous growth and productivity.",
      icon: <FaChartLine size={40} className="text-secondary-1" />,
    },
    {
      title: "Payroll & Compensation",
      description:
        "Streamline payroll processing, track compensation details, and manage deductions, bonuses, and reimbursements for employees.",
      icon: <FaMoneyCheckAlt size={40} className="text-secondary-1" />,
    },
    {
      title: "Employee Training & Development",
      description:
        "Provide access to training programs and track employee learning progress to promote continuous personal and professional development.",
      icon: <FaGraduationCap size={40} className="text-secondary-1" />,
    },
    {
      title: "Employee Feedback & Surveys",
      description:
        "Gather valuable employee feedback and insights through surveys to improve engagement and create a positive work environment.",
      icon: <FaComments size={40} className="text-secondary-1" />,
    },
    {
      title: "Recruitment & Onboarding",
      description:
        "Simplify your hiring process, from job posting to interview scheduling, and create an efficient onboarding experience for new hires.",
      icon: <FaUserPlus size={40} className="text-secondary-1" />,
    },
  ];
  return (
    <div className="mt-10 px-4">
      <Player
        autoplay
        loop
        src={serviceAnim}
        style={{ height: "250px", width: "250px" }}
      ></Player>
      <HomeTitle
        title="Optimizing Employee Operations"
        subTitle="Unlock the full potential of your team with our innovative, employee-centric management services."
      ></HomeTitle>
      <section className="overflow-x-auto md:overflow-x-visible ">
        <div className="flex md:grid md:w-4/5 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white mx-auto flex-shrink-0 shadow-lg rounded-lg p-6 transition transform hover:scale-105 max-w-72 justify-between flex flex-col"
            >
              {service.icon}
              <h3 className="text-xl mt-2 font-semibold text-primary-2 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <Button className="bg-primary-2 mt-2 max-w-fit">Learn More</Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;
