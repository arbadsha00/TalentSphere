import Banner from "./Banner/Banner";
import Service from "./Service/Service";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="max-w-screen-xl px-4 mx-auto my-6">
      <Banner></Banner>
      <Service></Service>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
