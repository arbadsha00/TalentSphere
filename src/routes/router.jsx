import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import ContactUs from "@/pages/ContactUs/ContactUs";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "@/pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      },
    ],
  },
]);
export default router;
