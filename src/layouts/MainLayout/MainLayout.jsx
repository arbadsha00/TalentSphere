import { Outlet } from "react-router-dom";
import Nav from "../../components/Shared/Nav/Nav";
import Footer from "@/components/Shared/Footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div >
      <Nav></Nav>
      <div className="min-h-[calc(100vh-340px)]">
      <Outlet></Outlet>
      </div>
     
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default MainLayout;
