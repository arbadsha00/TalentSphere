import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "react-toastify";
const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const message = form.get("message");
    const messageInfo = {
      email,
      message,
    };
    axios
      .post(`${import.meta.env.VITE_API_URL}/messages`, messageInfo)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Message Sent Successfully");
        
        }
      });
  };
  return (
    <div className="mx-auto px-4 max-w-screen-xl ">
      <h3 className="text-primary-2 text-2xl md:text-4xl font-bold text-center">
        Contact Us
      </h3>
      <p className="md:w-3/4 mx-auto  text-gray-600 text-xs md:text-base text-center my-2">
        We’d love to hear from you! Reach out to us with your questions,
        feedback, or inquiries.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-banner shadow-lg p-10 max-w-xl mx-auto space-y-2 mt-10"
      >
        <Input
          required
          name="email"
          className="bg-white/20"
          type="email"
          placeholder="Email"
        />
        <Textarea
          required
          name="message"
          className="bg-white/20"
          placeholder="Type your message here."
        />
        <Button className="w-full bg-primary-1">Send Message</Button>
      </form>
    </div>
  );
};

export default ContactUs;
