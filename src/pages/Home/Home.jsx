import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import Service from "./Service/Service";
import Spotlight from "./Spotlight/Spotlight";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="max-w-screen-xl px-4 mx-auto my-6">
      <Banner></Banner>
      <Service></Service>
      <Testimonial></Testimonial>
      <Blog></Blog>
      <Spotlight></Spotlight>
    </div>
  );
};

export default Home;
