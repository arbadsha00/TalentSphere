import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import AuthContext from "@/provider/AuthContext";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import PayModal from "./PayModal/PayModal";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    data: employees = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["employees", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/employee`);
      return data;
    },
  });
  const handleToggle = async (id) => {
    const result = await axiosSecure.patch(`/employee/${id}`);
    if (result.data.modifiedCount) {
      toast.success("Verification Status Updated");
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
        Employee List
      </h3>
      <Separator className="my-4" />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Bank Account</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Verified</TableHead>
            <TableHead>Pay</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <TableRow key={employee._id}>
              <TableCell className="font-medium">{employee.name}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.account}</TableCell>
              <TableCell>${employee.salary}</TableCell>
              <TableCell>
                <Switch
                  onCheckedChange={() => handleToggle(employee._id)}
                  checked={employee.isVerified || false}
                  id={`verify-${employee._id}`}
                />
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => openModal(employee)}
                  disabled={!employee.isVerified}
                  className="text-xs bg-primary-1"
                >
                  Pay
                </Button>
              </TableCell>
              <TableCell>
                <Link to={`/dashboard/details/${employee.email}`}>
                  <Button className="text-xs bg-secondary-1">Details</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PayModal
        closeModal={closeModal}
        isOpen={isModalOpen}
        employee={selectedEmployee}
      ></PayModal>
    </div>
  );
};

export default EmployeeList;
