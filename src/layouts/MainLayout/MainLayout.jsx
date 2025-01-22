import { Outlet } from "react-router-dom";
import Nav from "../../components/Shared/Nav/Nav";
import Footer from "@/components/Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Nav></Nav>
          <Outlet></Outlet>
          <Footer></Footer>
    </div>
  );
};

export default MainLayout;
