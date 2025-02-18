import { Player } from '@lottiefiles/react-lottie-player';
import priceAnim from "../../../assets/price.json"
import HomeTitle from '../HomeTitle/HomeTitle';
import { FaCheckCircle } from "react-icons/fa";
import { Button } from '@/components/ui/button';
const pricingPlans = [
    {
      title: "Free",
      price: "$0/month",
      description: "Great for individuals or small teams starting out.",
      features: ["Up to 5 employees", "Basic Task Management", "Limited Reports"],
      highlight: false,
    },
    {
      title: "Pro",
      price: "$49/month",
      description: "Best for growing businesses with advanced HR needs.",
      features: ["Up to 50 employees", "Performance Tracking", "Payroll Management"],
      highlight: true,
    },
    {
      title: "Basic",
      price: "$19/month",
      description: "Perfect for small teams with essential HR tools.",
      features: ["Up to 10 employees", "Task & Payroll Management", "Basic Reports"],
      highlight: false,
    },
  ];
const Pricing = () => {
    return (
        <div className="mt-10 px-4">
            <Player
        autoplay
        loop
        src={priceAnim}
        style={{ height: "230px", width: "230px" }}
      ></Player>
      <HomeTitle
        title="Flexible Pricing for Every Team"
        subTitle="Choose the perfect plan to streamline your employee management—simple, transparent, and built to scale."
            ></HomeTitle>
            <section className="overflow-x-auto lg:overflow-x-visible py-10">
      <div className="flex lg:grid md:w-4/5 mx-auto md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`mx-auto flex-shrink-0 shadow-lg rounded-lg p-6 transition transform hover:scale-105 max-w-80 flex flex-col item border border-gray-200 ${
              plan.highlight ? "bg-banner " : "bg-white"
            }`}
          >
            <h3 className="text-2xl font-semibold text-primary-2 text-center">
              {plan.title}
            </h3>
            <p className={` mt-2 text-center ${plan.highlight ? "text-primary-1 font-bold text-2xl" : "text-lg text-gray-600"}`}>
              {plan.price}
            </p>
            <p className={`mt-4 ${plan.highlight ? "text-primary-2" : "text-gray-600"}`}>
              {plan.description}
            </p>
            <ul className="mt-4 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className={`flex items-center gap-2 ${plan.highlight ? "text-primary-2" : "text-gray-700"}`}>
                  <FaCheckCircle className="text-secondary-1" /> {feature}
                </li>
              ))}
            </ul>
            <Button className={`mt-4 w-full ${plan.highlight ? "bg-primary-1" : "bg-primary-2"}`}>
              {plan.highlight ? "Try Now" : "Get Started"}
            </Button>
          </div>
        ))}
      </div>
    </section>
        </div>
    );
};

export default Pricing;