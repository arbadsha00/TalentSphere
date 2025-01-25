import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import AuthContext from "@/provider/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { IoGridSharp } from "react-icons/io5";
import { FaTableList } from "react-icons/fa6";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "react-toastify";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import UpdateModal from "./UpdateModal/UpdateModal";
const AllEmployeeList = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    data: allEmployees = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allEmployees", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users`);
      return data;
    },
  });
  const [isCardView, setIsCardView] = useState(false);
  const handleHR = async (id) => {
    const result = await axiosSecure.patch(`/users/hr/${id}`);
    if (result.data.modifiedCount) {
      toast.success("Promoted to HR.");
      refetch();
    }
  };
  const handleFire = async (id) => {
    const result = await axiosSecure.patch(`/users/fire/${id}`);
    if (result.data.modifiedCount) {
      toast.success("Employee Fired");
      refetch();
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const openModal = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedEmployee({});
    setIsModalOpen(false);
  };
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <h3 className="text-primary-2 bg-sec text-center mb-3 text-2xl md:text-3xl font-bold">
        All Employees List
      </h3>
      <div className="flex items-center justify-center">
        <Button
          onClick={() => setIsCardView(false)}
          className={`rounded-r-none ${
            isCardView ? "bg-primary-2" : "bg-secondary-1"
          }`}
        >
          <FaTableList />
        </Button>
        <Button
          onClick={() => setIsCardView(true)}
          className={`rounded-l-none ${
            isCardView ? "bg-secondary-1" : " bg-primary-2"
          }`}
        >
          <IoGridSharp />
        </Button>
      </div>
      <Separator className="my-4" />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Designation</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Update Salary</TableHead>
            <TableHead>Make HR</TableHead>
            <TableHead>Fire</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allEmployees.map((employee) => (
            <TableRow key={employee._id}>
              <TableCell className="font-medium">{employee.name}</TableCell>
              <TableCell>{employee.designation}</TableCell>
              <TableCell>${employee.salary}</TableCell>
              <TableCell>
                <Button
                  onClick={() => openModal(employee)}
                  className="text-xs bg-secondary-1"
                >
                  Update
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => handleHR(employee._id)}
                  disabled={employee.role === "hr"}
                  className="text-xs bg-primary-1"
                >
                  {employee.role === "hr" ? "HR" : "Make HR"}
                </Button>
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => handleFire(employee._id)}
                  disabled={employee?.status === "fired"}
                  className="text-xs bg-red-500"
                >
                  {employee?.status === "fired" ? "Fired" : "Fire"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <UpdateModal
        refetch={refetch}
        closeModal={closeModal}
        isOpen={isModalOpen}
        employee={selectedEmployee}
      ></UpdateModal>
    </div>
  );
};

export default AllEmployeeList;
