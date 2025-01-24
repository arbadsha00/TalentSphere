import useRole from "@/hooks/useRole";
import logo from "../assets/Logo-01.png"
import { Navigate } from "react-router-dom";

const EmployeeRoute = ({ children }) => {
    const [role, isLoading] = useRole()
    if (isLoading) {
        return (
          <span className="min-h-screen flex items-center justify-center  ">
            <img className="animate-spin  w-[30px] h-[30px]" src={logo} alt="" />
          </span>
        );
    }
    if (role === 'employee') return children
    return <Navigate to='/dashboard' replace='true' />
};

export default EmployeeRoute;