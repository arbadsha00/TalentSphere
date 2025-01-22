import HomeTitle from "../HomeTitle/HomeTitle";
import { Player } from "@lottiefiles/react-lottie-player";
import reviewAnim from "../../../assets/review.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Testimonial = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "HR Manager",
      feedback:
        "This system revolutionized how we manage employee records and performance tracking. Highly recommended!",
    },
    {
      name: "Jane Smith",
      title: "Operations Director",
      feedback:
        "Exceptional tools for payroll and employee development. It's made our processes more efficient and transparent.",
    },
    {
      name: "Sam Wilson",
      title: "Team Lead",
      feedback:
        "The onboarding, performance tracking and recruitment tools saved us hours every week. Great for fast-growing companies!",
    },
    {
      name: "Emily Johnson",
      title: "CEO",
      feedback:
        "Our employee engagement has significantly improved since implementing this solution. A game-changer for productivity.",
    },
  ];
  return (
    <div className="mt-10">
      <Player
        autoplay
        loop
        src={reviewAnim}
        style={{ height: "250px", width: "250px" }}
      ></Player>
      <HomeTitle
        title="Your Success, Our Shared Journey"
        subTitle="Hear from our valued employees and clients as they share their experiences of growth, support, and exceptional service."
      ></HomeTitle>
      <section>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3} // Adjust depending on screen size
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // Slide change delay in milliseconds
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper rounded-xl"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="p-6  shadow-lg flex flex-col  rounded-lg text-center items-center bg-banner ">
                <p className="text-gray-700 mb-4">
                  {" "}
                  <FaQuoteLeft className="text-primary-1" />
                  {testimonial.feedback}{" "}
                  <FaQuoteRight className="ml-auto text-primary-1" />
                </p>
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <p className="text-sm text-primary-1">{testimonial.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonial;
