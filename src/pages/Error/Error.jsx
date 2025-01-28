import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


const Error = () => {
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-banner p-10 md:p-16 rounded-3xl text-center">
        <h3 className="text-7xl md:text-9xl text-primary-2 font-bold">404</h3>
        <Link to='/'><Button className="bg-primary-1 mt-2">Return Home</Button></Link>
</div>
      
    </div>
  );
};

export default Error;
