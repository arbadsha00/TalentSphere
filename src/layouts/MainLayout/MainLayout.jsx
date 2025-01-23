import { Outlet } from "react-router-dom";
import Nav from "../../components/Shared/Nav/Nav";
import Footer from "@/components/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
