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
        path: "details",
        element: (
          <PrivateRoute>
            <HrRoute>
              <Details></Details>
            </HrRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
