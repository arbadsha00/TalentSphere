import AuthContext from "@/provider/AuthContext";
import { useContext } from "react";
import logo from "../assets/Logo-01.png";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <span className="min-h-screen flex items-center justify-center  ">
        <img className="animate-spin  w-[30px] h-[30px]" src={logo} alt="" />
      </span>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
