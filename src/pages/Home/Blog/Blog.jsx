import HomeTitle from "../HomeTitle/HomeTitle";
import { Player } from "@lottiefiles/react-lottie-player";
import blogAnim from "../../../assets/blog.json";
import blog1 from "../../../assets/blog1.png";
import blog2 from "../../../assets/blog2.png";
import blog3 from "../../../assets/blog3.png";
import blog4 from "../../../assets/blog4.png";
import blog5 from "../../../assets/blog5.png";
import blog6 from "../../../assets/blog6.png";
import { Button } from "@/components/ui/button";
import { IoIosArrowForward } from "react-icons/io";
const Blog = () => {
  const blogPosts = [
    {
      title: "Maximizing Employee Engagement: Proven Strategies for 2025",
      subtitle:
        "Learn how to boost morale and productivity with innovative engagement strategies.",
      img: blog3,
    },
    {
      title: "The Future of Remote Work: Trends You Need to Know",
      subtitle:
        "Explore the evolving landscape of remote work and its impact on workforce management.",
      img: blog2,
    },
    {
      title: "Top 5 Tools for Tracking Employee Performance",
      subtitle:
        "Discover the best tools to measure and improve employee performance in real-time.",
      img: blog4,
    },
    {
      title: "Effective Onboarding: The Key to Long-Term Employee Success",
      subtitle:
        "Ensure your new hires feel welcomed and ready to succeed from day one.",
      img: blog5,
    },
    {
      title: "The Importance of Employee Feedback and How to Get It Right",
      subtitle:
        "Unlock the power of feedback to create a culture of continuous improvement.",
      img: blog6,
    },
    {
      title: "Mastering Time Management in the Workplace",
      subtitle:
        "Tips to improve productivity and reduce stress through better time management.",
      img: blog1,
    },
  ];
  return (
    <div className="my-10 px-4">
      <Player
        autoplay
        loop
        src={blogAnim}
        style={{ height: "250px", width: "250px" }}
      ></Player>
      <HomeTitle
        title=" Insights & Ideas"
        subTitle=" Expert Tips, News, and Best Practices for Workforce Management"
      ></HomeTitle>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-white max-w-[500px] mx-auto rounded-lg shadow-lg hover:shadow-xl transition duration-300 "
          >
            <img
              src={post.img}
              alt={post.title}
              className=" h-[300px] object-cover w-[500px] rounded-md mb-4"
            />
            <div className="p-4 space-y-2">
              <h3 className="text-xl  font-semibold text-gray-800">
                {post.title}
              </h3>
              <p className="text-gray-600 mt-2">{post.subtitle}</p>
              <Button className="bg-primary-1">
                Read More
                <IoIosArrowForward />
              </Button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog;
