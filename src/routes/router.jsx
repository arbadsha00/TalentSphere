import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import ContactUs from "@/pages/ContactUs/ContactUs";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import WorkSheet from "@/pages/Dashboard/Employee/WorkSheet/WorkSheet";
import PaymentHistory from "@/pages/Dashboard/Employee/PaymentHistory/PaymentHistory";
import EmployeeRoute from "./EmployeeRoute";
import HrRoute from "./HrRoute";
import EmployeeList from "@/pages/Dashboard/Hr/EmployeeList/EmployeeList";
import Progress from "@/pages/Dashboard/Hr/Progress/Progress";
import Details from "@/pages/Dashboard/Hr/Details/Details";
import AdminRoute from "./AdminRoute";
import Payroll from "@/pages/Dashboard/Admin/Payroll/Payroll";
import AllEmployeeList from "@/pages/Dashboard/Admin/AllEmployeeList/AllEmployeeList";
import Messages from "@/pages/Dashboard/Admin/Messages/Messages";
import Dashboard from "@/pages/Dashboard/Dashboard";
import About from "@/pages/About/About";
import Careers from "@/pages/Careers/Careers";
import Profile from "@/pages/Dashboard/Profile/Profile";

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
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/careers",
        element: <Careers></Careers>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <Error></Error>,
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "work-sheet",
        element: (
          <PrivateRoute>
            <EmployeeRoute>
              <WorkSheet></WorkSheet>
            </EmployeeRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <EmployeeRoute>
              <PaymentHistory></PaymentHistory>
            </EmployeeRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "employee-list",
        element: (
          <PrivateRoute>
            <HrRoute>
              <EmployeeList></EmployeeList>
            </HrRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "progress",
        element: (
          <PrivateRoute>
            <HrRoute>
              <Progress></Progress>
            </HrRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "details/:email",
        element: (
          <PrivateRoute>
            <HrRoute>
              <Details></Details>
            </HrRoute>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `${import.meta.env.VITE_API_URL}/employee/details/${params.email}`
          ),
      },
      {
        path: "payroll",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Payroll></Payroll>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "messages",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Messages></Messages>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "all-employee-list",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllEmployeeList></AllEmployeeList>
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
