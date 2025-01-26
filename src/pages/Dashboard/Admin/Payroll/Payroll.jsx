import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
import { useContext } from "react";
const Payroll = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const {
    data: payments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/payments`);
      return data;
    },
  });
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <h3 className="text-primary-2 bg-sec text-center mb-3 text-2xl md:text-3xl font-bold">
        All Payment Requests
      </h3>
      <Separator className="my-4" />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Month</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Payment date</TableHead>
            <TableHead>Pay</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment._id}>
              <TableCell className="font-medium">{payment.name}</TableCell>
              <TableCell>${payment.salary}</TableCell>
              <TableCell>{payment.month}</TableCell>
              <TableCell>{payment.year}</TableCell>
              <TableCell>{payment.date}</TableCell>
              <TableCell>
                <Button className="bg-primary-1">{payment.status}</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Payroll;
