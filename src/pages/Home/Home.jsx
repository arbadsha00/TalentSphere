import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import Service from "./Service/Service";
import Spotlight from "./Spotlight/Spotlight";
import Testimonial from "./Testimonial/Testimonial";
import FAQs from "./FAQs/FAQs";
import Pricing from "./Pricing/Pricing";
import Client from "./Client/Client";

const Home = () => {
  return (
    <div className="max-w-screen-xl  mx-auto my-6">
      <Helmet>
        <title>Home | TalentSphere</title>
      </Helmet>
      <Banner></Banner>
      <Service></Service>
      <Testimonial></Testimonial>
      <Spotlight></Spotlight>
      <Pricing></Pricing>
      <FAQs></FAQs>
   
      <Blog></Blog>
      <Client></Client>
    </div>
  );
};

export default Home;
