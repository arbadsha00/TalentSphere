import { Player } from "@lottiefiles/react-lottie-player";
import HomeTitle from "../HomeTitle/HomeTitle";
import qaAnim from "../../../assets/qa.json"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
      <div className="mt-10 px-4">
           <Player
                  autoplay
                  loop
                  src={qaAnim}
                  style={{ height: "250px", width: "250px" }}
                ></Player>
      <HomeTitle
        title="Frequently Asked Questions (FAQs)"
        subTitle="Everything you need to know about managing employees efficiently.Quick answers to help you navigate seamlessly."
      ></HomeTitle>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-xl text-primary-2">What is TalentSphere, and who can use it?</AccordionTrigger>
          <AccordionContent className="text-gray-600 text-base">
          TalentSphere is an Employee Management System designed for businesses to manage employee data, performance, and payments efficiently. It is used by Employees, HR personnel, and Admins, each with specific roles.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-xl text-primary-2">How does TalentSphere help with employee management?</AccordionTrigger>
          <AccordionContent className="text-gray-600 text-base">
          TalentSphere streamlines HR tasks, including employee verification, salary processing, work tracking, and performance evaluation, ensuring an organized workflow.
          </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
          <AccordionTrigger className="text-xl text-primary-2">How is data security handled in TalentSphere?</AccordionTrigger>
          <AccordionContent className="text-gray-600 text-base">
          TalentSphere uses JWT authentication to secure user sessions, role-based access control, and Firebase authentication for secure logins.
          </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
          <AccordionTrigger className="text-xl text-primary-2"> How do I submit a task in the Work-Sheet section?</AccordionTrigger>
          <AccordionContent className="text-gray-600 text-base">
          Go to the Work-Sheet section, select the task type (Sales, Support, etc.), enter hours worked, choose a date (default: today), and click submit.
          </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
          <AccordionTrigger className="text-xl text-primary-2">What happens if my salary information is incorrect?</AccordionTrigger>
          <AccordionContent className="text-gray-600 text-base">
          Contact HR through the Contact Us form or speak to your HR manager to resolve salary discrepancies.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQs;
