import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import Service from "./Service/Service";
import Spotlight from "./Spotlight/Spotlight";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="max-w-screen-xl  mx-auto my-6">
      <Banner></Banner>
      <Service></Service>
      <Testimonial></Testimonial>
      <Spotlight></Spotlight>
      <Blog></Blog>
      
    </div>
  );
};

export default Home;
