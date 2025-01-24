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

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
const WorkSheet = () => {
    const [date, setDate] = useState(new Date());
    const handleAdd = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
    const task = form.get("task");
        const hour = form.get("hour");
        const taskInfo = {
            task,
            hour: Number(hour),
            date: date.toISOString(),
        }
        console.log(taskInfo);
    }

  return (
      <div>
          <h3 className="text-primary-2 bg-sec text-center mb-3 text-2xl md:text-3xl font-bold">Add Task</h3>
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
        <Input required name="hour"  type="number" className="" placeholder="Hours" />
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
    </div>
  );
};

export default WorkSheet;
