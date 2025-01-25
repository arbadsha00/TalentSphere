import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import { useContext } from "react";
import AuthContext from "@/provider/AuthContext";
const Progress = () => {
  const [name, setName] = useState("");
  const [month, setMonth] = useState("");
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: employees = [] } = useQuery({
    queryKey: ["employees", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/employee`);
      return data;
    },
  });
  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allTasks", name, month],
    queryFn: async () => {
      const { data } = await axiosSecure(`/tasks/`, {
        params: {
          name,
          month,
        },
      });
      return data;
    },
  });

  const handleFilter = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const month = form.get("month");
    setMonth(month);
    setName(name);
    refetch();
  };
  if (isLoading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div>
      <form
        onSubmit={handleFilter}
        className="flex flex-col md:flex-row md:items-center gap-2 "
      >
        <Select name="name">
          <SelectTrigger className="">
            <SelectValue placeholder="Employee name" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Employee name</SelectLabel>
              {employees.map((employee) => (
                <SelectItem key={employee._id} value={employee.name}>
                  {employee.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select name="month">
          <SelectTrigger className="">
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Month</SelectLabel>
              <SelectItem value="01">January</SelectItem>
              <SelectItem value="02">February</SelectItem>
              <SelectItem value="03">March</SelectItem>
              <SelectItem value="04">April</SelectItem>
              <SelectItem value="05">May</SelectItem>
              <SelectItem value="06">June</SelectItem>
              <SelectItem value="07">July</SelectItem>
              <SelectItem value="08">August</SelectItem>
              <SelectItem value="09">September</SelectItem>
              <SelectItem value="10">October</SelectItem>
              <SelectItem value="11">November</SelectItem>
              <SelectItem value="12">December</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Button className="bg-primary-1">Filter</Button>
      </form>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Employee</TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Hours</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task._id}>
              <TableCell className="font-medium">{task.name}</TableCell>
              <TableCell>{task.task}</TableCell>
              <TableCell>{task.hour}</TableCell>
              <TableCell>{format(new Date(task.date), "PPP")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Progress;
