import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import logo from "../../../../assets/Logo-01.png";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "@/provider/AuthContext";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
const WorkSheet = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [date, setDate] = useState(new Date());

  //
  const {
    data: tasks = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure(`/tasks/${user?.email}`);
      return data;
    },
  });

  const handleAdd = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const task = form.get("task");
    const hour = form.get("hour");
    const taskInfo = {
      email: user?.email,
      task,
      hour: Number(hour),
      date: date.toISOString(),
    };
    const result = await axiosSecure.post("/tasks", taskInfo);
    if (result.data.insertedId) {
      toast.success("Task added successfully");
      refetch();
    }
  };
  if (isLoading) {
    return (
      <span className="min-h-screen flex items-center justify-center  ">
        <img className="animate-spin  w-[30px] h-[30px]" src={logo} alt="" />
      </span>
    );
  }
  return (
    <div>
      <h3 className="text-primary-2 bg-sec text-center mb-3 text-2xl md:text-3xl font-bold">
        Add Task
      </h3>
      <form onSubmit={handleAdd} className="md:flex items-center gap-2 ">
        <Select name="task" required>
          <SelectTrigger className="">
            <SelectValue placeholder="Task" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tasks</SelectLabel>
              <SelectItem value="Sales">Sales</SelectItem>
              <SelectItem value="Support">Support</SelectItem>
              <SelectItem value="Content">Content</SelectItem>
              <SelectItem value="Paper-work">Paper-work</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input
          required
          name="hour"
          type="number"
          className=""
          placeholder="Hours"
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button className="bg-primary-1">Submit</Button>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Task</TableHead>
            <TableHead>Hours</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className=""></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task._id}>
              <TableCell className="font-medium">{task.task}</TableCell>
              <TableCell>{task.hour}</TableCell>
              <TableCell>{format(new Date(task.date), "PPP")}</TableCell>
              <TableCell className="flex gap-3">
                <Button size="icon" className="bg-primary-2">
                  <MdModeEdit />
                </Button>
                <Button size="icon" className="bg-red-500">
                  <MdDelete />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WorkSheet;
