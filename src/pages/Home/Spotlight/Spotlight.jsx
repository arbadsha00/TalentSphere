import HomeTitle from "../HomeTitle/HomeTitle";
import { Player } from "@lottiefiles/react-lottie-player";
import starAnim from "../../../assets/star.json";
const Spotlight = () => {
  const spotlight = [
    {
      name: "John Doe",
      role: "Project Manager",
      image: "/src/assets/spotlight1 -01.png",
    },
    {
      name: "John Cena",
      role: "HR Specialist",
      image: "/src/assets/spotlight2 -01.png",
    },
    {
      name: "Carlos Robartos",
      role: "Software Engineer",
      image: "/src/assets/spotlight3 -01.png",
    },
  ];
  return (
    <div className="mt-10 px-4">
      <Player
        autoplay
        loop
        src={starAnim}
        style={{ height: "230px", width: "230px" }}
      ></Player>
      <HomeTitle
        title="Meet the Stars of Our Community"
        subTitle="Highlighting exceptional team members and their success stories."
      ></HomeTitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {spotlight.map((employee, index) => (
          <div key={index} className="text-center ">
            <img
              src={employee.image}
              alt={employee.name}
              className="max-w-56 max-h-56 border-4 border-secondary-1 rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800">
              {employee.name}
            </h3>
            <p className="text-sm text-gray-500">{employee.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spotlight;
