import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import { useContext } from "react";
import AuthContext from "@/provider/AuthContext";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { toast } from "react-toastify";
const UpdateTaskModal = ({ isOpen, oldTask, closeModal, refetch }) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    if (oldTask?.date) {
      const parsedDate = new Date(oldTask.date);

      setDate(parsedDate);
    }
  }, [oldTask?.date]);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const handleUpdate = async (e) => {
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

    const result = await axiosSecure.put(`/tasks/${oldTask?._id}`, taskInfo);
    console.log("hit");
    if (result.data.modifiedCount) {
      toast.success("Task Update successfully");
      refetch();
      closeModal();
    }
  };
  return (
    <div>
      <Dialog open={isOpen}>
        <DialogContent
          className="sm:max-w-[425px]"
          aria-describedby={undefined}
        >
          <DialogHeader>
            <DialogTitle className="text-center">Update Task</DialogTitle>
          </DialogHeader>
          <form
            onSubmit={handleUpdate}
            className="flex flex-col items-center gap-2 "
          >
            <Select defaultValue={oldTask?.task} name="task" required>
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
              defaultValue={oldTask?.hour}
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
            <Button type="submit" className="bg-primary-1 w-full">
              Update
            </Button>
          </form>
          <Button onClick={closeModal} className="bg-primary-2 w-full">
            Cancel
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UpdateTaskModal;
